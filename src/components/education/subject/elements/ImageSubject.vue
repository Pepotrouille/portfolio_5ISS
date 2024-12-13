<template>

    
    <v-card :width="width_percent + '%'" :class="'my-5 bg-' + color">
        <v-img height="250" :src="imagePath" cover ></v-img>
        <v-card-title class="text-h6" v-if="description">
            {{ description }}
        </v-card-title>
    </v-card>
</template>

<script lang="ts" setup>
    defineProps(["imagePath", "description", "color", "width_percent"])
</script>