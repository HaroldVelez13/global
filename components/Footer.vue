<template>
  <v-footer v-if="filteredPokemons.length > 0" fixed class="zIndex footer">
    <v-card flat tile width="100%" class="text-center white border-top">
      <v-card-text>
        <v-btn
          width="10em"
          rounded
          :color="!showAll ? 'accent' : 'primary'"
          @click="setShowAll(true)"
        >
          <v-icon>mdi-format-list-bulleted-square</v-icon> all
        </v-btn>
        <v-btn
          width="10em"
          rounded
          :color="showAll ? 'accent' : 'primary'"
          @click="setShowAll(false)"
        >
          <v-icon>mdi-star</v-icon> Favorites
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  props: {
    filteredPokemons: {
      type: Array,
      default: null,
    },
    showAll: {
      type: Boolean,
      default: null,
    },
    setShowAll: {
      type: Function,
      default: null,
    },
  },
}
</script>
