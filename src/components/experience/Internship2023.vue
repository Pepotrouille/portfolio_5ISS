<template>
    <BackButton @change-content="ChangeContent" color="primary" class="mb-4"/>
    
    <TitleSubject title="Internship at Thales Alenia Space Turin" color="primary"/>

    <!---->
    <h3>Description of the internship</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; My internship at Thales Alenia Space Turin was my first real experience in the professional world.
        I had the opportunity to work in a team specialized in th Model-based systems engineering (MBSE).
        This team belonged to a departement in charge of the modelization of the the functionnal needs of satellites and other spacecrafts.
        My tasks as a summer intern was to help to develop tools and library to help the team to be more efficient.
        
    </p>

    <!---->
    <h3>Realisation</h3>
    <h4>Capella Library</h4>
    &nbsp;&nbsp;&nbsp;&nbsp; Capella is an open source software designed for the modelization of systems, mainly used by MBSE engineers.
    It was mainly used to define the goal of the project, and to be able t odivide each requirement in smaller parts following the V-model.
    Once divided, these requirements were transformed into functions or tasks that the system needed to be able to achieve.
    These task are then linked to physical components and given to the developping departements.
    <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp; Capella is a very useful software for system engineering, but it lacks some features that could help the team to be more efficient.
    One of those is the ability to create a library of functions that could be reused in multiple projects:
    During the multiple projects in which my meanager was involved in, he noticed that some functions were comon to all cases.
    My task was to find a way to create an easy way for engineer working on Capella to reuse them rapidly, with a minimum effort for integration.
    <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp; My first task was to lok into multiple projects and to notice common elements that I could reuse.
    To help me understand, I was even given a conception of a small spacecraft to create from scratch, so I would get familiar with the software.
    Once I had a good understanding of the software, I started to create a library of functions that could be reused.
    As previously said, no real library was available, so I had to create a way to make it easy to use.
    I created a project with the common aspects that I found, for the developpers to be able to copy and paste these on their own project.
    I then proceeded to create a documentation to explain how to properly use it, as it required to use some functions that were not commonly used by the team.
    I was able to deliver a working library, that was able to be reviewed and used right after my task was done. 
    <br><br>
    <h4>Unreal Engine Powered Visualization</h4>
    &nbsp;&nbsp;&nbsp;&nbsp; As the library was done by the middle of my internship, another mission was assigned to me.
    Another improvment that my manager wanted to lead was to improve the communication of the data between the different departements.
    The idea was to put in common all the data that was used by the different teams (3d modelization, MBSE, radiation and thermic studies...) as a single project that could be accessed by all.
    The idea was to create a 3D visualization called Digital Twin of the spacecraft that was being developped including all the data.
    This would be useful to see the potential difference of version between the different department, sometimes with elements forgotten due to miscommunication.
    This digital twin would als be a good way to present the project to manager or clients.
    <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp; I was given the task to create a prototype of this digital twin.
    To proceed, I was put into the department in charge of high technology, for instance in charge of Virtual Reality for visualization.
    The development of the model would be done on Unreal Engine. 
    Unreal Engine is a powerful Game Engine, that is also used in many other fields, such as architecture, cinema, and even in the aeronautic industry.
    This engine has numerous plugins that allowed me to easily imort data from multiple sources, such as Capella, Catia, or even Excel.
    I also had to ensure that the data was properly formatted, as Unreal Engine can be very picky on the format of the data.
    I had to create a Python script to extract the data from some of the sources and to format it properly.
    At the end, I was able to create a prototype of the digital twin, that I presented in a final meeting.
    <br><br>

    <!--<ImageSubject imagePath="./images/Internship2024_Relational_Diagram.png" description="Figure 1." color="primary" width_percent="60"/>-->

    <!---->
    <h3>Analysis</h3>
    <h4>What the formation brought</h4>
    <p class="text-justify mb-5">
        During these three month, I was able to apply many skills learnt through my formation at INSA Toulouse.
    </p>
    <h5>Python and algorithm</h5>
    <p class="text-justify mb-5">
        I had to develop in Python for most of my internship. I also needed to use API to communicate with software such as Capella or Unreal Engine.
    </p>
    <h5>Graph theory</h5>
    <p class="text-justify mb-5">
        Catia and Capella data were divided into trees, with thousands of elements. 
        To create an efficient code, I had to apply a depth first search to link both three with an optimized time.
    </p>

    <h4>What the experience brought</h4>
    <h5>Arcadia/UML knowledge</h5>
    <p class="text-justify mb-5">
        Capella is a software that uses the Arcadia method to modelize systems. I had to learn how to use this software, and to understand the method to be able to create a library that could be used by the team.
    </p>
    <h5>Unreal Engine Experience</h5>
    <p class="text-justify mb-5">
        As a fan of video games development, to have the ability to work on a game engine such as Unreal Engine for my internship was a real pleasure.
        Even though, for the continuity of the code, I had to use the blueprint system instead of the bare C++.
        It was nonetheless a good opportunity to learn how to use this powerful tool.
    </p>
    <h4>Overall opinion</h4>
    <p class="text-justify mb-5">
        Even though I was not really in a team and more developping for a team, it was overall a good experience.
        I was able to learn a lot about the professional world, and to apply my development knowledge in a real context for the first time.
        I also learned to use software such as Capella or Unreal Engine.
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