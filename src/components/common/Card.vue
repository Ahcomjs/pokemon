<template>
    <div class="card">
      <img :src="pokemon.imageUrl" alt="Pokemon" class="pokemon-image" />
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
        return word.charAt(0).toUpperCase() + word.slice(1);
      },
  
      getTypeColor(type) {
        const typeData = types.find(t => t.type.toLowerCase() === type.toLowerCase());
        return typeData ? typeData.color : '#ffffff'; 
      }
    },
  };
  </script>
  
  <style scoped>
  @import "./Card.css";
  </style>
  