<template>
    <BackButton @change-content="ChangeContent" color="info" class="mb-4"/>
    
    <TitleSubject title="Work Placement at Thales Alenia Space Toulouse" color="info"/>

    <!---->
    <h3>Description of the Work Placement</h3>
    <p class="text-justify my-5">
        During my last year at INSA Toulouse, I had the opportunity have a work placement at Thales Alenia Space Toulouse.
        This work placement is part of the formation at INSA Toulouse, and is a great opportunity to apply the skills learnt during the formation in a professional context.
        It consisted in the maintenance and development of three software used in the electronic departement.
    </p>

    <!---->
    <h3>Realisation</h3>
    <h4>Software development</h4>
    <p class="text-justify my-5">
        My mission was to maintain and develop three software used in the electronic departement.
        As Thales Alenia Space works in the space industry, electronic boards have the specificity to be design on demand, with only a few units created, unlike most of the mass production in the industry.
        This requires the electronic departement to have specific tools to design and test the electronic boards.
        These software are tools used by the electronic technicians and engineer to design and test electronic boards.
        The first software is a tool developed with Unity/C# to design the Stackup of existing PCB, as well as their documentation.
        The second and third software is a tool developed in Vue.js/typescript to follow the order and progress or the electronic boards.
    </p>


    <!--<ImageSubject imagePath="./images/Internship2024_Relational_Diagram.png" description="Figure 1." color="primary" width_percent="60"/>-->

    <!---->
    <h3>Analysis</h3>
    <h4>What the formation brought</h4>
    <p class="text-justify mb-5">
        During my work placement, I am and will be able to apply many skills learnt through my formation at INSA Toulouse.
    </p>
    <h5>Web and software development</h5>
    <p class="text-justify mb-5">
        At INSA Toulouse, I learned about web development in bare HTML, as well as software development with Java.
        Although thse are not the language used n the software, the concept remains the same.
        I knew Unity, C# and Vue development from personal projects, and I was able to apply this knowledge to the software.
    </p>
    <h5>Database Management</h5>
    <p class="text-justify mb-5">
        Even if for now I did not have to manipulate the database, it is planned that I should have to manipulate data.
    </p>

    <h4>What the experience brings</h4>
    <h5>Work experience</h5>
    <p class="text-justify mb-5">
        During my last year at INSA Toulouse, I had a choice between a yearly work placement and an 5 month-long internship.
        At first, I was interested in the internship, as it would give me more time to choose a work and company that would interest me.
        However, in my fourth year of study, a forum was held to present the different companies that would offer a work placement.
        I meet with a former INSA student who was working at Thales Alenia Space Toulouse.
        He presented me his work, and the projects he was working on.
        Those were exactly the kind of projects that I was interested in, and I decided to apply for a work placement at Thales Alenia Space Toulouse.
        As I had the experience with the given tools as well as a previous internship in the same firm, I was accepted.
        In retrospect, I think this experience is a better opportunity than the internship, as it gives me a better insight and integration in the company.
    </p>
    <h5>Software and Web development</h5>
    <p class="text-justify mb-5">
        This work placement is a great opportunity to apply my knowledge in software and web development.
        I have to develop, maintain and deploy softwares over the long term.
        This helps me to deepen my knowledge in Vue.js and typescript, web development technologies that can be applied for software.
        I also have to work with Unity and C#, that I already developed with during my free time.
        Even though this Unity is not usually used for software developement, it can be used for video game development or 3D development, and remains a good tool to know about.
    </p>
    <h5>Knowledge about electronic boards</h5>
    <p class="text-justify mb-5">
        As I am working on software designed for the electronic departement, I have to learn about the electronic boards.
        My manager gave me some documentation and formation about PCB design, and the different steps to create a PCB.
        This allows me to learn more about this field that I am not familiar with.
    </p>
    <h4>Overall opinion</h4>
    <p class="text-justify mb-5">
        I think this work placement will be a great opportunity to apply my knowledge in software and web development.
        As it is a field I would like to work in, I think this experience will be a great asset for my future career.
    </p>
    
</template>

<script lang="ts">

    export default {
        data() {
        },
        name: 'TemplateButtons',
            methods: {
                ChangeContent(contentTemplate: any) {
                this.$emit('change-content', contentTemplate);
                },
            },
    };
</script>