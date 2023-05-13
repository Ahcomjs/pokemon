import { fetchPokemonData } from '../../services/api';

const state = {
    pokemonList: []
};

const mutations = {
    SET_POKEMON_LIST(state, pokemonList) {
        state.pokemonList = pokemonList;
    }
};

const actions = {
    async fetchPokemonList({ commit }) {
        try {
            const response = await fetchPokemonData();
            commit("SET_POKEMON_LIST", response);
        } catch (error) {
            console.error(error);
        }
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};