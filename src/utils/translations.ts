interface Translations {
  [key: string]: {
    favoritesTeam: string;
    darkMode: string;
    language: string;
    searchPlaceholder: string;
    allTypes: string;
    viewHistory: string;
    loading: string;
    loadMore: string;
    endOfList: string;
    noPokemonFound: string;
    noPokemonToShow: string;
    pokemonTriviaTitle: string;
    pokemonTriviaList: string[]; 
    back: string;
    backToList: string;
    favorite: string;
    addToFavorites: string;
    inTeam: string;
    addToTeam: string;
    removedFromFavorites: (name: string) => string;
    addedToFavorites: (name: string) => string;
    removedFromTeam: (name: string) => string;
    addedToTeam: (name: string) => string;
    teamFull: string;
    errorLoadingDetails: string;
    types: string;
    baseStats: string;
    abilities: string;
    hidden: string;
    someMoves: string;
    andMore: string;
    weaknessesResistances: string;
    doubleDamageFrom: string;
    halfDamageFrom: string;
    noDamageFrom: string;
    none: string;
    evolutionChain: string;
    noEvolutionChain: string;
    pokemonNovelty: string;
    noHistoryFound: string;
    myPokemon: string;
    myTeam: string;
    noPokemonInTeam: string;
    removeFromTeam: string;
    myFavorites: string;
    noFavorites: string;
    removeFromFavorites: string;
    close: string;
  };
}

