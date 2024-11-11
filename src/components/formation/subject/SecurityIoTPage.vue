<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    

    <v-row class="mb-4">
            <v-col>
                <v-sheet color="surface-darken-1" class="text-h3 font-weight-bold mb-4 text-secondary text-center">SECURITY IoT</v-sheet>
            </v-col>
        </v-row>


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