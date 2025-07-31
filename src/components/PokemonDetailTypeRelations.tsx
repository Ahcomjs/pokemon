import React from 'react';
import { typeColors } from '../utils/pokemonUtils';
import type { TypeDamageRelations } from '../types/pokemon';

interface PokemonDetailTypeRelationsProps {
  typeRelations: TypeDamageRelations;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translations: Record<string, any>;
  language: string;
}

const PokemonDetailTypeRelations: React.FC<PokemonDetailTypeRelationsProps> = ({ typeRelations, translations, language }) => (
  <div className="mb-6">
    <h3 className="text-xl sm:text-2xl font-montserrat-extrabold mb-3 text-center md:text-left">{translations[language].weaknessesResistances}:</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div>
        <h4 className="font-montserrat-extrabold text-lg sm:text-xl text-red-500 mb-2">{translations[language].doubleDamageFrom}:</h4>
        <div className="flex flex-wrap gap-2">
          {typeRelations.double_damage_from && typeRelations.double_damage_from.length > 0 ? (
            typeRelations.double_damage_from.map(type => (
              <span key={type} className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm font-montserrat-extrabold ${typeColors[type] || 'bg-gray-500'} capitalize shadow-md`}>
                {type}
              </span>
            ))
          ) : (
            <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-montserrat-regular">{translations[language].none}</span>
          )}
        </div>
      </div>
      <div>
        <h4 className="font-montserrat-extrabold text-lg sm:text-xl text-green-500 mb-2">{translations[language].halfDamageFrom}:</h4>
        <div className="flex flex-wrap gap-2">
          {typeRelations.half_damage_from && typeRelations.half_damage_from.length > 0 ? (
            typeRelations.half_damage_from.map(type => (
              <span key={type} className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm font-montserrat-extrabold ${typeColors[type] || 'bg-gray-500'} capitalize shadow-md`}>
                {type}
              </span>
            ))
          ) : (
            <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-montserrat-regular">{translations[language].none}</span>
          )}
        </div>
      </div>
      <div>
        <h4 className="font-montserrat-extrabold text-lg sm:text-xl text-blue-500 mb-2">{translations[language].noDamageFrom}:</h4>
        <div className="flex flex-wrap gap-2">
          {typeRelations.no_damage_from && typeRelations.no_damage_from.length > 0 ? (
            typeRelations.no_damage_from.map(type => (
              <span key={type} className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm font-montserrat-extrabold ${typeColors[type] || 'bg-gray-500'} capitalize shadow-md`}>
                {type}
              </span>
            ))
          ) : (
            <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-montserrat-regular">{translations[language].none}</span>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default PokemonDetailTypeRelations;