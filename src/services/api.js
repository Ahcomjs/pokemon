import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemonData(limit = 1025, ability = null) {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);

        const pokemonDetailsPromises = response.data.results.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url); 

            if (ability && !pokemonDetails.data.abilities.some(ab => ab.ability.name === ability)) {
                return null;
            }

            return {
                id: pokemonDetails.data.id,
                name: pokemonDetails.data.name,
                abilities: pokemonDetails.data.abilities.map(ability => ability.ability.name),
                imageUrl: pokemonDetails.data.sprites.front_default,
                stats: pokemonDetails.data.stats.map(stat => ({
                    name: stat.stat.name,
                    base: stat.base_stat
                })),
                types: pokemonDetails.data.types.map(type => type.type.name)
            };
        });

        const pokemonList = (await Promise.all(pokemonDetailsPromises)).filter(pokemon => pokemon !== null);

        return pokemonList;
    } catch (error) {
        console.error('Failed to fetch Pokémon list:', error.message);
        throw new Error('Failed to fetch Pokémon list');
    }
}