export const translations: Translations = {
  es: {
    favoritesTeam: 'Favoritos / Equipo',
    darkMode: 'Modo Oscuro',
    language: 'Idioma',
    searchPlaceholder: 'Buscar Pokémon por nombre...',
    allTypes: 'Todos los tipos',
    viewHistory: 'Ver historia',
    loading: 'Cargando...',
    loadMore: 'Cargar más',
    endOfList: 'Has llegado al final de la lista.',
    noPokemonFound: 'No se encontraron Pokémon con los criterios de búsqueda/filtro.',
    noPokemonToShow: 'No hay Pokémon para mostrar. Intenta recargar.',
    pokemonTriviaTitle: 'Dato Curioso Pokémon',
    pokemonTriviaList: [ 
      "¿Sabías que el nombre 'Pokémon' es una contracción de las palabras japonesas 'Pocket Monsters' (Monstruos de Bolsillo)?",
      "Pikachu es el Pokémon más reconocible y la mascota oficial de la franquicia.",
      "Mewtwo fue el primer Pokémon legendario creado genéticamente.",
      "El Pokémon Ditto puede transformarse en cualquier otro Pokémon, incluso en objetos.",
      "Eevee tiene la mayor cantidad de evoluciones de cualquier Pokémon, con ocho formas diferentes.",
      "Arceus es conocido como el creador del universo Pokémon.",
      "Jigglypuff es famoso por su habilidad para dormir a sus oponentes con su canto.",
      "Magikarp es considerado uno de los Pokémon más débiles, pero evoluciona en el poderoso Gyarados.",
      "Charizard es uno de los pocos Pokémon que tiene dos megaevoluciones diferentes.",
      "Gengar es un Pokémon de tipo fantasma que se dice que disfruta asustando a la gente.",
      "Snorlax solo se despierta para comer o cuando se usa la Poké Flauta.",
      "El Pokémon más pequeño es Joltik, que mide solo 0.1 metros de altura.",
      "El Pokémon más pesado es Cosmoem, con un peso de 999.9 kg.",
      "La región de Kanto, donde comenzó la aventura Pokémon, está basada en la región de Kantō en Japón.",
      "Ash Ketchum, el protagonista del anime, nunca ha ganado una Liga Pokémon importante en la serie principal hasta la Liga Alola.",
      "El Pokémon más rápido es Deoxys en su forma de velocidad, con una estadística base de velocidad de 180.",
      "Wobbuffet no puede aprender ningún movimiento de ataque por sí mismo, solo movimientos que reflejan el daño.",
      "El Pokémon más alto es Wailord, que mide 14.5 metros de altura.",
      "La Pokédex fue creada por el Profesor Oak.",
      "Se dice que la cola de Slowpoke es un manjar en el mundo Pokémon.",
      "Los Unown son Pokémon con forma de letras del alfabeto, y hay 28 formas diferentes.",
      "Rotom puede poseer varios electrodomésticos, cambiando su tipo y habilidades.",
      "El Pokémon con más brazos es Machamp, con cuatro brazos.",
      "El primer juego de Pokémon lanzado fuera de Japón fue Pokémon Rojo y Pokémon Azul en 1998.",
      "La canción tema original de Pokémon, 'Gotta Catch 'Em All', es una de las canciones de anime más reconocibles.",
    ],
    back: 'Volver',
    backToList: 'Volver a la lista',
    favorite: 'Favorito',
    addToFavorites: 'Añadir a Favoritos',
    inTeam: 'En Equipo',
    addToTeam: 'Añadir a Equipo',
    removedFromFavorites: (name: string) => `${name} eliminado de favoritos.`,
    addedToFavorites: (name: string) => `${name} añadido a favoritos.`,
    removedFromTeam: (name: string) => `${name} eliminado del equipo.`,
    addedToTeam: (name: string) => `${name} añadido al equipo.`,
    teamFull: 'Tu equipo ya está completo (máximo 6 Pokémon).',
    errorLoadingDetails: 'Error al cargar los detalles del Pokémon.',
    types: 'Tipos',
    baseStats: 'Estadísticas Base',
    abilities: 'Habilidades',
    hidden: 'oculta',
    someMoves: 'Algunos Movimientos',
    andMore: '...y más',
    weaknessesResistances: 'Debilidades y Resistencias',
    doubleDamageFrom: 'Doble Daño de',
    halfDamageFrom: 'Mitad Daño de',
    noDamageFrom: 'Sin Daño de',
    none: 'Ninguno',
    evolutionChain: 'Cadena de Evolución',
    noEvolutionChain: 'No se encontró cadena de evolución.',
    pokemonNovelty: 'Novedad del Pokémon',
    noHistoryFound: 'No se encontró una historia para este Pokémon.',
    myPokemon: 'Mis Pokémon',
    myTeam: 'Mi Equipo',
    noPokemonInTeam: 'Aún no tienes Pokémon en tu equipo. ¡Añade algunos desde la vista de detalle!',
    removeFromTeam: 'Eliminar del equipo',
    myFavorites: 'Mis Favoritos',
    noFavorites: 'Aún no tienes Pokémon favoritos. ¡Marca algunos desde la vista de detalle!',
    removeFromFavorites: 'Eliminar de favoritos',
    close: 'Cerrar',
  },
  en: {
    favoritesTeam: 'Favorites / Team',
    darkMode: 'Dark Mode',
    language: 'Language',
    searchPlaceholder: 'Search Pokémon by name...',
    allTypes: 'All Types',
    viewHistory: 'View story',
    loading: 'Loading...',
    loadMore: 'Load More',
    endOfList: 'You have reached the end of the list.',
    noPokemonFound: 'No Pokémon found with the search/filter criteria.',
    noPokemonToShow: 'No Pokémon to display. Try reloading.',
    pokemonTriviaTitle: 'Pokémon Trivia',
    pokemonTriviaList: [ 
      "Did you know that the name 'Pokémon' is a contraction of the Japanese words 'Pocket Monsters'?",
      "Pikachu is the most recognizable Pokémon and the official mascot of the franchise.",
      "Mewtwo was the first genetically engineered legendary Pokémon.",
      "The Pokémon Ditto can transform into any other Pokémon, even objects.",
      "Eevee has the most evolutions of any Pokémon, with eight different forms.",
      "Arceus is known as the creator of the Pokémon universe.",
      "Jigglypuff is famous for its ability to put opponents to sleep with its singing.",
      "Magikarp is considered one of the weakest Pokémon, but evolves into the powerful Gyarados.",
      "Charizard is one of the few Pokémon that has two different Mega Evolutions.",
      "Gengar is a ghost-type Pokémon said to enjoy scaring people.",
      "Snorlax only wakes up to eat or when the Poké Flute is used.",
      "The smallest Pokémon is Joltik, measuring only 0.1 meters tall.",
      "The heaviest Pokémon is Cosmoem, weighing 999.9 kg.",
      "The Kanto region, where the Pokémon adventure began, is based on the Kantō region in Japan.",
      "Ash Ketchum, the anime protagonist, has never won a major Pokémon League in the main series until the Alola League.",
      "The fastest Pokémon is Deoxys in its Speed Forme, with a base speed stat of 180.",
      "Wobbuffet cannot learn any attacking moves on its own, only moves that reflect damage.",
      "The tallest Pokémon is Wailord, standing at 14.5 meters (47 feet, 7 inches) tall.",
      "The Pokédex was created by Professor Oak.",
      "Slowpoke's tail is said to be a delicacy in the Pokémon world.",
      "Unown are Pokémon shaped like letters of the alphabet, and there are 28 different forms.",
      "Rotom can possess various household appliances, changing its type and abilities.",
      "The Pokémon with the most arms is Machamp, with four arms.",
      "The first Pokémon game released outside of Japan was Pokémon Red and Pokémon Blue in 1998.",
      "The original Pokémon theme song, 'Gotta Catch 'Em All', is one of the most recognizable anime songs.",
    ],
    back: 'Back',
    backToList: 'Back to list',
    favorite: 'Favorite',
    addToFavorites: 'Add to Favorites',
    inTeam: 'In Team',
    addToTeam: 'Add to Team',
    removedFromFavorites: (name: string) => `${name} removed from favorites.`,
    addedToFavorites: (name: string) => `${name} added to favorites.`,
    removedFromTeam: (name: string) => `${name} removed from team.`,
    addedToTeam: (name: string) => `${name} added to team.`,
    teamFull: 'Your team is full (max 6 Pokémon).',
    errorLoadingDetails: 'Error loading Pokémon details.',
    types: 'Types',
    baseStats: 'Base Stats',
    abilities: 'Abilities',
    hidden: 'hidden',
    someMoves: 'Some Moves',
    andMore: '...and more',
    weaknessesResistances: 'Weaknesses and Resistances',
    doubleDamageFrom: 'Double Damage From',
    halfDamageFrom: 'Half Damage From',
    noDamageFrom: 'No Damage From',
    none: 'None',
    evolutionChain: 'Evolution Chain',
    noEvolutionChain: 'No evolution chain found.',
    pokemonNovelty: 'Pokémon Novelty',
    noHistoryFound: 'No history found for this Pokémon.',
    myPokemon: 'My Pokémon',
    myTeam: 'My Team',
    noPokemonInTeam: 'You don\'t have any Pokémon in your team yet. Add some from the detail view!',
    removeFromTeam: 'Remove from team',
    myFavorites: 'My Favorites',
    noFavorites: 'You don\'t have any favorite Pokémon yet. Mark some from the detail view!',
    removeFromFavorites: 'Remove from favorites',
    close: 'Close',
  },
};
