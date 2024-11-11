<template>
    <v-tooltip :text="hoverText" location="top">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="rounded-pill" :color="color" size="90px" :href="href">
                <v-icon size="60px">{{ icon }}</v-icon>
            </v-btn>
        </template>
    </v-tooltip>
</template>

<script lang="ts" setup>

    defineProps(['color', 'hoverText', 'icon', 'href']);

</script>
