<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    <TitleSubject title="ENERGY FOR CONNECTED OBJECTS" teacher="Gaël Loubet" color="secondary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; Energy for connected object is a course discussing the different means of powering connected objects and embedded system.
        This course is divided into  four lessons and two lab classes.
        The lessons discuss:
        <br>
    </p>
    <ul class="text-justify ml-10">
        <li><b>The sources of the energy</b> were first mentionned. 
            Multiple points were addressed: the nature of the production of French electricity, the necessity or not or wires to power a system, and if not, the use of battery or different ways of harvesting power from the environment. </li>
        <li><b>The ways of storing energy</b>, whether it is harvested or not, mainly through the usage of capacitors.</li>
    </ul>

    <!---->
    <h3>Realisation</h3>
    <p class="text-justify my-5">
        The lab session was divided in three main parts:
    </p>
    <ul class="text-justify ml-10">
        <li><b>Introduction to supercapacitors</b>. 
            The aim of this introduction is to be able to know how a supercapacitor works, and how to calulate the minimal input for the system to be working to choose and match the best capacity.
            We discussed as well the difference of capacities and losses between the capacitors depending on the nature and brand/price.
            This theoretical part was ideal to introduce the concepts for the second part</li>
        <li><b>Characterization of an unknown capacitor</b>.
            A capacitor, embedded in a system, was given to each group.
            The goal was to characterized the capacitor by measuring the voltage in the system when power is wirelessly given.
            For our experimentation, we did use a wire, but characterized depending on the given frequency.
            The wire allowed us to overlook intereferences that could confuse the measurements.
            This frequency was defined using <i>GNU Radio Companion</i>, a software designed for telecommunication, along with an USRP to generate the signal. 
            By measuring the received voltage using the software <i>Waveforms</i>, we were able to see the characterization of the given capacitor.</li>
    </ul>

    <ImageSubject   imagePath="./images/energy_measurements.JPG" 
                description="Voltage received in the system depending on the input frequency" 
                color="secondary"
                width_percent="60"/>

    <ul class="text-justify ml-10">
        <li><b>Application with wireless energy transmission</b>. 
            This last section was set to introduce us the difference between multiple antennas: Dipole, Yagis and Patch.
            We were able to see the modest amont of energy given by the wireless transmission, especially when the distance increased.
            It lead us to have a conversation about how relevant this ways of powering a system is.
            </li>
    </ul>

    <p class="text-justify my-5">
        A more advanced description of the lab session can be found in the report, at the bottom of this page.
    </p>

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        This course taught us, when conceiving a connected object, to go through the process of deliberate on the best way of powering a system.
        <br>

        The first thought is to consider whether it is necessary or not to power using a wire, as it is more efficient, extensive but with spacial limitations.
        Harvesting energy from the environment can be very powerful for systems using a limited amount of power and long life span.
        However, harvesting requires specific environment depending on the way (thermal needs important difference of temperature, pizoelectric uses large vibration...)
        But if these specific needs are met, considering energy harvesting for a system could make the difference of an IoT system.
        Finally, the possibility of wireless powering through antenna can be used. 
        Even though it seems quite inefficient in term of amount, once combined with capacitors or used for specific emergency cased, this mean of powering can be interesting as well.
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