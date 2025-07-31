import React from 'react';
import type { PokemonListItem } from '../types/pokemon';
import pokeballIcon from '../assets/img/pokeball.png';

interface PokemonCardProps {
  pokemon: PokemonListItem;
  onSelectPokemon: (pokemon: PokemonListItem) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onSelectPokemon }) => {
  return (
    <div
      className="relative group bg-white/30 dark:bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700 overflow-hidden cursor-pointer"
      onClick={() => onSelectPokemon(pokemon)}
    >
      <img
        src={pokeballIcon}
        alt="Pokeball Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-5 group-hover:scale-110 transition-transform duration-500"
      />
      <div className="relative z-10 flex justify-center mb-4">
        <img
          src={pokemon.sprite}
          alt={pokemon.name}
          className="w-28 h-28 object-contain drop-shadow-lg transition-all duration-300 group-hover:scale-110"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://placehold.co/128x128/cccccc/000000?text=No+Img";
          }}
        />
      </div>
      <div className="relative z-10 text-center">
        <p className="text-2xl font-montserrat-extrabold text-gray-900 dark:text-white capitalize drop-shadow-sm tracking-wide">
          {pokemon.name}
        </p>
        <p className="text-sm text-gray-600 font-montserrat-black dark:text-gray-300 mt-1">
          #{String(pokemon.id).padStart(3, '0')}
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-3xl"></div>
    </div>
  );
};

export default PokemonCard;
