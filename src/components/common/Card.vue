<template>
    <div class="card">
        <img :src="pokemon.imageUrl" alt="Pokemon">
        <div class="number">#{{ pokemon.id + 1 }}</div>
        <div class="name">{{ startWithCapital(pokemon.name) }}</div>
    </div>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    },

    methods: {
        startWithCapital(word){
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    },
};
</script>

<style scoped>
    @import "./Card.css";
</style>