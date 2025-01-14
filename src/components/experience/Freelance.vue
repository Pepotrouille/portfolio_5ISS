<template>
    <BackButton @change-content="ChangeContent" color="primary" class="mb-4"/>
    
    <TitleSubject title="Freelance Activity " color="primary"/>

    <!---->
    <h3>Description of the Activity</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; Since 2020, I have been working as a freelance artist.
        Fiverr is an online platform that allows freelancers to offer their services to clients.
        Through this platform, I have offered my services in pixel art, mainly for video games animations or illustrations.
        I have mainly been contacted by independent video game developers, who needed an occasional pixel artist for their project.
        Even though this activity is not directly related to my formation, I think my activity taught me some aspects of the professional world.
    </p>
    <h4>Communication with the client</h4>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; As I am able to perform my work online, I communicate with client from all around the world.
        For this reason, I used English, but also French and Italian to message my clients.
        One of the main task was to understand the client's needs, and to be able to deliver a product that would satisfy them.
        Before the start of the order, we then discuss the needs and requirements for the projects, to estimate the amount of work, time and cost of the order.
        Finally, during the order itself, it is important to keep the client updated on the progress of the work, and to be able to make changes if needed.
    </p>
    <h4>Work management</h4>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; As a freelance artist, I have to manage my own work.
        I am often working by myself, and I have to be able to estimate the time needed to complete a project.
        This is mainly estimated by experience, as every project is different in needs.
        I also have to parallelize my work, as I can have multiple orders at the same time, as well as my studies.
    </p>
    <h4>Self-employed</h4>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; As a freelance artist, I am self-employed.
        This means that I have to manage my own taxes, and to declare my income.
        Most of my orders are coming from the platform Fiverr, but other can come from other sources, such as social networks or acquaintances.
        I kept an excel to follow my clients orders and monthly income.
        </p>
    <!--<ImageSubject imagePath="./images/Internship2024_Relational_Diagram.png" description="Figure 4 - The class diagram of the database." color="primary" width_percent="60"/>-->

    <!---->
    <h3>Analysis</h3>
    <h4>What the experience brought</h4>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; This experience taught me some aspects of self-management and communication with clients.
        As a freelance artist, I had to lead every order from requirements to delivery.
        I also had to manage my own work, and to be able to parallelize my work with my studies.
        </p>
    <h4>Overall opinion</h4>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; Even though this activity is not directly related to my formation, I think it was a good experience.
        Video game development is a field that I am passionate about, and to be able to work on some independent projects was a real pleasure.
        If I wished to continue in this field as a developer, to have experience as an artist would be a real asset.
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