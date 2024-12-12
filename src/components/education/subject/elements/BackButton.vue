<template>

    <v-row class="text-justify">
        <v-btn @click="ChangeContent(null)" prepend-icon="mdi-arrow-left-thick" :color="color" variant="outlined" >Back to Education</v-btn>
    </v-row>
    

</template>

<script lang="ts" setup>
    defineProps(['color'])
</script>

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