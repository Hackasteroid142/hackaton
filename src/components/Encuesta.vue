<template>
    <v-content>
      <v-container
        class="fill-height"
        fluid
        
      >
        <v-row
          align="center"
          justify="center"
          v-for="ask in preguntas"
        :key="ask.pregunta"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
          
            <v-card class="elevation-12">
              <v-toolbar
                color="#2DC78C"
                dark
                flat
              >
                <v-toolbar-title>{{ ask.pregunta }}</v-toolbar-title>
                <v-spacer />
              
              </v-toolbar>
              <v-card-text>
                <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="(respuesta,index) in ask.respuestas"
        :key="respuesta"
        :label="respuesta"
        :value="index"
      ></v-radio>
    </v-radio-group>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-btn id="boton" href="#/perfil">Enviar</v-btn>
      </v-container>
    </v-content>
</template>

<script>
export default {
    data(){
        return {
          preguntas: [
            {
              pregunta: "¿Hay algo que limite a tomar acciones sustentables",
              respuestas: ["Motivación", "Tiempo", "No sé qué y como hacerlo", "No lo quiero hacer"]
            },
            {
              pregunta: "¿Qué área eliges tú?",
              respuestas: ["Energía","Residuos","Agua"]
            }
          ]
        }
    },
}
</script>

<style scoped>
#boton{
  background-color: #2DC78C !important;
 color: white;
}
</style>
