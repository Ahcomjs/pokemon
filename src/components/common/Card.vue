<template>
  <div class="card">
    <div class="pokemon-image" >
      <img :src="pokemon.imageUrl" alt="Pokemon" />
    </div>

    <div class="card-header">
      <div class="number">#{{ pokemon.id }}</div>
      <div class="name">{{ startWithCapital(pokemon.name) }}</div>
    </div>
    <div class="card-body">
      <div class="types">
        <span v-for="type in pokemon.types" :key="type" class="type"
              :style="{ backgroundColor: getTypeColor(type) }">
          {{ startWithCapital(type) }}
        </span>
      </div>
      <div class="abilities">
        <strong>Abilities:</strong>
        <ul>
          <li v-for="ability in pokemon.abilities" :key="ability">{{ startWithCapital(ability) }}</li>
        </ul>
      </div>
      <div class="stats">
        <strong>Stats:</strong>
        <ul>
          <li v-for="stat in pokemon.stats" :key="stat.name">
            <span class="stat-name">{{ startWithCapital(stat.name) }}</span>: 
            <span class="stat-value">{{ stat.base }}</span>
          </li>
        </ul>
      </div>

      <div class="button-container">
        <button class="history-button" @click="goToHistory">
          View History
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { types } from '../../assets/js/types.js';

export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },

  methods: {
    startWithCapital(word) {
      const nameWithoutExtras = word.split('-')[0]; 
      return nameWithoutExtras.charAt(0).toUpperCase() + nameWithoutExtras.slice(1).toLowerCase();
  },

    getTypeColor(type) {
      const typeData = types.find(t => t.type.toLowerCase() === type.toLowerCase());
      return typeData ? typeData.color : '#ffffff'; 
    },

    goToHistory() {
      const formattedName = this.startWithCapital(this.pokemon.name);
      const url = `https://pokemon.fandom.com/wiki/${formattedName}`;
      window.open(url, "_blank"); 
    }
  },
};
</script>

<style scoped>
@import "./Card.css";
</style>
