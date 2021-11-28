<template>
  <v-dialog v-model="myDialog" max-width="570" height="500" persistent>
    <v-card height="500">
      <div class="image-bg">
        <v-img
          contain
          height="180"
          width="570"
          :src="pokemonData.sprites.other.dream_world.front_default"
        >
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-spacer></v-spacer>

            <v-btn color="white" icon @click="closeDialog">
              <v-icon>mdi-close-circle</v-icon>
            </v-btn>
          </v-app-bar>
        </v-img>
      </div>

      <v-card-text class="description">
        Name: <samp class="fw-normal">{{ pokemonData.name }}</samp>
        <v-divider class="my-1" />
        Weight: <samp class="fw-normal">{{ pokemonData.weight }}</samp>
        <v-divider class="my-1" />
        Height: <samp class="fw-normal">{{ pokemonData.height }}</samp>
        <v-divider class="my-1" />
        Types:
        <i
          v-for="(item, index) in pokemonData.types"
          :key="index"
          class="fw-normal"
        >
          <span v-if="index == pokemonData.types.length - 1"
            >{{ item.type.name }}.</span
          >
          <span v-if="index != pokemonData.types.length - 1"
            >{{ item.type.name }},
          </span>
        </i>
        <v-divider />
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col cols="2">
            <v-btn rounded color="primary" absolute left>
              Share to my friends
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              small
              absolute
              right
              plain
              fab
              depressed
              class="btn-bg"
              @click="setFavorite(pokemonData.name)"
            >
              <v-icon
                :id="pokemonData.favorite ? 'icon-active' : 'icon-not-active'"
                >mdi-star</v-icon
              ></v-btn
            >
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
   props: {
    dialog: {
      type: Boolean,
      default: null,
    },
    pokemonData: {
      type: Object,
      default: null,
    },
    setFavorite: {
      type: Function,
      default: null,
    },
    closeDialog: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      myDialog: null,
    }
  },
 
  created() {
    this.myDialog = this.dialog
  },
}
</script>

<style scoped>
.description {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  color: #5e5e5e;
  margin-top: 1rem;
  text-transform: capitalize;
}
.fw-normal {
  font-weight: normal;
}
.my-1 {
  margin-top: 0.6rem !important;
  margin-bottom: 0.6rem !important;
}
.image-bg {
  background-image: url('assets/image-bg.png') !important;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
