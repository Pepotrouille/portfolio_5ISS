<template>
    <BackButton @change-content="ChangeContent" color="primary" class="mb-4"/>
    
    <TitleSubject title="WIRELESS COMMUNICATION" teacher="Slim Abdellatif" color="primary"/>

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

    <SkillMatrix :skillMatrix="skillMatrixLPWAN"/>


</template>

<script lang="ts">


    export default {
        data() {
            return {
                skillMatrixLPWAN: [ {skill: "Unknown", expected: 0, estimated: 0},
                                  ],
                skillMatrixEmerging: [  {skill: "Unknown", expected: 0, estimated: 0},
                                  ],
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