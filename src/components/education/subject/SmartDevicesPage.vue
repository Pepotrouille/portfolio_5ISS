<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    
    <TitleSubject title="SMART DEVICES" teacher="Unknown" color="secondary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        The Smart Device courses regroups numerous subjects and lessons, in the aim of developing a sensor to be used as a connected object.
        Through this course, we were able to create a gas sensor to measure the quality of the air from the conception in the micro-electronics laboratory AIME to the datasheet, including the creation of the shield and the gathering of the data through wireless communication.
    </p>

    <!---->
    <h3>Realization</h3>
    <h4>Conception of the gas sensor</h4>
    <p class="text-justify my-5">
        During one entire week, we had the opportunity to participate to the conception of a gas sensor in the <i>Atelier Inter-universitaire de Micro-nano Electronique</i>, or AIME, laboratory at INSA Toulouse.
        The sensor we want to develop is a nano gas sensor to measure the quality of the air, mainly telling the abnormal presence of ammoniac or ethanol.
        To develop this sensor we used multiple process chemical and physical processes in white rooms:
    </p>
    <ul class="text-justify ml-10">
        <li>Synthesis of WO3 nanoparticles,</li>
        <li>Development of the microelectronic chip,</li>
        <li>Integration of the sensitive layer of nanoparticles on the chip,</li>
        <li>Electrical characterization of the sensor obtained in a controlled atmosphere.</li>
    </ul>
    <!--Conversion des mesures-->
    <h4>Characterization</h4>
    <p class="text-justify my-5">
        During the week at the lab, we were able to gather a lot of measurements.
        This characterization would allow us to see the behavior of our sensor.
        This would set the danger threshold for the danger and will be helpful to conceive the later datasheet.
    </p>

    <h4>Integration on a development board</h4>
    <p class="text-justify my-5">
        The gas sensor developed, we then needed to implement it in a system that could be integrated and interpreted by the user. 
        Using an Arduino development board, we were able to get the information from a commercial gas sensor similar to ours.
        We then needed to conceive a PCB using KiCad to adapt our own sensor onto the board.
        However, due to some delays in our project, we were not able to produce the PCB to support our sensor.
    </p>

    <h4>Wireless communication of the measured data</h4>
    <p class="text-justify my-5">
        Once aspect of the system we want to develop is the ability to communicate the data.
        To proceed, we used an MQTT based communication. This means that the sensor will publish the data to a given broker, and subscriber will be able to get the data.
        To publish the data, we equipped our development board with a LoRa antenna. 
        LoRa is a communication technology well fitted for IoT technologies. As the INSA campus is equipped with a LoRa antenna, it would be properly working for our testing.
        For the broker, meaning the server on which the data will be transferred from publisher to subscriber, it is a Chirpstack server provided by the the DGEI of the INSA.
        Finally, for the subscription, we had to develop an application to get and read the data.
    </p>

    <h4>Development of the application</h4>
    <p class="text-justify my-5">
        For the development of the application to get the MQTT data, two solutions were introduced: MIT App Inventor and NodeRed.
        <br><br>
        <b>MIT App Inventor</b> is a free online tool offering a user friendly interface for android application development.
        We first had a small introduction by having a led turning on and off using LoRa.
        We then tried to create an interface to display the evolution of the resistance, meaning of the state of the air, through a live graph.
        <br><br>
        <b>NodeRed</b> is a programming tool. 
        Through it's ui add-on, it is possible to make simple interfaces.
        We were able to create a web interface subscribed to the MQTT broker, displaying the sensor's data.
        <br><br>
        Both these tools allowed us to test our system and to characterize more easily our sensor.
    </p>

    <ImageSubject   imagePath="./images/smart_device_nodered_interface.JPG" 
                    description="Final interface using NodeRed." 
                    color="secondary"
                    width_percent="50"/>
    

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        This course might be the one in which I had the most difficulties.
        Most of the subjects of this course were related to physics or electronics, two field with which I am not familiar with.
        Though, it was interesting to work as a group as it allowed us to each one develop the sections in which we were the most comfortable with.
        It was also a good opportunity to be introduced to micro electronics. 
        However, I felt like it was not an introduction but quite advanced.
    </p>

    <SkillMatrix :skillMatrix="skillMatrixIntroSensor" title="Introduction to Sensors"/>

    <SkillMatrix :skillMatrix="skillMatrixMicroContro" title="Micro Controllers"/>
</template>

<script lang="ts">

    export default {
        data() {
            return {
                skillMatrixIntroSensor: [ {skill: "Understand basic notions of sensors, data acquisition: physics, electronics and metrology point of view", expected: 4, estimated: 3},
                                          {skill: "Be able to manufacture a nano-particles sensor using micro-electronics tools: chemical synthesis, assembly, testing", expected: 4, estimated: 2},
                                          {skill: "Be able to design the datasheet of the sensor manufactured", expected: 3, estimated: 3},
                                ],
                skillMatrixMicroContro: [ {skill: "Understand microcontroller architecture and how to use them", expected: 3, estimated: 2},
                                          {skill: "Be able to design data acquisition system (sensor, conditioner, microcontroller) with respect to the application", expected: 3, estimated: 2},
                                          {skill: "Be able to design the electronic circuit of a sensor's signal conditioner (design + simulation)", expected: 3, estimated: 2},
                                          {skill: "Be able to design a shield to accommodate the gas sensor", expected: 3, estimated: 2},
                                          {skill: "Be abe to design the sofware to use the gas sensor and its HMI", expected: 4, estimated: 4},
                                          {skill: "Be able to combine all of the above mentioned components into a smart device", expected: 3, estimated: 3},
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