<template>
  <v-col cols="12" sm="8" md="7" class="mb-5 -mt-2">
    <v-card
      v-for="(pokemon, i) in filteredPokemons"
      id="pokemon-item"
      :key="i"
      class="pointer"
      hover
      card-actions
      @click.stop="openDialog(pokemon)"
    >
      <v-card-text id="pokemon-name">
        <h3 class="headline mb-0">{{ pokemon.name }}</h3>

        <v-btn
          small
          absolute
          right
          plain
          fab
          depressed
          class="btn-bg"
          @click.stop="setFavorite(pokemon.name)"
        >
          <v-icon :id="pokemon.favorite ? 'icon-active' : 'icon-not-active'"
            >mdi-star</v-icon
          ></v-btn
        >
      </v-card-text>
    </v-card>
    <v-card v-intersect="getNextData"></v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    filteredPokemons: {
      type: Array,
      default: null,
    },
    openDialog: {
      type: Function,
      default: null,
    },
    setFavorite: {
      type: Function,
      default: null,
    },
    getNextData: {
      type: Function,
      default: null,
    },
  },
}
</script>
