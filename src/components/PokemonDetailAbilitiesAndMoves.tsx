import React from 'react';
import type { PokemonDetails } from '../types/pokemon';

interface PokemonDetailAbilitiesAndMovesProps {
  details: PokemonDetails;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translations: Record<string, any>;
  language: string;
}

const PokemonDetailAbilitiesAndMoves: React.FC<PokemonDetailAbilitiesAndMovesProps> = ({
  details,
  translations,
  language,
}) => (
  <>
    <div className="mb-6">
      <h3 className="text-xl sm:text-2xl font-montserrat-extrabold mb-3 text-center md:text-left">
        {translations[language].abilities}:
      </h3>
      <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-2 text-base sm:text-lg font-montserrat-regular">
        {details.abilities.map((abilityInfo) => (
          <li key={abilityInfo.ability.name} className="capitalize text-gray-700 dark:text-gray-300">
            {abilityInfo.ability.name.replace('-', ' ')}
            {abilityInfo.is_hidden && (
              <span className="text-xs sm:text-sm text-gray-500 ml-1">
                ({translations[language].hidden})
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-6">
      <h3 className="text-xl sm:text-2xl font-montserrat-extrabold mb-3 text-center md:text-left">
        {translations[language].someMoves}:
      </h3>
      <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto custom-scrollbar text-base sm:text-lg font-montserrat-regular">
        {details.moves.slice(0, 15).map((moveInfo) => (
          <li key={moveInfo.move.name} className="capitalize text-gray-700 dark:text-gray-300">
            {moveInfo.move.name.replace('-', ' ')}
          </li>
        ))}
        {details.moves.length > 15 && (
          <li className="text-gray-500 dark:text-gray-400 text-sm italic">
            {translations[language].andMore}
          </li>
        )}
      </ul>
    </div>
  </>
);

export default PokemonDetailAbilitiesAndMoves;
