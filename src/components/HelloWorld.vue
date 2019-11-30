<template>
  <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
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
                <v-toolbar-title>Registro</v-toolbar-title>
                <v-spacer />
              
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="Email"
                    type="text"
                  />

                  <v-text-field
                    id="Contraseña"
                    label="Contraseña"
                    name="Contraseña"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn id="boton" href="#/encuesta">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        
      </v-container>
    </v-content>
</template>

<script>
export default {
  name: 'HelloWorld',

};
</script>

<style scoped>
#boton{
  background-color: #2DC78C !important;
 color: white;
}
</style>
