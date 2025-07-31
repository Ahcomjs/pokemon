import React, { useState, useEffect, useCallback, useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';
import PokemonCard from './PokemonCard';
import ScrollToTopButton from './ScrollToTopButton';
import { usePokemonData } from '../hooks/usePokemonData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import type { PokemonListItem } from '../types/pokemon';

interface PokemonListProps {
  onSelectPokemon: (pokemon: PokemonListItem) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ onSelectPokemon }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const [limit] = useState<number>(20);
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [currentTrivia, setCurrentTrivia] = useState<string>('');
  const { language } = useLanguage();

  const {
    pokemons,
    loading,
    types,
    hasMore,
    fetchPokemons,
    fetchTypes,
    setHasMore,
  } = usePokemonData();

  useEffect(() => {
    fetchTypes();
  }, [fetchTypes]);

  useEffect(() => {
    if (searchTerm || filterType) {
      setOffset(0);
      setHasMore(true);
    }
    fetchPokemons(offset, filterType, searchTerm.trim());
  }, [filterType, offset, searchTerm, fetchPokemons, setHasMore]);

  useEffect(() => {
    setCurrentTrivia(
      translations[language].pokemonTriviaList[
        Math.floor(Math.random() * translations[language].pokemonTriviaList.length)
      ]
    );
    const intervalId = setInterval(() => {
      setCurrentTrivia(
        translations[language].pokemonTriviaList[
          Math.floor(Math.random() * translations[language].pokemonTriviaList.length)
        ]
      );
    }, 10000);
    return () => clearInterval(intervalId);
  }, [language]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore && !filterType && !searchTerm.trim()) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  }, [loading, hasMore, filterType, searchTerm, limit]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setShowScrollToTop(!entries[0].isIntersecting && window.scrollY > 100);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, [pokemons, hasMore]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder={translations[language].searchPlaceholder}
          className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition-all duration-200 text-lg font-montserrat-regular"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition-all duration-200 text-lg font-montserrat-regular"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">{translations[language].allTypes}</option>
          {types.map((type: string) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading && pokemons.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 transition-all duration-300">
          {pokemons.map((pokemon: PokemonListItem) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onSelectPokemon={onSelectPokemon} />
          ))}
        </div>
      )}

      {hasMore && !filterType && !searchTerm.trim() && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-montserrat-extrabold text-lg transform hover:scale-105"
          >
            {loading ? translations[language].loading : translations[language].loadMore}
          </button>
        </div>
      )}

      {!hasMore && !loading && pokemons.length > 0 && !searchTerm.trim() && !filterType && (
        <p className="text-center text-gray-600 dark:text-gray-300 mt-8 text-lg font-montserrat-regular">
          {translations[language].endOfList}
        </p>
      )}
      {!loading && pokemons.length === 0 && (searchTerm.trim() || filterType) && (
        <p className="text-center text-gray-600 dark:text-gray-300 mt-8 text-lg font-montserrat-regular">
          {translations[language].noPokemonFound}
        </p>
      )}
      {!loading && pokemons.length === 0 && !searchTerm.trim() && !filterType && (
        <p className="text-center text-gray-600 dark:text-gray-300 mt-8 text-lg font-montserrat-regular">
          {translations[language].noPokemonToShow}
        </p>
      )}

      <div className="mt-10 p-6 bg-blue-100 dark:bg-blue-900 rounded-xl shadow-inner border border-blue-200 dark:border-blue-800">
        <h3 className="text-2xl font-montserrat-extrabold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 inline-block mr-2 text-blue-600 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9.247a8.672 8.672 0 00-1.65-.964A8.672 8.672 0 005.153 7.04c-.38-.073-.78-.11-1.18-.11H3.5a1 1 0 00-1 1v.5a1 1 0 001 1h.473c.4 0 .799.037 1.18.11a8.672 8.672 0 001.425.642 8.672 8.672 0 001.65.964A8.672 8.672 0 0010 11.96c.38.073.78.11 1.18.11h.473a1 1 0 001-1v-.5a1 1 0 00-1-1h-.473c-.4 0-.799-.037-1.18-.11a8.672 8.672 0 00-1.425-.642z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14v.01M12 18v.01M12 22v.01M16 10v.01M16 14v.01M16 18v.01M20 10v.01M20 14v.01M20 18v.01"
            />
          </svg>
          {translations[language].pokemonTriviaTitle}
        </h3>
        <p className="text-blue-700 dark:text-blue-300 text-lg font-montserrat-regular">
          {currentTrivia}
        </p>
      </div>

      <div ref={bottomRef} className="h-1"></div>

      {showScrollToTop && <ScrollToTopButton onClick={scrollToTop} />}
    </div>
  );
};

export default PokemonList;
