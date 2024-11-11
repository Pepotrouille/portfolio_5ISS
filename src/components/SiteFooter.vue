<template>
    <v-footer height="100" color="surface-darken-1">
  
        <v-btn @click="ChangePage('Personal')" prepend-icon="mdi-arrow-left-thick" elevation="0" color="info" class="text-surface-darken-1">
          ABOUT ME
        </v-btn>
        <v-spacer/>
  
        <v-btn @click="ChangePage('Experience')" append-icon="mdi-arrow-right-thick" elevation="0" color="info" class="text-surface-darken-1">
          EXPERIENCE
        </v-btn>
        
    </v-footer>
  
    
    
  </template>

<script setup lang="ts">
    
</script>

<script lang="ts">
    export default {
        name: 'TemplateButtons',
        methods: {
            ChangePage(newPage:string) {
            this.$emit('change-page', newPage);
            },
            ChangeContent(newContent:string) {
            this.$emit('change-content', newContent);
            },
        },
    };
</script>