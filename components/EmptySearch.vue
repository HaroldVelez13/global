<template>
  <v-col cols="12" sm="8" md="6">
    <div class="py-4 d-flex justify-center">
      <h2 id="title">Uh-oh!</h2>
    </div>
    <div class="py-3 d-flex justify-center">
      <p id="subtitle">You look lost on your journey!</p>
    </div>
    <div class="text-center">
      <v-btn rounded color="primary" @click="goHome"> Go back home </v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    goHome: {
      type: Function,
      default: null,
    },
  },
}
</script>
