import React from 'react';
import type { PokemonDetails } from '../types/pokemon';

interface PokemonDetailStatsProps {
  details: PokemonDetails;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translations: Record<string, any>;
  language: string;
}

const PokemonDetailStats: React.FC<PokemonDetailStatsProps> = ({ details, translations, language }) => (
  <div className="mb-6">
    <h3 className="text-xl sm:text-2xl font-montserrat-extrabold mb-3 text-center md:text-left">{translations[language].baseStats}:</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {details.stats.map(statInfo => (
        <div key={statInfo.stat.name} className="flex flex-col sm:flex-row items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
          <span className="font-montserrat-regular w-full sm:w-28 capitalize text-gray-700 dark:text-gray-300 text-base sm:text-lg text-center sm:text-left">{statInfo.stat.name.replace('-', ' ')}:</span>
          <span className="ml-0 sm:ml-2 font-montserrat-extrabold text-blue-600 dark:text-blue-300 text-base sm:text-lg">{statInfo.base_stat}</span>
          <div className="flex-grow h-3 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 sm:mt-0 sm:ml-3 w-full">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${Math.min(100, (statInfo.base_stat / 255) * 100)}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PokemonDetailStats;