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
    <Encuesta/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Encuesta from '@/components/Encuesta.vue'

export default {
  name: 'encuesta',
  components: {
    Encuesta
  }
}
</script>