<template>
    <div>
        <div class="filters">
            <input type="text" v-model="searchQuery" placeholder="Search by name..." class="input" />
            <select v-model="selectedType" class="select">
                <option value="">Filter by type</option>
                <option v-for="type in types" :key="type.type" :value="type.type.toLowerCase()">
                    {{ type.type }}
                </option>
            </select>
            <select v-model="selectedAbility" class="select">
                <option value="">Filter by ability</option>
                <option v-for="ability in abilities" :key="ability" :value="ability">
                    {{ ability }}
                </option>
            </select>
        </div>

        <div v-if="loading" class="loading">Loading...</div>
        <div v-else-if="filteredPokemonList.length === 0" class="notfound">Not Found</div>

        <div v-else class="pokemon-list">
            <Card v-for="pokemon in filteredPokemonList" :key="pokemon.id" :pokemon="pokemon" />
        </div>
    </div>
</template>

<script>
import Card from './common/Card.vue';
import { mapState, mapActions } from 'vuex';
import { types } from '../assets/js/types.js';

export default {
    components: {
        Card
    },

    data() {
        return {
            loading: true,
            notfound: true,
            searchQuery: '',
            selectedType: '',
            selectedAbility: '',
            types,
            abilities: []
        };
    },

    computed: {
        ...mapState('pokemon', ['pokemonList']),
        filteredPokemonList() {
            return this.pokemonList.filter(pokemon => {
                const matchesName = pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesType = this.selectedType
                    ? pokemon.types.some(type => type.toLowerCase() === this.selectedType)
                    : true;
                const matchesAbility = this.selectedAbility
                    ? pokemon.abilities.includes(this.selectedAbility)
                    : true;

                return matchesName && matchesType && matchesAbility;
            });
        }
    },

    methods: {
        ...mapActions('pokemon', ['fetchPokemonList']),
        async loadPokemon() {
            this.loading = true;
            await this.fetchPokemonList();
            this.loading = false;

            this.abilities = this.pokemonList
                .flatMap(pokemon => pokemon.abilities)
                .filter((value, index, self) => self.indexOf(value) === index);
        }
    },

    created() {
        this.loadPokemon();
    }
};
</script>

<style scoped>
@font-face {
    font-family: 'Montserrat';
    src: url('../assets/fonts/Montserrat-ExtraBold.ttf') format('truetype');
}

.filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    max-width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
}

.input,
.select {
    padding: 12px 15px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 16px;
    outline: none;
    background: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    width: 250px;
    font-family: Montserrat;
}

.input {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.pokemon-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    padding: 20px;
}

.loading {
    margin-top: 20px;
    font-family: Montserrat;
    font-size: 50px;
}

.notfound {
    margin-top: 20px;
    font-family: Montserrat;
    font-size: 50px;
}

@media screen and (max-width: 768px) {
    .filters {
        flex-direction: column;
        align-items: stretch;
    }

    .input,
    .select {
        width: 100%;
    }
}

@media screen and (max-width: 768px) {
    .input {
        width: 100%;
    }
}

@media screen and (max-width: 480px) {
    .input {
        width: 100%;
        margin: 0;
    }
}
</style>
