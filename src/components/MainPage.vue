<template>
    <SiteHeader @change-page="ChangePage"/>

  <Personal v-if="currentPage ==='Personal'" style="padding-left: 15%; padding-right: 15%;"/>
  <Education v-if="currentPage ==='Education'" style="padding-left: 15%; padding-right: 15%;"/>
  <Experience v-if="currentPage ==='Experience'" style="padding-left: 15%; padding-right: 15%;"/>
  <Conclusion v-if="currentPage ==='Conclusion'" style="padding-left: 15%; padding-right: 15%;"/>
  
  <SiteFooter @change-page="ChangePage"/>
</template>


<script lang="ts">
  import Personal from './Personal.vue';
  import Education from './Education.vue';
  import Experience from './Experience.vue';
  import Conclusion from './Conclusion.vue';
  //import SiteHeader from './SiteHeader.vue';

  export default {
    components: {
      Personal,
      Education,
      Experience,
      Conclusion,
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

