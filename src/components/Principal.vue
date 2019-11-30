<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col>
                     <v-img
                    :src="require('../assets/perfil.png')"
                    aspect-ratio="1"
                    id="imagen"
                    ></v-img>
                </v-col>
                <v-col>
                    <p id="titulo">Tu nivel actual es:</p>
                    <p>Capitán Planeta</p>
                </v-col>
            </v-row>
            <v-row>
                <v-icon v-for="number in water" :key="number" color="#F5BD13">mdi-water</v-icon>
            </v-row>
            <v-row>
                <v-icon v-for="number in energy" :key="number" color="#F5BD13">mdi-battery-charging-100</v-icon>
            </v-row>
            <v-row>
                <v-icon v-for="number in residuos" :key="number" color="#F5BD13">mdi-recycle</v-icon>
            </v-row>



            <v-spacer></v-spacer> 

            <v-spacer></v-spacer> 

            <h2 id="desafio">Desafíos Completados</h2>

            <v-row v-for="desafio in desafios" :key="desafio.titulo">
                <v-card
                class="mx-auto"
                max-width="400"
                >
                <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                <v-card-title>{{ desafio.titulo }}</v-card-title>
                </v-img>

                

                <v-card-text class="text--primary">
                <div>{{ desafio.subtitulo }}</div>

                
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="orange"
                    text
                >
                    Compartir
                </v-btn>

                <v-btn
                    color="orange"
                    text
                >
                    Ver
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
export default {
    data() {
        return {
            desafios: [
                {
                    titulo: "Reciclar 5 bolsas de plastico",
                    subtitulo: "Recicla, durante la semana, 5 bolsas de plastico",
                    imagen: "https://www.ecoticias.com/userfiles/reciclado-plasticos.jpg"
                },
                {
                    titulo: "Caminar o andar en bicicleta",
                    subtitulo: "Durante un día solo viaja a pie o en bicicleta",
                    imagen: "https://www.ecoticias.com/userfiles/reciclado-plasticos.jpg"
                },
                {
                    titulo: "Plantar un árbol",
                    subtitulo: "Planta un árbol en el jardín de tu casa",
                    imagen: "https://www.ecoticias.com/userfiles/reciclado-plasticos.jpg"
                }
            ],
            water: 3,
            energy: 2,
            residuos: 1
            
        }
    }
}
</script>

<style scoped>
#imagen{
    width: 93%;
}
#titulo{
    margin-top: 52px;
}
#desafio{
    color:#2DC78C !important;
}
</style>