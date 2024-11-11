<template>

    <v-row class="justify-center">
        <v-btn @click="ChangeContent(null)" prepend-icon="mdi-arrow-left-thick" :color="color" variant="outlined" >Back to Formation</v-btn>
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