<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    

    <v-row class="mb-4">
        <v-col>
            <v-sheet color="surface-darken-1" class="text-h3 font-weight-bold mb-4 text-secondary text-center">WIRELESS SENSOR NETWORK</v-sheet>
        </v-col>
    </v-row>

    <PDFReader path="./documents/reports/Rapport_WSN-Biendou-Bigot-Brunetto-Marcé.pdf"
            title="Report - Sigfox technology" 
            language="French" 
            madeBy="Marie BRUNETTO, Timothé Bigot, Brian BIENDOU, Clément Marcé"
            color="secondary"/>
            

    <PDFReader path="./documents/reports/Presentation_WSN-Biendou-Bigot-Brunetto-Marcé.pdf"
                title="Presentation's Slides - Sigfox technology" 
                language="French" 
                madeBy="Marie BRUNETTO, Timothé Bigot, Brian BIENDOU, Clément Marcé"
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