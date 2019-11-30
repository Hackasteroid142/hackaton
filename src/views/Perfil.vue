<template>
    <div>
         <v-toolbar id="toolbar">
      <v-toolbar-title>ImperfAction</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text id="toolbar">Desafios</v-btn>
        <v-btn text id="toolbar">Tips</v-btn>
        <v-btn text id="toolbar">Foro</v-btn>
      </v-toolbar-items>
    </v-toolbar>
        <Principal/>
    </div>
</template>

<script>
import Principal from '@/components/Principal.vue'
export default {
    data(){
        return {
            links: [
                "hola","hola"
            ]
        }
    },
    components:{
        Principal
    }
}
</script>

<style scoped>
#toolbar{
    color:white;
    background-color: #2DC78C;
}
</style>