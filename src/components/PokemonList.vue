<template>
    <div class="pokemon-list">
        <Card v-for="pokemon in pokemonList" :key="pokemon.id" :pokemon="pokemon" />
    </div>
</template>

<script>
import Card from './common/Card.vue';
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        Card
    },

    computed: {
        ...mapState('pokemon', ['pokemonList'])

    },

    methods: {
        ...mapActions('pokemon', ['fetchPokemonList'])
    },

    created() {
        this.fetchPokemonList();
    }
}
</script>

<style scoped>
    .pokemon-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>