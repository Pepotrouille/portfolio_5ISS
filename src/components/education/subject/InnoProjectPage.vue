<template>
    <BackButton @change-content="ChangeContent" color="info" class="mb-4"/>
    
    <TitleSubject title="INNOVATIVE PROJECT" teacher="Thierry Monteil" color="info"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        Through our fifth year of engineering studies at INSA Toulouse, we learned about numerous subjects related to the world of the Internet of Things.
        Most of these courses were theoretical, lessons we had to learn the concepts.
        The Innovative Project is a project lead throughout the semester in which we had to apply the knowledge we acquired in every other course.
        It consists of the development of an IoT technology, from the conception to the realization.
        The subject was given and followed by industrials or researchers, and the project was done in groups of 4 to 5 students.
    </p>
    <p class="text-justify my-5">
         Our subject was given by a Toulousian company called Maillon Mobility.
         Maillon Mobility is a company that develops a new way of transportation.
         Their main prototype is called the <i>Maillon Capitol</i>, an electric tricycle designed for periurban mobility.
         Our objective was to implement sensors to improve the user experience of the tricycle.
         
    </p>

    <!---->
    <h3>Realization</h3>
    <h4>Brainstorming</h4>
    <p class="text-justify my-5">
        Our first task was to determine which improvements we could bring to the tricycle.
        Three ideas were selected:
    </p>
    <ul class="text-justify">
        <li>Implement a system to detect and prevent obstacles around the tricycle</li>
        <li>Implement a system to improve the security of the vehicle</li>
        <li>Implement a system to detect the user's heart rate and adapt the power depending on it</li>
    </ul>
    <p class="text-justify my-5">
        We decided to focus on the last idea, as it is the more concrete and would be the most realistically implementable in the time span we have to develop the system.
        The idea was to adapt the power the driver will put on the tricycle depending on two factors: the heart rate and a chosen level of effort (sport, stroll...).
        To create this system, we relied on three main components:
    </p>
    <ul class="text-justify mb-5">
        <li>A smart watch to get the heart rate,</li>
        <li>The phone to display the information and chose the level of effort</li>
        <li>An ESP32, a development board, to communicate the new power to the system.</li>
    </ul>
    <h4>Work repartition</h4>
    <p class="text-justify my-5">
        As a team of four, we needed to split the work to be as efficient as possible.
    </p>
    <ul class="text-justify">
        <li>Two would work on the test bench and ensure the ESP32 is properly communicating with the motor,</li>
        <li>One would work on communicating with the smart watch api and make the front-end of the application,</li>
        <li>I will make the communication between the phone and the ESP, as well as the back end of the application.</li>
    </ul>
    <p class="text-justify my-5">
        To ensure that we were progressing as planned, we worked using the AGILE method, defining and updating sprints with our bimonthly tasks.
        However, as we did not have much time to work on the project and delays in the material, the AGILE method was not as efficient as we hoped.
    </p>
    <h4>Communication between phone and ESP</h4>
    <p class="text-justify my-5">
        The communication between the phone and the ESP needed to be implemented.
        To do so, we needed to rely on the existing protocols present on the phone, as the ESP could get an additional antenna and libraries to communicate ith the phone.
        The phone has a lot of existing protocols implemented: Bluetooth, Wifi, NFC, 5G, 4G, 3G, 2G.
        We decided to use the Bluetooth Low Energy protocol, as it is the most adapted for our application: both energy efficient (as opposed to wi-fi), with a convenient range of functioning (unlike NFC).
        Finally, the ESP32 has a library to communicate with BLE, so we decided to use this protocol.
        The implementation was done in C++ for the ESP and typescript for the phone.
    </p>
    <h4>Back end and hosting of the application</h4>
    <p class="text-justify my-5">
        As we were developing the phone part of the system, we were wondering how to implement the back end of the application.
        The main question was to know if we wanted to use a phone application or a web application.
        We decided to use a web application, as it is easier to develop and deploy, not requiring to go through Android Studio, an intermediate software for android applications.
        It would also be easier to potentially implement accounts or database for the firm to implement.
        The main throwback was to find where to host the web application. 
        The platform Github proposes to host websites for free, with up to 1GB of storage, which perfectly fits our needs.
        This would also require the user to have access to an internet connection.
        However, the page could work locally once loaded, so the user would not need to have a connection all the time.
        <br>
        The page can be accessed at <a href="https://pepotrouille.github.io/maillon_mobility/">https://pepotrouille.github.io/maillon_mobility/</a>
        </p>
    <h4>Rework of the front end</h4>
    <p class="text-justify my-5">
        Finally, a final task I had was to improve the user interface. 
        The former appearance was convenient for development purposes.
        However, if we want to show the project to industrials, a more proper render would be appreciated.
        For this reason, I looked at fitness apps on Behance to get inspiration and decided to improve the existing interface, as you can see below.
    </p>
    <p class="text-justify my-5">
        
        </p>

        <ImageSubject   imagePath="./images/innovative_project-Front_end.JPG" 
                    description="Final user interface on the phone." 
                    color="secondary"
                    width_percent="75"/>
    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        To conclude, this project was an interesting addition to our curriculum.
        It allowed us to apply the knowledge we acquired in the other courses, and to work in a team.
        However, our project did not meet all the courses that we would have liked to apply without stretching the subject, such as energy management, or the use of sensors.
        We also had to adapt to the constraints of the company, delivering quite lately the workbench with close to no documentation.
        The API of the watch was also quite hard to communicate with, as it required an API key for company that we did not have.
        Finally, the project was not as successful as we would have liked, as we did not have the time to implement all the features we wanted.
        However, we learned a lot from this project, and we are proud of what we achieved.
        But another choice of subject could have been more interesting for us in retrospect.
        <br>
    </p>

    <SkillMatrix :skillMatrix="skillMatrixIP"/>
