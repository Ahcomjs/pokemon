import React from 'react';
import type { EvolutionChainLink } from '../types/pokemon';

interface PokemonDetailEvolutionChainProps {
  evolutionChain: EvolutionChainLink[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translations: Record<string, any>;
  language: string;
}

const PokemonDetailEvolutionChain: React.FC<PokemonDetailEvolutionChainProps> = ({ evolutionChain, translations, language }) => (
  <div className="mb-4">
    <h3 className="text-xl sm:text-2xl font-montserrat-extrabold mb-3 text-center md:text-left">{translations[language].evolutionChain}:</h3>
    {evolutionChain.length > 0 ? (
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
        {evolutionChain.map((evo, index) => (
          <React.Fragment key={evo.id}>
            <div className="flex flex-col items-center p-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-200">
              <img
                src={evo.sprite}
                alt={evo.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/80x80/cccccc/000000?text=No+Img";
                }}
              />
              <span className="capitalize text-xs sm:text-base font-montserrat-regular text-gray-700 dark:text-gray-300 mt-1">{evo.name}</span>
            </div>
            {index < evolutionChain.length - 1 && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-gray-500 dark:text-gray-400 mx-1 sm:mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
    ) : (
      <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-montserrat-regular text-center md:text-left">{translations[language].noEvolutionChain}</p>
    )}
  </div>
);

export default PokemonDetailEvolutionChain;