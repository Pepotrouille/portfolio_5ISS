<template>
    <BackButton @change-content="ChangeContent" color="info" class="mb-4"/>
    
    <TitleSubject title="PORTFOLIO" teacher="Gaël Loubet" color="info"/>

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

    En construction

    <SkillMatrix :skillMatrix="skillMatrixPortfolio"/>


</template>

<script lang="ts">

    export default {
        data() {
            return {
                skillMatrixPortfolio: [ {skill: "Reflect upon my training process and methods", expected: 4, estimated: 0},
                                        {skill: "Be able to put forward my training experiences, whether they be explicit or implicit", expected: 4, estimated: 0},
                                        {skill: "Be self-sufficient and responsible towards my education", expected: 4, estimated: 0},
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