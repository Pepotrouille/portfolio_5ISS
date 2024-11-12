<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    
    <TitleSubject title="SMART DEVICES" teacher="Unknown" color="secondary"/>

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

    <SkillMatrix :skillMatrix="skillMatrixIntroSensor" title="Introduction to Sensors"/>

    <SkillMatrix :skillMatrix="skillMatrixMicroContro" title="Micro Controlleurs"/>


        En construction


</template>

<script lang="ts">

    export default {
        data() {
            return {
                skillMatrixIntroSensor: [ {skill: "Understand basic notions of sensors, data acquisition: physics, electronics and metrology point of view", expected: 4, estimated: 0},
                                          {skill: "Be able to manufacture a nano-particles sensor using micro-electronics tools: chemical synthesis, assembly, testing", expected: 4, estimated: 0},
                                          {skill: "Be able to design the datasheet of the sensor manufactured", expected: 3, estimated: 0},
                                ],
                skillMatrixMicroContro: [ {skill: "Understand microcontroller archictecture and how to use them", expected: 3, estimated: 0},
                                          {skill: "Be able to design data acquisition system (sensor, conditioner, microcontroller) with respect to the application", expected: 3, estimated: 0},
                                          {skill: "Be able to design the electronic circuit of a sensor's signal conditioner (design + simulation)", expected: 3, estimated: 0},
                                          {skill: "Be able to design a shield to accommodate the gas sensor", expected: 3, estimated: 0},
                                          {skill: "Be abe to design the sofware to use the gas sensor and its HMI", expected: 4, estimated: 0},
                                          {skill: "Be able to combine all of the above mentioned components into a smart device", expected: 3, estimated: 0},
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