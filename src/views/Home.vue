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
    margin-bottom: 16px;
    margin-top: 50px;
    width: 100%;
    max-width: 500px;
    font-family: "Pokemon Solid", sans-serif;
    color: #ffcb05;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 768px) {
    .logo {
        max-width: 300px;
    }
}

</style>