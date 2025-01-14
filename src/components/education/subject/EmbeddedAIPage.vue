<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    <TitleSubject title="EMBEDDED AI" teacher="Philippe Leleux" color="secondary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        <br>
    </p>

    <!---->
    <h3>Realization</h3>
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
                skillMatrixEmbAI: [ {skill: "Understand the characteristics of supervised and unsupervised learning problems.", expected: 4, estimated: 0},
                                    {skill: "Understand the main basic methods and algorithms to deal with these problems.", expected: 4, estimated: 0},
                                    {skill: "Understand the specificities of AI at the edge.", expected: 4, estimated: 0},
                                    {skill: "Understand The main optimization methods enabling the embedding of AI algorithms.", expected: 4, estimated: 0},
                                    {skill: "Be able to use these methods through Python libraries to solve practical problems with IoT data.", expected: 4, estimated: 0},
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