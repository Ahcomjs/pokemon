export interface PokemonListItem {
  id: string;
  name: string;
  sprite: string;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: Array<{
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }>;
}

export interface PokemonSprite {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    home: {
      front_default: string | null;
    };
    
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    'official-artwork': {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
}

export interface PokemonDetails {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: Array<{ name: string; url: string }>;
  game_indices: Array<{ game_index: number; version: { name: string; url: string } }>;
  held_items: unknown[]; 
  location_area_encounters: string;
  moves: PokemonMove[];
  species: { name: string; url: string };
  sprites: PokemonSprite;
  stats: PokemonStat[];
  types: PokemonType[];
  past_types: unknown[]; 
}

export interface EvolutionChainLink {
  id: string;
  name: string;
  sprite: string;
}

export interface TypeDamageRelations {
  double_damage_from: string[];
  half_damage_from: string[];
  no_damage_from: string[];
}