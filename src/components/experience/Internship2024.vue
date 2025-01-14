<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    <TitleSubject title="Internship at AVL " color="secondary"/>

    <!---->
    <h3>Description of the internship</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; From June to September 2024, I went to Regensburg, Germany for an internship.
        My work experience took place in AVL Software and Design, a firm specialized in the conception of solution for the automobile industry.
        I was placed in the Process, Methods and Tools (PMT) division, aiming to develop intern tools for the development.
        I was more precisely in a team working in the development of work using Large Language Models, also known as LLM, a generative branch of Artificial Intelligence.
        Current tools that were developped were axed around the management of requirements through diverse aspects, such as creation of specific ones or verification of their syntax.
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp; For the three months I would pass in the company, a single main task was given to me: 
        Create a web application that will make possible for the user to quickly retrieve information from documents, those being sometimes numerous and confidential.
        This application would be based on the Retrieval Augmented Generation, or RAG method. 
        This techniques uses semantic vectors to embed the sense of chunk of text, facilitating the retrieval of specific information.
    </p>

    <!---->
    <h3>Realisation</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; To create the application, the first step I needed to do was to get all the requirement for the application.
        The requirements were given by my manager as the following:
    </p>
    <ul class="text-justify ml-10">
        <li><b>Create a web application</b> written on Python, as it would be integrated to a current application.
            I would need to use the current technologies of this web application: NiceGUI, an python framework to produce html code for the front end, and Python for the back end.
            I would also need to follow the current graphic design so the website remains consistent as a whole</li>
        <li><b>The user should be able to</b> add documents to a collection, and retrieve information from the documents.
            The retrieved needs to be as accurate as possible, quickly obtained and readable by the user.</li>
        <li>Bonus: <b>The user should have a role</b> restraining the use of the indexing capabilities.
            This means that collections would have a list of user with their permissions (if they can add, remove, see the documents or just access the collection)</li>
        <li>Bonus: <b>The user should be able to set the indexing and retrieval parameters.</b> 
            This will allow to match the needs of the user, depending of their needs in term of retrieval/indexing accuracy/speed.</li>
        <li>Bonus: <b>The user should be able to access the source document.</b> 
            Or, if the document is not available, to precisely know the source. (document name, page, slide number etc...)</li>
    </ul>
    <h4>Literature Review</h4>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; Following the idea of one of my colleagues, I decided to first inform myself about the RAG technique.
        I decided to make a literature review of the current state and technologies used to create RAG applications.
        This state of the art helped me to discover numerous aspects of this method.
    </p>
    <!--Mettre la litterature review après l'avoir remise au propre-->
    <h4>Front End</h4>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; Once I finished informing myself on the main idea of RAG, I could start the development.
        I decided to start with the front end of the application by making the interface of the web application.
        This would make me able to show the ideal implementation to my manager and some future users to ensure that no functionnalities is wrong or missing.
        The development of the front end would continue with the implementation of the back end and the feedback of the users for three month.
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp; To develop the front end, the framework <a href="https://nicegui.io/">NiceGUI</a> has been used.
        The choice has been done because the application is integrated to a current web application working under this same framework.
        Even though it facilitates the usage of Python capabilities through library and the link with the back end, NiceGUI presents some limitations when it comes to advanced elements.
        NiceGUI relies on <a href="https://quasar.dev/">Quasar</a>, a Vue.js framework.
        Even though most of Quasar elements were implemented to be easily imported in python, some other were missing or had missing parameters.
        This limitation has been seen multiple times during the development, one of those being the implementation of a dynamic table.
        NiceGUI did not implement all the functionnalities to update tables, and does not offer easy alternative. 
        Overall, NiceGUI is a good framework for wweb applications, but shows serious limitations when it comes to template elements.
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp; For the interface itself, the final application was divided into three main tabs:  
    </p>
    <ul class="text-justify ml-10">
        <li><b>Talk to your data</b>: The main tab for the user. 
            In this tab, the user will be able to select a collection, ask a question and read the given answer, extracted from the documents in the collection.
            The documents from which the information is extracted are referenced and some are even available to be opened.</li>
        <li><b>Document Management</b>: The tab were the collections, documents and permissions are managed.
            When a collection is selected, every document stored should be able to be seen and modified. 
            The user is able to add or delete documents depending on their permissions.
            The user is also able to manage the permissions of a given collection.
            </li>
        <li><b>Settings</b>: The tab where you can set the retrieval and indexing capabilities.
            </li>
    </ul>
    <ImageSubject imagePath="./images/Internship2024_Talk_Tab.PNG" description="Figure 1 - The tab where the user is able to ask questions." color="secondary" width_percent="80"/>
    <ImageSubject imagePath="./images/Internship2024_Manage_Tab.PNG" description="Figure 2 - The tab where the user is able to manage the documents used in the retrieval." color="secondary" width_percent="80"/>
    <ImageSubject imagePath="./images/Internship2024_Settings_Tab.PNG" description="Figure 3 - The tab where the user can set the parameters of the indexing and retrieval" color="secondary" width_percent="80"/>
    
    <h4>Back End</h4>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; Once the front end was validated by my manager, I started working on the back end.
        The RAG method requires the creation of a vector database to store the sementic vectors that will be used for fast retrieval.
        At first, I decided to use <a href="https://qdrant.tech/">Qdrant</a>, because it has a python library to easily communicates with the API, and is widely used for RAG applications.
        However, with the development, we had the need to implement a regular database for user and documents management, and more control over the vectors.
        For this reasons, we decided to migrate to an PostGreSQL database, using the python library psycopg.
        PostgreSQL handle quite well vectors and PostGres implementations for RAG are emerging.
    </p>
    <ImageSubject imagePath="./images/Internship2024_Relational_Diagram.png" description="Figure 4 - The class diagram of the database." color="secondary" width_percent="60"/>

    <!---->
    <h3>Analysis</h3>
    <h4>What the formation brought</h4>
    <p class="text-justify mb-5">
        During these three month, I was able to apply many soft and hard skills learnt through my formation at INSA Toulouse.
    </p>
    <h5>Literature Review to start with the project</h5>
    <p class="text-justify mb-5">
        My first task was to write a literature review to inform myself on the current state of the art of the RAG method.
        Multiple classes that I had during my study years lead me to learn how to search and present a subject.
        In fourth year, we even had to make a literature review for an introduction to research.
        This ability to search the information and ensuring the validity of the sources was useful to create a document that would showcase numerous technologies.
    </p>
    <h5>Object Oriented Programming (OOP)</h5>
    <p class="text-justify mb-5">
        The front and back end of the application have been mad eusing python. 
        To ensure a proper implementation, it was essential to write clean code.
        The use of Object Oriented Programming allowed me to have a well structured code.
        It is also a good practice to ensure that the code will be comprehensible by the following programmer on the project.
    </p>
    
    <h5>Database Creation and Management</h5>
    <p class="text-justify mb-5">
        For the application, I needed to create an SQL database.
        Thanks to our lessons, I was able to create a clean database following the normalization methods to avoid redundancy.
    </p>
    <!---->
    <h4>What the experience brought</h4>
    <ul class="text-justify ml-10">
        <li><b>Work experience</b>: This internship was my second real work experience.
            I was
            </li>
        <li><b>Development and deployement of an application</b>: 
            I was able to create a web application from conception, through development and until deployement and feedback.
            </li>
        <li><b>Group project and management methods</b>: By working in a team of 6 and through daily and weekly meeting, I saw the difference between student and work team work.
            </li>
        <li><b>Better understanding of LLM for industry</b>:  I now know different way to implement the LLM in an application.
            AI implementation still is in a trend and could be an advantage in some future job offers.
            </li>
        <li><b>International culture</b>: AVL is an international company in which I had the opportunity to exchange with people from all around the world.
            It was also a good experience to work in a German environment, and to learn about cultural differences in work and everyday life.
            </li>
    </ul>
    <h4>Overall opinion</h4>
    <p class="text-justify my-5">
        To conclude, this internship was a great first step in the world of web development.
        This convinced me that web development is a field that I could like to work in.
        I was able to apply my knowledge in a real project, and to learn new technologies about conception and deployement of a website.
        The work environment was also very pleasant, and I was able to learn a lot about the work in a big international company.
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