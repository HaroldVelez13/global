<template>
  <div>
    <v-row justify="center" align="center" class="zIndex">
      <v-col cols="12" sm="8" md="7">
        <v-text-field
          v-model="mySearch"
          placeholder="Search"
          solo
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <PokemonList
        v-if="filteredPokemons.length > 0"
        :filtered-pokemons="filteredPokemons"
        :open-dialog="openDialog"
        :set-favorite="setFavorite"
        :get-next-data="getNextData"
      ></PokemonList>

      <EmptySearch v-else :go-home="goHome" />

      <PokemonDialog
        v-if="dialog"
        :pokemon-data="pokemonData"
        :dialog="dialog"
        :close-dialog="closeDialog"
        :set-favorite="setFavorite"
      ></PokemonDialog>
    </v-row>
    <Footer
      :filtered-pokemons="filteredPokemons"
      :show-all="showAll"
      :set-show-all="setShowAll"
    ></Footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  
  computed: {
    ...mapState([
      'pokemonsData',
      'pokemonData',
      'dialog',
      'nextFecth',
      'search',
      'showAll',
    ]),
    mySearch: {
      get() {
        return this.search
      },
      set(value) {
        this.$store.dispatch('changeSearch', value)
      }
    },
    filteredPokemons() {
      let pokemonsData = this.pokemonsData
      if (!this.showAll) {
        pokemonsData = pokemonsData.filter((item) => {
          return item.favorite
        })
      }
      if (this.mySearch) {  
        pokemonsData = pokemonsData.filter((item) => {
          return item.name.toLowerCase().includes(this.mySearch.toLowerCase())
        })
      }
      return pokemonsData
    },
  },
  mounted: function () {
    this.getData()
  },
  methods: {
    getData() {
      this.$store.dispatch("getAllPokemons")
    },
    getNextData() {
      this.$store.dispatch('getNextPokemons', this.nextFecth)
    },
    goHome() {
      this.$store.dispatch('goHome')
    },
    setFavorite(name) {
      this.$store.dispatch('setFavorite', name)
    },
    setShowAll(set) {
      this.$store.dispatch('setShowAll', set)
    },
    openDialog({ url, favorite }) {
      this.$store.dispatch('openDialog', { url, favorite })
    },
    closeDialog() {
      this.$store.dispatch('closeDialog')
    }
  },
}
</script>

<style>
.btn-footer {
  width: 275px !important;
}
.btn-bg {
  background-color: #f5f5f5;
}
.mb-5 {
  margin-bottom: 5rem !important;
}
.-mt-2 {
  margin-top: -2rem !important;
}
.footer {
  padding: 0;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05) !important;
}

.zIndex {
  z-index: 10;
}
#pokemon-item {
  margin-top: 0.8rem;
  position: relative;
}
.pointer {
  cursor: pointer;
}
#pokemon-name {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;

  color: #353535;
}
#icon-not-active {
  color: #bfbfbf;
}
#icon-active {
  color: #eca539;
}
</style>
