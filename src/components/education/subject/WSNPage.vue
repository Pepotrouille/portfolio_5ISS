<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    <!--TITLE-->
    <TitleSubject title="WIRELESS SENSOR NETWORK" teacher="Daniela Dragomirescu" color="secondary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        The Wireless Sensor Networks (WSN) was divided into two main parts:
    </p>
        <ul class="text-justify ml-10">
            <li><b>A theoretical part</b>, in which we had the opportunity to learn more about protocols and technologies used for IoT and WSN.
                This part was a reminder of some previous years lessons about modulation and communication.
                Through student-made presentations, we could learn about protocols such as LoRA, Sigfox, BLE, ZigBee, NB-IoT and M2M, but also about protocols specific to the MAC layer.
            </li>
            <li><b>A practical part</b>, where we need to imagine a situation of a network of wireless sensors.
                By group of 5, we needed to explain what better choice would be for the physical and MAC layers, with a light implementation.
            </li>
        </ul>

    
    <!---->
    <h3>Realization</h3>
    <p class="text-justify my-5">
    In addition to the lessons we were given two tasks:
    </p>

        <ul class="text-justify ml-10">
            <li>We first informed ourselves on a chosen protocol used for wireless sensor networks, such as LoRA, Sigfox, BLE, ZigBee, NB-IoT and M2M. It is a group study, resulting in a report and presentation</li>
            <li>Then, we had the opportunity to deepen our knowledge concerning MAC protocols used for the same context.</li>
        </ul>

    <p class="text-justify my-5">
        You can find reports and presentation for both at the end of this page.
        <br>
    </p>

    <!---->
    <h3>Analysis</h3>
        &nbsp;&nbsp;&nbsp;&nbsp; This lesson was an interesting opportunity to learn more about numerous protocols.
        Through the practical part, it was also a really good opportunity to deliberate about the choice that we need to make when conceiving an network of sensors.
        The reflection relying on our understanding and knowledge, I think it is an interesting course to be introduced to the kind of reflection we might have in a work environment.
        However, the practical part did not offer enough time to have a proper implementation and test the viability of our choices of implementations.

    <SkillMatrix :skillMatrix="skillMatrixWSN"/>


    <PDFReader path="./documents/reports/Rapport_WSN-Biendou-Bigot-Brunetto-Marcé.pdf"
            title="Report - Sigfox technology" 
            language="French" 
            madeBy="Marie Brunetto, Timothé Bigot, Brian Biendou, Clément Marcé"
            color="secondary"/>
            

    <PDFReader path="./documents/reports/Presentation_WSN-Biendou-Bigot-Brunetto-Marcé.pdf"
                title="Presentation's Slides - Sigfox technology" 
                language="French" 
                madeBy="Marie Brunetto, Timothé Bigot, Brian Biendou, Clément Marcé"
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