<template>
    <v-row>
        <v-col class="pb-0">
            <v-sheet color="surface-darken-1" :class="'text-h3 font-weight-bold mb-4 text-' + color + ' text-center'">{{ title }}</v-sheet>
        </v-col>
    </v-row>
    <v-row class="mb-4">
        <v-col class="pt-0" v-if="teacher">
            <v-sheet color="surface-darken-1" :class="'text-h5 text-' + color + ' text-center'">Teacher: {{ teacher }}</v-sheet>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
    defineProps(["title", "teacher", "color"])
</script>