import axios from 'axios';
import { BASE_URL, BASE_IMAGE_URL } from './index';

export async function fetchPokemonData() {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon?limit=100`);
        const pokemonList = response.data.results.map((pokemon, index) => ({
            id: index,
            name: pokemon.name,
            imageUrl: `${BASE_IMAGE_URL}/sprites/master/sprites/pokemon/${index + 1}.png`
        }));

        return pokemonList;

    } catch (error) {
        throw new Error('Failed to fetch Pokémon list');
    }
}
