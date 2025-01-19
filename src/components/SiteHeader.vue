<template>
    <v-app-bar scroll-behavior="hide" elevation="0" color="primary" height="100">
  
      <v-app-bar-title>MARIE BRUNETTO</v-app-bar-title>
        <v-btn @click="ChangePage('Personal')">
          INTRODUCTION
        </v-btn>
  
        <v-btn @click="ChangePage('Education')">
          EDUCATION
        </v-btn>
  
        <v-btn @click="ChangePage('Experience')">
          EXPERIENCE
        </v-btn>
  
        <v-btn @click="ChangePage('Conclusion')">
          CONCLUSION
        </v-btn>
        
    </v-app-bar>
  
    
    
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
        },
    };
</script>