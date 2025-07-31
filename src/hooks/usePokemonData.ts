import { useState, useCallback, useEffect } from 'react';
import type { PokemonListItem, PokemonDetails, EvolutionChainLink, TypeDamageRelations } from '../types/pokemon';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

interface UsePokemonDataResult {
  pokemons: PokemonListItem[];
  details: PokemonDetails | null;
  loading: boolean;
  types: string[];
  hasMore: boolean;
  evolutionChain: EvolutionChainLink[];
  typeRelations: TypeDamageRelations;
  pokemonHistory: string;
  fetchPokemons: (offset: number, filterType: string, searchTerm: string, limit?: number) => Promise<void>;
  fetchTypes: () => Promise<void>;
  fetchPokemonDetails: (pokemonName: string) => Promise<void>;
  setPokemons: React.Dispatch<React.SetStateAction<PokemonListItem[]>>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const usePokemonData = (): UsePokemonDataResult => {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [details, setDetails] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [types, setTypes] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [evolutionChain, setEvolutionChain] = useState<EvolutionChainLink[]>([]);
  const [typeRelations, setTypeRelations] = useState<TypeDamageRelations>({
    double_damage_from: [],
    half_damage_from: [],
    no_damage_from: [],
  });
  const [pokemonHistory, setPokemonHistory] = useState<string>('');
  const [allPokemonNames, setAllPokemonNames] = useState<Array<{ name: string; url: string }> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [speciesData, setSpeciesData] = useState<any | null>(null);

  const { language } = useLanguage();

  const fetchTypes = useCallback(async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/type');
      const data = await response.json();
      setTypes(data.results.map((type: { name: string }) => type.name));
    } catch (error) {
      console.error('Error fetching types:', error);
    }
  }, []);

  useEffect(() => {
    const fetchAllNames = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000');
        const data = await response.json();
        setAllPokemonNames(data.results);
      } catch (error) {
        console.error('Error fetching all Pokémon names:', error);
      }
    };
    if (!allPokemonNames) {
      fetchAllNames();
    }
  }, [allPokemonNames]);

  const fetchPokemons = useCallback(async (offset: number, filterType: string, searchTerm: string, limit: number = 20) => {
    setLoading(true);
    try {
      let pokemonResults: Array<{ name: string; url: string }>;
      let newHasMore: boolean;
      const trimmedSearchTerm = searchTerm.trim();

      if (trimmedSearchTerm && allPokemonNames) {
        pokemonResults = allPokemonNames.filter(p =>
          p.name.toLowerCase().includes(trimmedSearchTerm.toLowerCase())
        );
        newHasMore = false;
      } else if (filterType) {
        const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${filterType}`);
        const typeData = await typeResponse.json();
        pokemonResults = typeData.pokemon.map((p: { pokemon: { name: string; url: string } }) => p.pokemon);
        newHasMore = false;
      } else {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const data = await response.json();
        pokemonResults = data.results;
        newHasMore = data.next !== null;
      }

      const detailedPokemons: PokemonListItem[] = await Promise.all(
        pokemonResults.map(async (p: { name: string; url: string }) => {
          const id = p.url.split('/').slice(-2, -1)[0];
          return {
            id: id,
            name: p.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
            url: p.url,
          };
        })
      );

      if (trimmedSearchTerm || filterType || offset === 0) {
        setPokemons(detailedPokemons);
      } else {
        const existingIds = new Set(pokemons.map(p => p.id));
        const uniqueNewPokemons = detailedPokemons.filter(p => !existingIds.has(p.id));
        setPokemons(prevPokemons => [...prevPokemons, ...uniqueNewPokemons]);
      }
      setHasMore(newHasMore);
    } catch (error) {
      console.error('Error fetching Pokemons:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [allPokemonNames]);

  const fetchPokemonDetails = useCallback(async (pokemonName: string) => {
    setLoading(true);
    setDetails(null);
    setPokemonHistory('');
    setSpeciesData(null);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data: PokemonDetails = await response.json();
      setDetails(data);

      const speciesRes = await fetch(data.species.url);
      const fetchedSpeciesData = await speciesRes.json();
      setSpeciesData(fetchedSpeciesData);

      const evolutionChainRes = await fetch(fetchedSpeciesData.evolution_chain.url);
      const evolutionChainData = await evolutionChainRes.json();

      const evolutions: EvolutionChainLink[] = [];
      let current = evolutionChainData.chain;
      while (current) {
        const id = current.species.url.split('/').slice(-2, -1)[0];
        evolutions.push({
          id: id,
          name: current.species.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
        });
        current = current.evolves_to.length > 0 ? current.evolves_to[0] : null;
      }
      setEvolutionChain(evolutions);

      const relations: {
        double_damage_from: Set<string>;
        half_damage_from: Set<string>;
        no_damage_from: Set<string>;
      } = {
        double_damage_from: new Set(),
        half_damage_from: new Set(),
        no_damage_from: new Set(),
      };
      for (const type of data.types) {
        const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${type.type.name}`);
        const typeData = await typeResponse.json();
        typeData.damage_relations.double_damage_from.forEach((rel: { name: string }) => relations.double_damage_from.add(rel.name));
        typeData.damage_relations.half_damage_from.forEach((rel: { name: string }) => relations.half_damage_from.add(rel.name));
        typeData.damage_relations.no_damage_from.forEach((rel: { name: string }) => relations.no_damage_from.add(rel.name));
      }
      setTypeRelations({
        double_damage_from: Array.from(relations.double_damage_from),
        half_damage_from: Array.from(relations.half_damage_from),
        no_damage_from: Array.from(relations.no_damage_from),
      });
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
      setDetails(null);
      setPokemonHistory('');
      setSpeciesData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (speciesData) {
      const flavorTextEntry = speciesData.flavor_text_entries.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (entry: any) => entry.language.name === language
      );
      setPokemonHistory(
        flavorTextEntry
          ? flavorTextEntry.flavor_text.replace(/[\n\f]/g, ' ')
          : translations[language].noHistoryFound
      );
    }
  }, [speciesData, language]);

  return {
    pokemons,
    details,
    loading,
    types,
    hasMore,
    evolutionChain,
    typeRelations,
    pokemonHistory,
    fetchPokemons,
    fetchTypes,
    fetchPokemonDetails,
    setPokemons,
    setHasMore,
  };
};

export { usePokemonData };
