<template>
  <v-row align="center" justify="center" id="full-content">
     <PokeBall id="ball"/>
  </v-row>
</template>
<script>
export default {
  mounted: function () {
    this.getData()
    this.$nextTick(function () {
      
      setTimeout(() => {
        this.$router.push({
          path: 'pokemons',
        }) 
      }, 1500)
    
    })
  },
  methods: {
    getData() {
      this.$store.dispatch("getAllPokemons")
    }
  }
  
}
</script>

<style scoped>
#full-content{
      height: 100vh;
}
#ball{
  animation: bounce 1.5s infinite;

}
@keyframes bounce{
  10%{
    height: 106px;
    width: 106px;
  }
  50%{
    height: 83px;
    width: 83px;
    transform:translateY(-5rem) ;
  }
  100%{
     transform:translateY(0px) ;
  }
}
</style>
