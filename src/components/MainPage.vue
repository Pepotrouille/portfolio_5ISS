<template>
    <SiteHeader @change-page="ChangePage"/>

  <Personal v-if="currentPage ==='Personal'" style="padding-left: 15%; padding-right: 15%;"/>
  <Formation v-if="currentPage ==='Formation'" style="padding-left: 15%; padding-right: 15%;"/>
  <Experience v-if="currentPage ==='Experience'" style="padding-left: 15%; padding-right: 15%;"/>
  
  <SiteFooter @change-page="ChangePage"/>
</template>


<script lang="ts">
  import Personal from './Personal.vue';
  import Formation from './Formation.vue';
  import Experience from './Experience.vue';
  //import SiteHeader from './SiteHeader.vue';

  export default {
    components: {
      Personal,
      Formation,
      Experience,
    },
    data() {
      return {
        currentPage: 'Personal', // Default template
      };
    },
    methods: {
      ChangePage(newPage: string) {
        this.currentPage = newPage;
      },
    },
  };
</script>

