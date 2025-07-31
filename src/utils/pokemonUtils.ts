interface TypeColors {
  [key: string]: string;
}

const typeColors: TypeColors = {
  normal: 'bg-gray-400', fire: 'bg-red-500', water: 'bg-blue-500', grass: 'bg-green-500', electric: 'bg-yellow-400',
  ice: 'bg-blue-200', fighting: 'bg-red-700', poison: 'bg-purple-600', ground: 'bg-yellow-700', flying: 'bg-indigo-400',
  psychic: 'bg-pink-500', bug: 'bg-lime-600', rock: 'bg-amber-700', ghost: 'bg-purple-800', dragon: 'bg-indigo-700',
  steel: 'bg-gray-500', fairy: 'bg-pink-300', dark: 'bg-gray-700',
};

export { typeColors };