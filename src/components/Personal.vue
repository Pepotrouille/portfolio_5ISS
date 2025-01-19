<template>
    <v-container>
        <v-row class="mb-4">
            <v-col>
                <v-sheet color="surface-darken-1" class="text-h1 font-weight-bold mb-4 text-primary text-center">Introduction</v-sheet>
            </v-col>
        </v-row>
        
        <!--WHO I AM SECTION-->
        <v-row :style='"margin-bottom: "+marge+"px;"'>
            <v-col  cols="8"  class="my-auto">
                <!--<v-sheet color="surface-darken-1" class="text-h2 font-weight-bold mb-4 text-primary">Who I AM</v-sheet>-->
                <v-sheet color="surface-darken-1" class="text-justify">
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; My name is Marie. I am a student in the engineering university of the National Institute of Applied Science, a.k.a. INSA, from Toulouse, France.
                    I am currently in my fifth and last year of my cursus, with a specialization in Computer and Network Engineering.
                    Through this portfolio, I will talk about my Education, my experiences as well as my interests and professional projects.
                    
                    </p>
                    
                </v-sheet>
            </v-col>
            <v-col >
                <img src="..\assets\images\personnel\Me.png" width="100%">
            </v-col>
        </v-row>
        
        <!--TIMELINE SECTION-->
        <v-row :style='"margin-bottom: "+marge+"px;"'>
            <v-col>
                <v-sheet  color="surface-darken-1" class="text-h2 font-weight-bold mb-4 text-primary">Education</v-sheet>
                <TimelineEducation/>
            </v-col>
        </v-row>
        
        <!--CAREER SECTION-->
        <v-row :style='"margin-bottom: "+marge+"px; margin-top: 80px;"'>
            <v-col  cols="8"  class="my-auto">
                <v-sheet color="surface-darken-1" class="text-h2 font-weight-bold mb-4 text-primary">Career Plans</v-sheet>
                <h3 class="text-center mt-5">INSA Toulouse</h3>
                <p class="text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp; Through a Scientific Baccalaureat with IT options, I aimed to join a school to teach me more about computer science.
                Thereby, I joined INSA Toulouse for its renowned courses about this specific subject, I followed the corresponding cursus from the first year of "Formation Initiale" to the last year of engineering cycle, first through "Modélisation Informatique et Communication", or MIC, and then through "Informatique et Réseaux", or IR. 
                </p>

                <h3 class="text-center mt-5">Innovative and Smart System</h3>
                <p class="text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp; During my first year at INSA Toulouse, I learned about the different orientations and possible cursus that I could follow in the school. 
                Innovative and Smart System (ISS) was promoted as being a pluridisciplinary major, between computer science and electronic, in which projects and practical application would be lead.
                Being curious and interested in the topics of electronics nonetheless, I thought of this cursus as being a good opportunity.
                As I have a better affinity with computer science, I chose to follow the Informatique et Réseaux (IR) cursus.
                In fourth year, a specialization was proposed between communicating system, "Systèmes Communicants", or computer system, "Systèmes Informatique". 
                My curiosity lead me to chose communicating system, as it would be a good opportunity to deepen new subjects in networks and telecommunications.
                This was also the preferred path to join the ISS PTP, that I was planning to join
                <br><br>
                After a few month in this formation, I find the topics really interesting, even though some are quite complex with my computer science background.
                It is also very interesting to be in a class with people from other formations, to work and exchange with them.
                </p>

                <h3 class="text-center mt-5">After the diploma</h3>
                <p class="text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp; I am still unsure of what I would like to do precisely once I finish school in late 2025. 
                Through my internships and my apprenticeship, I found interest in software and web development, and might find pleasure to continue in these field.
                Even though it might not have a direct link with my least year of education, I think my acquired knowledge about networks, telecommunication and connected objects might still be an interesting addition in some specific task I might later have.
                </p>
            </v-col>
            <v-col class="align-center">
                <img src="..\assets\images\personnel\Logo_Work.png" width="100%">
            </v-col>
        </v-row>
        
        <!--INTERESTS SECTION-->
        <v-row :style='"margin-bottom: "+marge+"px;"'>
            <v-col >
                <img src="..\assets\images\personnel\Logo_Interest.png" width="100%">
            </v-col>
            <v-col  cols="8"  class="my-auto">
                <v-sheet color="surface-darken-1" class="text-h2 font-weight-bold mb-4 text-primary text-right">Points of Interest</v-sheet>
                <p class="text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp; This section will focus around some of my passion. Though the main formation is important, it is around the passion and hobbies that it is possible to experiment and learn autonomy.
                This is why I think this section is important. This apply especially as some of my hobbies gave me the required knowledge and experience to find internship or achieve some of my work tasks.
                </p>

                <h3 class="text-center mt-5">Game development</h3>
                <p class="text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp; Game development is one of my passion, and many aspects of my life revolve around it.
                I am a long-time player, especially various management and strategy games, and it is a dream of mine to one day be able to create a game that someone would enjoy as much as I enjoyed playing other's games!
                Some of the activities that I had around game development
                </p>
                <ul>
                    <li class="text-justify"><b>My freelance activity as Pixel-artist</b>: Since 2020, I am working as a freelance, to help independant game developers to create the visuals of their games. 
                        I had the chance to be part of some large projects, such as <a href="https://www.kickstarter.com/projects/jeffreyha/l2-speak">L2 Speak</a> or <a href="https://store.steampowered.com/app/2842880/Vox_Populi_Europa_2024/">Vox Populi</a></li>.
                        A section treating about my skills will be found in the Experience section of this portfolio.
                    <li class="text-justify"><b>Game jams</b>: With some of my friends or sometimes strangers, I had the opportunity to participate to game jams as graphic artist or developer. 
                        A game jam is the idea of conceiving a game or concept of a game in a limited time: a week-end, two weeks, two month...</li>
                    <li class="text-justify"><b>Teaching in a club</b>: With the help of the Club Info of the INSA Toulouse, I was able to teach to a couple of student to learn the basics to use game development software such as Unity or Godot.</li>
                </ul>
                <h3 class="text-center mt-5">Do It Yourself</h3>
                <p class="text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp; I am a creative person, and I like to explore new media to discover and create, such as drawing, painting, crochet, cross-stitching, digital art, 3D printing, clay modelling... and many more!
                </p>

            </v-col>
        </v-row>

        <!--CONTACT SECTION-->
        <v-row :style='"margin-bottom: "+marge+"px;"'>
            <v-col >
                <v-sheet color="surface-darken-1" class="text-h2 font-weight-bold mb-4 text-primary text-center">Contacts</v-sheet>
                
                <v-row class="text-justify ga-6">
                    <ContactButton color="primary" href="mailto:brunetto.marie@gmail.com" icon="mdi-mail" hoverText="Send mail to brunetto.marie@gmail.com"/>
                    <ContactButton color="secondary" href="https://github.com/Pepotrouille" icon="mdi-github" hoverText="Visit my Github: Pepotrouille"/>
                    <ContactButton color="info" href="https://www.linkedin.com/in/marie-brunetto/" icon="mdi-linkedin" hoverText="Visit my Linkedin: Marie Brunetto"/>
                    <ContactButton color="primary" href="..\..\public\documents\CV_Marie_Brunetto_Avril_2024.pdf" icon="mdi-file-account-outline" hoverText="Download my Resume"/>
                </v-row>
                
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import TimelineEducation from './personnel/TimelineEducation.vue';
    import ContactButton from './personnel/ContactButton.vue';
    
    export default {
        components: {
            TimelineEducation,
            ContactButton,
        },
        data() {
            return {
                marge: 8,
            };
        },
    };
</script>