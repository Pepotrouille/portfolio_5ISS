<template>
    <v-expansion-panels class="my-5">
        <v-expansion-panel :color="color">
            <v-expansion-panel-title>
                <b class="text-h5">{{ title?.toUpperCase() }}</b>
            </v-expansion-panel-title>
            <v-expansion-panel-text >
                <v-sheet color="surface-darken-1" class="pt-10 px-5">
                    <v-row v-if="language != null" :class="'text-justify text-' + color ">
                        <p><b>Language:</b> {{language}}</p>
                    </v-row>

                    <v-row v-if="madeBy != null" :class="'text-justify text-' + color ">
                        <p><b>Made by:</b> {{madeBy}}</p>
                    </v-row>

                    <iframe :src="path" width="100%" height="1080" class="my-16"></iframe>
                    </v-sheet>
                
            </v-expansion-panel-text>
            
            
        </v-expansion-panel>
    </v-expansion-panels>

</template>

<style>

  .v-expansion-panel-text__wrapper  {
    padding: 0 !important;
  }
</style>

<script lang="ts" setup>
    defineProps({
        path: String,
        title: String,
        language: String,
        madeBy: String,
        color: String
        })
</script>