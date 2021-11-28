/* import {Store} from "vuex"; */
export const state = () => ({
    pokemonsData: [],
    pokemonData: {},
    nextFecth: null,
    dialog:false,
    showAll: true,
    search: ''
});

export const mutations = {
  SET_POKEMONS(state, payload) {
    state.pokemonsData = payload.pokemonsData;
    state.nextFecth = payload.nextFecth;
  },
  ADD_POKEMONS(state, payload) {
    state.pokemonsData = [...state.pokemonsData,...payload.newPokemons];
    state.nextFecth = payload.nextFecth;
  },
  ADD_POKEMON(state, payload) {
    state.pokemonData = payload.pokemonData;
    state.dialog = true;
  },
  DELETE_POKEMON(state) {
    state.pokemonData = {};
    state.dialog = false;
  },
  SET_FAVORITE(state, {name}){
    let pokemonsData = [...state.pokemonsData]
    const pokemonData = state.pokemonData
    pokemonsData = pokemonsData.map((pokemon) => {
      if (pokemon.name === name) {
        pokemon.favorite = !pokemon.favorite
      }
      return pokemon
    })

    state.pokemonsData = pokemonsData
    if (pokemonData?.name === name) {
      state.pokemonData.favorite = !pokemonData.favorite
    }
  },
  SET_SHOW_ALL(state, {set}){
    state.showAll = set
  },
  GO_HOME(state){
    state.search = "";
    state.showAll = true
  },
  SET_SEARCH(state,value){
    state.search = value;
  }
};

export const actions = {
  getAllPokemons(context) {
    this.$axios.$get('https://pokeapi.co/api/v2/pokemon').then((response) => {
      
      const data = response?.results?.map((pok) => {
        return {
          name: pok.name,
          url: pok.url,
          favorite: false,
        }
      })
      const nextFecth = response?.next
      const pokemonsData = data
      context.commit("SET_POKEMONS", {pokemonsData, nextFecth});
    })
  },
  getNextPokemons(context,nextFecth) {
    this.$axios.$get(nextFecth).then((response) => {
      
      const data = response?.results?.map((pok) => {
        return {
          name: pok.name,
          url: pok.url,
          favorite: false,
        }
      })

      const newPokemons = data
      const nextFecth = response?.next
      context.commit("ADD_POKEMONS", {newPokemons, nextFecth});
    })
  },
  openDialog(context,{ url, favorite }) {
    this.$axios.$get(url).then((response) => {
      const data = { favorite, ...response }
      const pokemonData = data
      context.commit("ADD_POKEMON", {pokemonData});
    })
  },
  closeDialog(context) {
    context.commit("DELETE_POKEMON");
  },
  setFavorite(context, name){
    context.commit("SET_FAVORITE", {name})

  },
  setShowAll(context,set){
    context.commit("SET_SHOW_ALL", {set})
  },
  goHome(context){
    context.commit("GO_HOME")
  },
  changeSearch(context, value){
    context.commit("SET_SEARCH",value)
  }
};

/* export const getters = {
  getFilteredPokemons(state) {
    let pokemonsData = [...state.pokemonsData]
    if (!state.showAll) {
      pokemonsData = pokemonsData.filter((item) => {
        return item.favorite
      })
    }
    if (state.search) {
      pokemonsData = pokemonsData.filter((item) => {
        return item.name.toLowerCase().includes(state.search.toLowerCase())
      })
    }
    return pokemonsData
  }
}; */

/* export default new Store({
  state,
  mutations,
  actions,
  getters
}); */