<template>
    <v-container class="mb-16" v-if="currentContent == null">
        <v-row class="mb-4">
            <v-col>
                <v-sheet color="surface-darken-1" class="text-h1 font-weight-bold mb-4 text-primary text-center">Experience</v-sheet>
            </v-col>
        </v-row>
        <v-row class="mb-4">
            <v-col>
                <v-sheet color="surface-darken-1" class="text-center">
                    In this page, you will find a summary of my work experience I had the opportunity to take part in during my studies at INSA Toulouse.
                    These experience vary between Internship, Apprenticeship and Freelance work experience.
                    In these section, I will describe the work that I had to perform, how my courses gave me tools and knowledge to complete my tasks and what are the skills that emrges from those experiences.
                </v-sheet>
            </v-col>
        </v-row>
        <v-row class="mb-4">
            <v-col>
                <v-sheet color="primary" class="text-h3 font-weight-bold text-center pa-5">
                    Freelance
                </v-sheet>
            </v-col>
        </v-row>
        <v-row class="mx-8 d-flex justify-center">
            <v-btn v-for="item in freelanceItems" :key="item.id" class="ma-2 pa-2 bg-primary" width="70%" @click="ChangeContent(item.path)">{{item.name}}</v-btn>
        </v-row>
        <v-row class="mb-4">
            <v-col>
                <v-sheet color="secondary" class="text-h3 font-weight-bold text-center pa-5">
                    Internship
                </v-sheet>
            </v-col>
        </v-row>
        <v-row class="mx-8 d-flex justify-center">
            <v-btn v-for="item in internshipItems" :key="item.id" class="ma-2 pa-2 bg-secondary" width="70%" @click="ChangeContent(item.path)">{{item.name}}</v-btn>
        </v-row>
        <v-row class="mb-4">
            <v-col>
                <v-sheet color="info" class="text-h3 font-weight-bold text-center pa-5">
                    Apprenticeship
                </v-sheet>
            </v-col>
        </v-row>
        <v-row class="mx-8 d-flex justify-center">
            <v-btn v-for="item in apprenticeshipItems" :key="item.id" class="ma-2 pa-2 bg-info" width="70%" @click="ChangeContent(item.path)">{{item.name}}</v-btn>
        </v-row>
    </v-container>
    <v-container v-else>
        <component :is="currentContent" @change-content="ChangeContent"/>
    </v-container>
</template>

<script lang="ts">
    import Internship2023 from './experience/Internship2023.vue';
    import Internship2024 from './experience/Internship2024.vue';
    import Freelance from './experience/Freelance.vue';
    import Apprenticeship from './experience/Apprenticeship.vue';

    //Changer en classes pour avoir couleur, titres et listes
    export default {
        data() {
            return {
                currentContent: null,
                currentPage: 'Main', // Default template
                internshipItems: [
                    { id: 1, name: "Thales Alenia Space - Turin, Italy", path: Internship2023 },
                    { id: 2, name: "AVL - Regensburg, Germany", path: Internship2024 },
                ],
                apprenticeshipItems: [
                    { id: 3, name: "Thales Alenia Space - Toulouse, France", path: Apprenticeship },
                ],
                freelanceItems: [
                    { id: 4, name: "Pixel Art", path: Freelance },
                ],
            };
        },
        computed: {
            combinedData() {
            return {
                internshipItems: this.internshipItems,
                apprenticeshipItems: this.apprenticeshipItems,
                freelanceItems: this.freelanceItems
                };
            },
        },
        methods: {
        ChangeContent(contentTemplate: any) {
                this.currentContent = contentTemplate;
                console.log(this.currentContent)
            },
        },

    };
    
</script>