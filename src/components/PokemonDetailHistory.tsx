import React from 'react';

interface PokemonDetailHistoryProps {
  pokemonHistory: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translations: Record<string, any>;
  language: string;
}

const PokemonDetailHistory: React.FC<PokemonDetailHistoryProps> = ({ pokemonHistory, translations, language }) => (
  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg shadow-inner border border-blue-100 dark:border-blue-800">
    <h3 className="text-xl sm:text-2xl font-montserrat-extrabold text-blue-800 dark:text-blue-200 mb-3 flex items-center justify-center md:justify-start">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 inline-block mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332-.477-4.5-1.253" />
      </svg>
      {translations[language].pokemonNovelty}
    </h3>
    {pokemonHistory ? (
      <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-montserrat-regular leading-relaxed text-center md:text-left">
        {pokemonHistory}
      </p>
    ) : (
      <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-montserrat-regular text-center md:text-left">{translations[language].noHistoryFound}</p>
    )}
  </div>
);

export default PokemonDetailHistory;