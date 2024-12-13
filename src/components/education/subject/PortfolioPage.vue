<template>
    <BackButton @change-content="ChangeContent" color="info" class="mb-4"/>
    
    <TitleSubject title="PORTFOLIO" teacher="Gaël Loubet" color="info"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; The portfolio class is dedicated to the creation of the portfolio you are currently reading. 
        With a few class to present the subject and media to create this portfolio, we were rapidly able to start working.
        The idea of this course is to give the student an opportunity to synthesised the different lessons and experience we had throught the year.
        The choice of the medium to present is open, for instance by using a pdf, a website or a github page. As long as it is possible to easily access and read the portfolio.
        <br>
        Each part must be divided into three part: 
    </p>
    <ul class="text-justify ml-10">
        <li><b>A descriptive part</b>: this first part should describe the content of the course and the context in which it is given for our formation.</li>
        <li><b>A technical part</b>: this second part should present the work that was realized for this course, focusing on the difficulties and solutions that were used.</li>
        <li><b>A analytical part</b>: this final part should explain the final result achieved after these lessons and the skills that we developped through it.</li>
    </ul>
    <p class="text-justify my-5">
    </p>

    <!---->
    <h3>Realisation</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; The first question that I asked to ask myself to create this portfolio was the choice of the medium.
        Among the ones that were presented , I add a preference for the website format, as I already have some minor experience using frameworks for web pages and wanted to improve my web development skills.
        A website would also give the reader a better experience to read through the skills, and the ability for me to reuse it for future experience, in my future work life.
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp; I decided to use the framework Vue, because I already had the chance to develop some web pages using it, including <a href="https://pepotrouille.github.io/">a prior portfolio</a> that I developed, more oriented towards game development. 
        It is also because Vue is the framework used by two out of the three softwares I am maintaining in my work training.
        I chose to add the library Vuetify, giving me better UI components for faster development and better render than bare Vue would.
        The frontend is developed in typescript, rather than javascript, as it gives some more advanced structures for the codes, such as enumerations. 
        It is also a typed language, which is appreciated for clear coding.
        Finally, I decided to host this page using Github pages: the platform Github offers to freely host pages related to repositories with up to 1Gb of content, which fitted perfectly with my current application.
        I also used Github for versioning and storing of the project, and Github Projects to create a Kanban board to follow the progress.
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp; Even though I am now familiar with Vue, I had some difficulties when it came to hosting. 
        Even though it was working when I ran it locally, the build of the page had issues with the route to access the pages. 
        The process was then unable to detect the main pages and to build it into a html page.
        I was able to overcome this problem through some documentation online and a lot of trial and error.
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp; Once the web page done, I then needed to write their content.
        It took longer than expected to summarize each lesson, especially when it comes to analyzing.
        It was important to properly schedule the redaction of the portfolio, and a mistake I might have done would be to not start proper redaction before the end of November.
        This delay is also due to the creation of the web page, that I wanted functionning and generic enough for me to not have to worry about code once I start writing.
        After seeing the amount of work, I decided to have a better repartition of the work by setting a subject a day for different day of my planning.
        I also had to make sure that the lessons were finished or advanced enough so I could already have a global vision on what I have done and what it brought me.

    </p>
    <ImageSubject   imagePath="./images/portfolio_github_kanban.jpg" 
                    description="Kanban board on Github to follow the progress of the portfolio" 
                    color="info"
                    width_percent="100"/>

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; The portfolio course was a good opportunity to have a retrospective, not only on my last year of engineering studies, but also my work experience in general.
        It was interesting to look at each subject and ask myself how it is and could be used through my project, whether they professional or personal.
        It was also a good opportunity to question myself about how much a lesson was understood, and if I felt like this subject was mastered, understood or lacking o comprehension. 
        I also learned that it is important to evaluate the amount of work in advance, especially when it comes to a long term project such as the portfolio.
        Finally, it was also a good opportunity to apply knowledge about development I learned throughout the years, and to be able to show it through a fully functionning online portfolio.
    </p>

    <SkillMatrix :skillMatrix="skillMatrixPortfolio"/>


</template>

<script lang="ts">

    export default {
        data() {
            return {
                skillMatrixPortfolio: [ {skill: "Reflect upon my training process and methods", expected: 4, estimated: 4},
                                        {skill: "Be able to put forward my training experiences, whether they be explicit or implicit", expected: 4, estimated: 4},
                                        {skill: "Be self-sufficient and responsible towards my education", expected: 4, estimated: 4},
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