<!--Energy_Innovative_Project-Brunetto-Biendou-Caute-Bigot-->

    <!---->
    <PDFReader  path="./documents/reports/Report_Innovative_Project_Brunetto_Bigot_Caute_Biendou.pdf" 
                title="Main Report" 
                language="English" 
                madeBy="Marie Brunetto, Timothé Bigot, Brian Biendou, Achille Caute"
                color="info"/>

    <PDFReader  path="./documents/reports/Presentation_Innovative_Project_Final.pdf" 
                title="Presentation - Final Oral" 
                language="English" 
                madeBy="Marie Brunetto, Timothé Bigot, Brian Biendou, Achille Caute"
                color="info"/>

    <PDFReader  path="./documents/reports/Energy_Innovative_Project-Brunetto-Biendou-Caute-Bigot.pdf" 
                title="Report - Energetic Part" 
                language="English" 
                madeBy="Marie Brunetto, Timothé Bigot, Brian Biendou, Achille Caute"
                color="info"/>

    <PDFReader  path="./documents/reports/Report_Innovative_Project_Security.pdf" 
                title="Report - Security Part" 
                language="English" 
                madeBy="Marie Brunetto, Timothé Bigot, Brian Biendou, Achille Caute"
                color="info"/>
                
</template>

<script lang="ts">

    export default {
        data() {
            return {
                skillMatrixIP: [  {skill: "Solve a problem in a creative way", expected: 4, estimated: 4},
                                  {skill: "Develop the first stage of innovation", expected: 4, estimated: 4},
                                  {skill: "Understand production, validation, distribution, acceptability, and aftermath of innovation", expected: 4, estimated: 4},
                                  {skill: "Structure and lead an innovative project", expected: 4, estimated: 4},
                                  {skill: "Analyze a real-life problem", expected: 4, estimated: 4},
                                  {skill: "Suggest a technological solution to a problem", expected: 4, estimated: 3.5},
                                  {skill: "Implement a prototype to solve the problem", expected: 4, estimated: 4},
                                  {skill: "Present and debate (in English) the technical choice made", expected: 4, estimated: 4},
                                  {skill: "Produce a report (in English) for the developed project", expected: 4, estimated: 4},
                                  {skill: "Multi-disciplinary students work as a team", expected: 4, estimated: 4},
                                ],
                skillMatrixBusiness: [
                                {skill: "Discover methods to validate and prioritize innovations and market targets", expected: 3, estimated: 3},
                                {skill: "Know the points to work to offer value and build a good business model", expected: 3, estimated: 3},
                                {skill: "Define if an idea is patentable and carry out a search of anteriority", expected: 3, estimated: 3},
                                {skill: "Define your financing tool according to your needs and adapt", expected: 3, estimated: 3},
                                {skill: "Set goals in line with your means, discover and select digital and traditional commercial actions", expected: 3, estimated: 3},
                                {skill: "Recruit, manage and organize a startup", expected: 3, estimated: 3},
                                {skill: "Make a pitch", expected: 3, estimated: 3},
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