<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    <TitleSubject title="ENERGY FOR CONNECTED OBJECTS" teacher="Gaël Loubet" color="secondary"/>

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

    En construction

    <SkillMatrix :skillMatrix="skillMatrixEnergy"/>

    <!---->
    <PDFReader  path="./documents/reports/Report_Energy-Brunetto-Biendou.pdf" 
                title="Report - Lab courses" 
                language="English" 
                madeBy="Marie Brunetto, Brian Biendou"
                color="secondary"/>

                

</template>

<script lang="ts">

    export default {
        data() {
            return {
              skillMatrixEnergy: [ {skill: "Unknown", expected: 0, estimated: 0},
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