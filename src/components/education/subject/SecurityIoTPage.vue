<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    

    
    <TitleSubject title="SECURITY FOR IoT NETWORKS" teacher="Eric Alata" color="secondary"/>

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

    <SkillMatrix :skillMatrix="skillMatrixSec" title="Security for IoT"/>
    <SkillMatrix :skillMatrix="skillMatrixSecNetworks" title="Security for IoT Networks"/>



En construction

</template>

<script lang="ts">


    export default {
        data() {
            return {
                skillMatrixSecNetworks: [ {skill: "Understand the fundamentals of security", expected: 4, estimated: 0},
                                          {skill: "Be able to identify security weaknesses in an IoT architecture", expected: 3, estimated: 0},
                                          {skill: "Be able to assess the impact of exploiting a security vulnerability in an IoT architecture", expected: 4, estimated: 0},
                                          {skill: "Be able to propose adequate security counter-measures", expected: 3, estimated: 0},
                                        ],
                skillMatrixSec: [ {skill: "Knowing the main issues in security for IoT", expected: 3, estimated: 0},
                                  {skill: "Understand the terminology of security", expected: 3, estimated: 0},
                                  {skill: "Being able to have a critical look at the design of a system from a security point of view", expected: 3, estimated: 0},
                                  {skill: "Being able to understand a scientific article that explains a weakness or a security solution and to explain it", expected: 3, estimated: 0},
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