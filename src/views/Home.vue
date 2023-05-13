<template>
    <div class="home">
        <img src="../assets/img/pokedex.png" class="logo" alt="pokedex-logo">
        <PokemonList />
    </div>
</template>

<script>
import PokemonList from "../components/PokemonList.vue";

export default {
    components: {
        PokemonList
    }
};
</script>


<style scoped>
.home {
    text-align: center;
}

.logo {
    font-size: 5.5em;
    margin-bottom: 16px;
    font-family: "Pokemon Solid", sans-serif;
    color: #ffcb05;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>