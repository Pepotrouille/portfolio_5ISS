<template>
    <BackButton @change-content="ChangeContent" color="primary" class="mb-4"/>
    
    <TitleSubject title="5G TECHNOLOGIES" teacher="Etienne Sicard" color="primary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; The 5G technologies class focus not only on 5G standards and applications, but also all technologies related, such as other GSM generation and the development of various standards of teleocmmunication. 
        Globally, the lesson divided in two parts.
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp; <b>The first part is a global overview</b> of the history of GSM standard from its first uses in phone telecommunication to the projects and prospects of 6G.
        During these two hours, Mr Sicard talked about various concept and applications that would be useful for our choice of topic for the presentation to be done.
        It also gave us a better overview of how far GSM technologies are currently applied, and what are the existing implementation and planned evolution.
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp; <b>The second part of the of this class is a series of 15 minutes long presentations</b> made by the students by pair. 
        This presentation is an opportunity to learn about subjects picked out of a long list of potential topics.
        Among them, students of our class decided to introduce ourselves to some topics, that could be divided in groups:
    </p>
    <ul class="text-justify ml-10">
        <li><b>Technical aspects</b>, mainly about 5G and 6G technologies, such as modulation, but also how it is developed by companies.
        Other technologies relying on GSM, such as LTE-M or V2X (Vehicle to Everything), have also been presented by other students.</li>
        <li><b>Application</b> of these technologies in topics such as autonomous trains or constellations (Starlink, Kuiper)</li>
        <li><b>Risks and perception</b>,  and all question that can be raised by these technologies in constant evolution. 
        In this category, we can cite environmental impact, mobile addictions and dread that can be felt by a part of the population.</li>
    </ul>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; With my pair, we decided to treat the topic of autonomous trains. We presented first the meaning of autonomy in trains but also in transportation in general.
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp; Then we talked about the choice of autonomy, which are the advantages and limitations, mainly around the cost and laws that affects the implementation of autonomy.
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp; The following part approached the different technologies used for autonomy. We explained here the concept of Grades of Automation to define the autonomy of a system in public transporation. 
        After that, we explained the implementation for subway system of fixed block and moving block. These relies on the ability of a vehicule to be autonomous by itself or among the system (Mainly if the sensors are embedded or not)
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp; Finally, we enumerated a few projects that are deployed in France and Europe, along with how recent and autonomous the project is. 
        Our examples here were the subway system around French cities, and a German project of autonomous train for human transportation, in contrast with the "Train Drone", a prior project of merchandise-oriented train.
    </p>

    <!---->
    <h3>Realization</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; As said previously, our main objectives was to make a presentation on a given topic.
        I decided to choose "Train Drone", as it seemed to be an interesting subject I did not know much about, and wanted to learn more.
        three main points could be explored: team work, research of the subject and presentation.
        <br> <br>
        &nbsp;&nbsp;&nbsp;&nbsp; The first point, <b>teamwork,</b> consisted mainly in the division of the tasks between my duo Brian and I. 
        This mainly consisted in dividing the field of research of each other: I would be searching about the definition and technologies composing the autonomous trains, while Brian would search the advantages and limitations.
        This is also the way we decided do divide the parole during the presentation, as we would be more comfortable talking about our findings.
        <br> <br>
        &nbsp;&nbsp;&nbsp;&nbsp; The second point consisted in <b>the research</b> itself. 
        I was rapidly confronted to the first issue: the term "Train Drone", that was our given subject, was only mentioned to describe an autonomous train tested by the SNCF in 2019.
        No advanced specification or information regarding this project could be found online about this project specifically.
        We then agreed to take this project as the base of our research, and to take a larger scope, talking about autonomous trans in their entirety.
        Many papers and articles could be found on that subject. However, this remained a very large scoped, that we could not cover in its entirety, because the term autonomy covers a lot of case and subject, from assisted driving to driverless.
        I then decided to talk about a general overview, before watching a few projects that seemed known or closest to the full autonomous system.
        But similarly to the Train Drone, I rapidly noticed that every project had similar patterns: a lot of mentions and articles when they are tested, but nothing after that. It is then hard to focus on technical details about specific projects.
        Finally, I also had the opportunity to ask for some insight to a friend working in embedded system for trains at Systerel. He gave me the link to articles regarding 5G for autonomy in subways, which was just on point.
        <br> <br>
        &nbsp;&nbsp;&nbsp;&nbsp; For the third and final part, we managed to <b>make the presentation of our subject. </b>
        The slides can be found at the end of this page.
    </p>

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; In conclusion, this class has been a good opportunity to have an overview of the 5G technologies, other GSM technologies, and the application of all of them.
        It deepened my understanding of how these technologies could be used in IoT or embedded system. 
        <br>
        It was also a way to improve my ease during oral presentation and my capacity to research a subject for that purpose.
        To be able to present a complex and vast subject in 10 to 15 minutes is a very good exercise that will certainly be useful as an engineer.
    </p>


    <!--<SkillMatrix :skillMatrix="skillMatrixFiveG"/>-->

    <!---->
    <PDFReader  path="./documents/reports/Presentation_5G-Biendou_Brunetto.pdf" 
                title="Slides - Autonomous Trains" 
                language="French" 
                madeBy="Marie Brunetto, Brian Biendou"
                color="secondary"/>


</template>

<script lang="ts">

    export default {
        data() {
            return {
                skillMatrixFiveG: [ {skill: "Unknown", expected: 0, estimated: 0},
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