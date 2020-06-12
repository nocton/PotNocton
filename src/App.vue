<template>
  <v-app id="app" class="red">
    <Tela/>
  </v-app>
</template>

<script>
import Tela from './pages/Tela';
import {get_nocton_projects} from './services/api';

export default {
  name: 'App',

  components: {
    Tela,
  },

  mounted: async function () {
    const formated = await get_nocton_projects();

    console.log(formated);
  }
};
</script>

<style>
</style>