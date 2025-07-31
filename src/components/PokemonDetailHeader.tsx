import React from 'react';
import { typeColors } from '../utils/pokemonUtils';
import type { PokemonDetails } from '../types/pokemon';

interface PokemonDetailHeaderProps {
  details: PokemonDetails;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translations: Record<string, any>; 
  language: string;
}

const PokemonDetailHeader: React.FC<PokemonDetailHeaderProps> = ({ details, translations, language }) => (
  <>
    <h2 className="text-4xl sm:text-5xl font-montserrat-extrabold text-red-600 dark:text-red-400 capitalize mb-4 drop-shadow-md text-center md:text-left">
      {details.name} <span className="text-gray-500 dark:text-gray-400 text-2xl sm:text-3xl font-montserrat-regular">#{String(details.id).padStart(3, '0')}</span>
    </h2>

    <div className="mb-6">
      <h3 className="text-xl sm:text-2xl font-montserrat-extrabold mb-3 text-center md:text-left">{translations[language].types}:</h3>
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {details.types.map(typeInfo => (
          <span
            key={typeInfo.type.name}
            className={`px-4 py-1 sm:px-5 sm:py-2 rounded-full text-white font-montserrat-extrabold text-sm sm:text-base shadow-lg ${typeColors[typeInfo.type.name] || 'bg-gray-500'} capitalize transform hover:scale-105 transition-transform duration-200`}
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    </div>
  </>
);

export default PokemonDetailHeader;