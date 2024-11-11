<template>

    
    <v-card width="50%" class="my-5">
        <v-img class="bg-grey-lighten-2" height="250" :src="imagePath" cover ></v-img>
        <v-card-title class="text-h6 text-info" v-if="description">
            {{ description }}
        </v-card-title>
    </v-card>
</template>

<script lang="ts" setup>
    defineProps(["imagePath", "description"])
</script>