<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    <TitleSubject title="EMBEDDED AI" teacher="Unknown" color="primary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="justify-center my-5">
        <br>
    </p>

    <!---->
    <h3>Realisation</h3>
    <p class="justify-center my-5">
        <br>
    </p>

    <!---->
    <h3>Analysis</h3>
    <p class="justify-center my-5">
        <br>
    </p>

    <v-table class="bg-surface-darken-3">
    <thead>
      <tr>
        <th class="text-left">Skill</th>
        <th class="text-left">Expected</th>
        <th class="text-left">Estimated</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in skill_matrix"
        :key="item.skill"
      >
        <td>{{ item.skill }}</td>
        <td>{{ item.expected }}</td>
        <td>{{ item.estimated }}</td>
      </tr>
    </tbody>
  </v-table>



  En construction

<!---->
<ImageSubject imagePath="./images/pika.jpg" description="Figure 1 - Test"/>


</template>

<script lang="ts">

    export default {
        data() {
            return {
                skill_matrix: [ {skill: "Unknown", expected: 0, estimated: 0},
                                ]
            }
        },
        name: 'TemplateButtons',
            methods: {
                ChangeContent(contentTemplate: any) {
                this.$emit('change-content', contentTemplate);
                },
            },
    };
</script>