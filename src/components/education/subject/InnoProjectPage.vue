<template>
    <BackButton @change-content="ChangeContent" color="info" class="mb-4"/>
    
    <TitleSubject title="INNOVATIVE PROJECT" teacher="Thierry Monteil" color="info"/>

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

    <SkillMatrix :skillMatrix="skillMatrixIP"/>
<!--Energy_Innovative_Project-Brunetto-Biendou-Caute-Bigot-->

    <!---->
    <PDFReader  path="./documents/reports/Energy_Innovative_Project-Brunetto-Biendou-Caute-Bigot.pdf" 
                title="Report - Energetic Part" 
                language="English" 
                madeBy="Marie Brunetto, Timothé Bigot, Brian Biendou, Achille Caute"
                color="info"/>

                
</template>

<script lang="ts">

    export default {
        data() {
            return {
                skillMatrixIP: [  {skill: "Solve a problem in a creative way", expected: 4, estimated: 0},
                                  {skill: "Develop the first stage of innovation", expected: 4, estimated: 0},
                                  {skill: "Understand production, validation, distribution, acceptability, and aftermath of innovation", expected: 4, estimated: 0},
                                  {skill: "Structure and lead an innovative project", expected: 4, estimated: 0},
                                  {skill: "Analyse a real-life problem", expected: 4, estimated: 0},
                                  {skill: "Suggest a technological solution to a problem", expected: 4, estimated: 0},
                                  {skill: "Implement a prototype to solve the problem", expected: 4, estimated: 0},
                                  {skill: "Present and debate (in English) the technical choice made", expected: 4, estimated: 0},
                                  {skill: "Produce a report (in English) for the developed project", expected: 4, estimated: 0},
                                  {skill: "Multi-disciplinary students work as a team", expected: 4, estimated: 0},
                                ],
                skillMatrixBusiness: [
                                {skill: "Discover methods to validate and prioritize innovations and market targets", expected: 3, estimated: 0},
                                {skill: "Know the points to work to offer value and build a good business model", expected: 3, estimated: 0},
                                {skill: "Define if an idea is patentable and carry out a search of anteriority", expected: 3, estimated: 0},
                                {skill: "Define your financing tool according to your needs and adapt", expected: 3, estimated: 0},
                                {skill: "Set goals in line with your means, discover and select digital and traditional commercial actions", expected: 3, estimated: 0},
                                {skill: "Recuit, manage and organise a startup", expected: 3, estimated: 0},
                                {skill: "Make a pitch", expected: 3, estimated: 0},
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