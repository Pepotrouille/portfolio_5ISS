<template>
    <BackButton @change-content="ChangeContent" color="info" class="my-4"/>
    

    <v-row class="mb-4">
        <v-col>
            <v-sheet color="surface-darken-1" class="text-h3 font-weight-bold mb-4 text-info text-center">CLOUD COMPUTING</v-sheet>
        </v-col>
    </v-row>

    <v-card width="50%" class="my-5">
        <v-img class="bg-grey-lighten-2" height="250" src="https://picsum.photos/350/165?random" cover ></v-img>
        <v-card-title class="text-h6 text-info">
            Figure 1 - Bla
        </v-card-title>
    </v-card>

    <PDFReader  path="./documents/reports/Report-Cloud_Computing-BIENDOU-BRUNETTO-VASSEUR.pdf" 
                title="Report - Lab courses" 
                language="English" 
                madeBy="Marie BRUNETTO, Cyril VASSEUR, Brian BIENDOU"
                color="secondary"/>


</template>




<script lang="ts">

    export default {
        name: 'TemplateButtons',
            methods: {
                ChangeContent(contentTemplate: any) {
                this.$emit('change-content', contentTemplate);
                },
            },
        };
</script>