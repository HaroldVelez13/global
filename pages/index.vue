<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="py-4 d-flex justify-center">
        <PikachuLogo />
      </div>
      <div class="py-4 d-flex justify-center">
        <h1 id="title">Welcome to Pokédex</h1>
      </div>
      <div class="py-3 d-flex justify-center">
        <p id="subtitle">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>
      </div>
      <div class="text-center">
        <v-btn rounded color="primary"  to="/loading" nuxt> Get started </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<style>
#subtitle {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  text-align: center;

  color: #5e5e5e;
}
#title {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #353535;
}
</style>
