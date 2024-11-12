<template>
    <h3 v-if="title" class="text-center text-surface-darken-5">Skill Matrix: {{ title }}</h3>
    <h3 v-else class="text-center text-surface-darken-5">Skill Matrix</h3>
    <v-table class="bg-surface-darken-3 mb-5">
    <thead>
      <tr>
        <th class="text-left">Skill</th>
        <th class="text-left">Expected</th>
        <th class="text-left">Estimated</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in props.skillMatrix"
        :key="item.skill"
      >
        <td>{{ item.skill }}</td>
        <td>{{ item.expected }}</td>
        <td>{{ item.estimated }}</td>
      </tr>
    </tbody>
  </v-table>

</template>


<script lang="ts" setup>
    const props = defineProps(['skillMatrix', 'title'])
    console.log(props.skillMatrix)
</script>