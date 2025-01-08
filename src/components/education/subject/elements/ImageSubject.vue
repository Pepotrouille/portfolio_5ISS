<template>
    <v-card :width="width_percent + '%'" :class="'my-5 bg-' + color">
        <v-img height="250" :src="imagePath" cover ></v-img>
        <v-card :class="'pa-2 text-h6 text-center bg-' + color" v-if="description">
            {{ description }}
        </v-card>
    </v-card>
</template>

<script lang="ts" setup>
    defineProps(["imagePath", "description", "color", "width_percent"])
</script>