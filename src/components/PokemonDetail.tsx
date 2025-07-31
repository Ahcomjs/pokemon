import React, { useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { usePokemonData } from '../hooks/usePokemonData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import type { PokemonListItem } from '../types/pokemon';

import PokemonDetailHeader from '../components/PokemonDetailHeader';
import PokemonDetailImages from '../components/PokemonDetailImages';
import PokemonDetailStats from '../components/PokemonDetailStats';
import PokemonDetailAbilitiesAndMoves from '../components/PokemonDetailAbilitiesAndMoves';
import PokemonDetailTypeRelations from '../components/PokemonDetailTypeRelations';
import PokemonDetailEvolutionChain from '../components/PokemonDetailEvolutionChain';
import PokemonDetailHistory from '../components/PokemonDetailHistory';

import pokeballIcon from '../assets/img/pokeball.png';

interface PokemonDetailProps {
  pokemon: PokemonListItem | null;
  onBack: () => void;
  showMessage: (msg: string) => void;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon, onBack }) => {
  const { language } = useLanguage();
  const {
    details,
    loading,
    evolutionChain,
    typeRelations,
    pokemonHistory,
    fetchPokemonDetails,
  } = usePokemonData();

  useEffect(() => {
    if (pokemon) {
      fetchPokemonDetails(pokemon.name);
    }
  }, [pokemon, fetchPokemonDetails]);

  if (loading || !details) {
    return (
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center min-h-[400px]">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <p className="text-xl text-red-500 font-montserrat-regular">
            {translations[language].errorLoadingDetails}
          </p>
        )}
        <button
          onClick={onBack}
          className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-montserrat-extrabold text-lg transform hover:scale-105 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 inline-block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {translations[language].backToList}
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
      <img
        src={pokeballIcon}
        alt="Pokeball Background"
        className="absolute -top-10 -right-10 w-48 h-48 opacity-5 dark:opacity-3 rotate-12"
      />
      <img
        src={pokeballIcon}
        alt="Pokeball Background"
        className="absolute -bottom-10 -left-10 w-48 h-48 opacity-5 dark:opacity-3 -rotate-12"
      />
      <img
        src={details.sprites.other.home.front_default || "https://placehold.co/400x400/cccccc/000000?text=No+Img"}
        alt={`${details.name} background`}
        className="absolute inset-0 w-full h-full object-contain opacity-10 dark:opacity-5 scale-125 pointer-events-none"
        style={{ filter: 'grayscale(50%) blur(3px)' }}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://placehold.co/400x400/cccccc/000000?text=No+Img";
        }}
      />
      <button
        onClick={onBack}
        className="mb-6 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center shadow-md font-montserrat-extrabold text-base transform hover:scale-105 z-10 relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        {translations[language].back}
      </button>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
        <PokemonDetailImages details={details} translations={translations} language={language} />
        <div className="flex-grow w-full">
          <PokemonDetailHeader details={details} translations={translations} language={language} />
          <PokemonDetailStats details={details} translations={translations} language={language} />
          <PokemonDetailAbilitiesAndMoves details={details} translations={translations} language={language} />
          <PokemonDetailTypeRelations typeRelations={typeRelations} translations={translations} language={language} />
          <PokemonDetailEvolutionChain evolutionChain={evolutionChain} translations={translations} language={language} />
          <PokemonDetailHistory pokemonHistory={pokemonHistory} translations={translations} language={language} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
