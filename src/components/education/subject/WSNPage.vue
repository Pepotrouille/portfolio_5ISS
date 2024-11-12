<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    <!--TITLE-->
    <TitleSubject title="WIRELESS SENSOR NETWORK" teacher="Daniela Dragomirescu" color="secondary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="justify-center my-5">
        In this subject, we explore the concept of Wireless Sensor Networks through it specificities. 
        The objective of this course is to have the knowledge to choose the proper technology depending of the needs of the networks.
        <br>
        
    </p>
    
    <!---->
    <h3>Realisation</h3>
    <p class="justify-center my-5">
    In addition to the lessons we were given two tasks:
    </p>

        <ul class="justify-center ml-10">
            <li>We first informed ourselves on a choosen protocol used for wireless sensor networks, such as LoRA, Sigfox, BLE, ZigBee, NB-IoT and M2M. It is a group study, resulting in a report and presentation</li>
            <li>Then, we had the oportunity to deepen our knowledge concerning MAC protocols used for the same context.</li>
        </ul>

    <p class="justify-center my-5">
        You can find reports and presentation for both at the end of this page.
        <br>
    </p>

    <!---->
    <h3>Analysis</h3>

    <SkillMatrix :skillMatrix="skillMatrixWSN"/>


    <PDFReader path="./documents/reports/Rapport_WSN-Biendou-Bigot-Brunetto-Marcé.pdf"
            title="Report - Sigfox technology" 
            language="French" 
            madeBy="Marie BRUNETTO, Timothé Bigot, Brian BIENDOU, Clément Marcé"
            color="secondary"/>
            

    <PDFReader path="./documents/reports/Presentation_WSN-Biendou-Bigot-Brunetto-Marcé.pdf"
                title="Presentation's Slides - Sigfox technology" 
                language="French" 
                madeBy="Marie BRUNETTO, Timothé Bigot, Brian BIENDOU, Clément Marcé"
                color="secondary"/>


</template>


<script lang="ts">


    export default {
        data() {
            return {
                skillMatrixWSN: [ {skill: "Unknown", expected: 0, estimated: 0},
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