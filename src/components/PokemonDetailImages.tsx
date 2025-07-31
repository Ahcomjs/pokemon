import React from 'react';
import type { PokemonDetails } from '../types/pokemon';

interface PokemonDetailImagesProps {
    details: PokemonDetails;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    translations: Record<string, any>;
    language: string;

}

const PokemonDetailImages: React.FC<PokemonDetailImagesProps> = ({ details, translations, language }) => {

    function startWithCapital(word: string): string {
        const baseName = word.split('-')[0];
        return baseName.charAt(0).toUpperCase() + baseName.slice(1).toLowerCase();
    }

    const goToHistory = (pokemonName: string): void => {
        const formattedName = startWithCapital(pokemonName);
        const wikiUrl = `https://pokemon.fandom.com/wiki/${formattedName}`;
        window.open(wikiUrl, "_blank");
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "https://placehold.co/96x96/cccccc/000000?text=No+Img";
    };

    return (
        <div className="flex flex-col items-center flex-shrink-0 bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-600 w-full md:w-auto">
            <img
                src={details.sprites.other.home.front_default || "https://placehold.co/250x250/cccccc/000000?text=No+Img"}
                alt={details.name}
                className="w-48 h-48 sm:w-64 sm:h-64 object-contain mb-4 transition-transform duration-300 hover:scale-105 drop-shadow-xl"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/250x250/cccccc/000000?text=No+Img";
                }}
            />
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                <img src={details.sprites.front_default || "https://placehold.co/96x96/cccccc/000000?text=No+Img"} alt={`${details.name} frente`} className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg bg-gray-100 dark:bg-gray-600 p-2 shadow-md transition-transform hover:scale-110" onError={handleImageError} />
                <img src={details.sprites.back_default || "https://placehold.co/96x96/cccccc/000000?text=No+Img"} alt={`${details.name} espalda`} className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg bg-gray-100 dark:bg-gray-600 p-2 shadow-md transition-transform hover:scale-110" onError={handleImageError} />
                {details.sprites.front_shiny && (
                    <img src={details.sprites.front_shiny} alt={`${details.name} shiny`} className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg bg-gray-100 dark:bg-gray-600 p-2 shadow-md transition-transform hover:scale-110" onError={handleImageError} />
                )}
            </div>
            <button
                onClick={() => goToHistory(details.name)}
                className="px-7 py-2 rounded-full border-2 border-red-500 text-red-500 font-extrabold uppercase tracking-wide bg-transparent transition-all duration-300 ease-in-out hover:text-white hover:bg-red-600 hover:shadow-red-500/50  focus:outline-none focus:ring-2 focus:ring-red-400"
            >
                {translations[language].viewHistory}
            </button>
        </div>
    );
};

export default PokemonDetailImages;