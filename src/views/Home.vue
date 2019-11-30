<template>
  <div>
        <v-app-bar
      app
      color="#2DC78C"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/remolinosinfondo.png')"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>

     
    </v-app-bar>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
