<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    <TitleSubject title="EMBEDDED AI" teacher="Philippe Leleux" color="secondary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        <br>
    </p>

    <!---->
    <h3>Realisation</h3>
    <p class="text-justify my-5">
        <br>
    </p>

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        <br>
    </p>

    <SkillMatrix :skillMatrix="skillMatrixEmbAI"/>
    



  En construction

<!---->
<ImageSubject imagePath="./images/pika.jpg" description="Figure 1 - Test" color="secondary" width_percent="50"/>


</template>

<script lang="ts">

    export default {
        data() {
            return {
                skillMatrixEmbAI: [ {skill: "Unknown", expected: 0, estimated: 0},
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