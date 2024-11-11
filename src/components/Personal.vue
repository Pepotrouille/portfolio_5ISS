<template>
    <v-container>
        <v-row class="mb-4">
            <v-col>
                <v-sheet color="surface-darken-1" class="text-h1 font-weight-bold mb-4 text-primary text-center">About Me</v-sheet>
            </v-col>
        </v-row>
        <v-row :style='"margin-bottom: "+marge+"px;"'>
            <v-col  cols="8"  class="my-auto">
                <v-sheet color="surface-darken-1" class="text-h2 font-weight-bold mb-4 text-primary">Who Am I</v-sheet>
                <v-sheet color="surface-darken-1" class="text-justify">
                    My name is Marie. I am a student in the ingeneering university of the National Institute of Applied Science, a.k.a. INSA, from Toulouse, France.
                    I am currently in my fifth and last year of my cursus, with a specialisation in Computer and Network Engineering.
                    Through this portfolio, I will talk about my formation, my experiences as well as my interests and profesional projects.
                    <!--
                    Je m'appelle Marie, je suis une étudiante à l'école d'ingénieur Institut National des Sciences Appliquées, a.k.a INSA, de Toulouse, France. 
                    Je suis actuellement en 5ème et dernière année de mon diplôme d'ingénieur, avec une spécialité en Informatique et Réseaux.
                    À travers ce portfolio, je vous présenterai ma formation, mes expériences ainsi que mes intérêts et projets professionnels. 
                    -->
                    
                </v-sheet>
            </v-col>
            <v-col >
                <img src="..\assets\images\personnel\Me.png" width="100%">
            </v-col>
        </v-row>
        <v-row :style='"margin-bottom: "+marge+"px;"'>
            <v-col>
                <v-sheet  color="surface-darken-1" class="text-h2 font-weight-bold mb-4 text-primary">Formation</v-sheet>
                <TimelineFormation/>
            </v-col>
        </v-row>
        <v-row :style='"margin-bottom: "+marge+"px; margin-top: 80px;"'>
            <v-col  cols="8"  class="my-auto">
                <v-sheet color="surface-darken-1" class="text-h2 font-weight-bold mb-4 text-primary">Projets professionnels</v-sheet>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
            </v-col>
            <v-col >
                <img src="..\assets\images\personnel\Logo_Work.png" width="100%">
            </v-col>
        </v-row>
        <v-row :style='"margin-bottom: "+marge+"px;"'>
            <v-col >
                <img src="..\assets\images\personnel\Logo_Interest.png" width="100%">
            </v-col>
            <v-col  cols="8"  class="my-auto">
                <v-sheet color="surface-darken-1" class="text-h2 font-weight-bold mb-4 text-primary text-right">Centre d'intérêts</v-sheet>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
            </v-col>
        </v-row>
        <v-row :style='"margin-bottom: "+marge+"px;"'>
            <v-col >
                <v-sheet color="surface-darken-1" class="text-h2 font-weight-bold mb-4 text-primary text-center">Contact</v-sheet>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import TimelineFormation from './personnel/TimelineFormation.vue';
    
    export default {
        components: {
            TimelineFormation,
        },
        data() {
            return {
                marge: 8,
            };
        },
    };
</script>