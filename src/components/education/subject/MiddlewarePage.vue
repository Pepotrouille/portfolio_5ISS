<template>
    <BackButton @change-content="ChangeContent" color="primary" class="mb-4"/>
    <!--______________MIDDLEWARE____________________-->
    <TitleSubject title="MIDDLEWARE" teacher="Thierry Monteil" color="primary"/>
    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; Middleware, or Intergiciel in French, is a software that acts as a bridge between an operating system or database and applications, especially on a network.
        The Middleware course is a subject that focuses on the concept of Middleware through two main concepts: MQTT and oneM2M.
    </p>
    <ul class="text-justify ml-10">
        <li><b>MQTT</b> is a protocol that is mainly used for IoT.
            It relies on the publish/subscribe model, where a client can publish a message on a topic, and another client can subscribe to this topic to receive the message.
            This protocol is lightweight and is used in many IoT applications.</li>
        <li><b>OneM2M</b> is a set of standards that aim to create a common M2M service layer that can be embedded within various hardware and software, and connect them to the internet.
        </li>
    </ul>


    <!---->
    <h3>Realization</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; This class had labs sessions where we had to implement the concepts of MQTT and oneM2M.
        The first two labs were about MQTT. We had to create a simple application that would publish and subscribe to a topic.
        The application consisted in a button and a light on an ESP32 that would communicate using a Mosquitto Broker.
        We were able to create the code to communicate using the Arduino IDE along with a library called pubsubclient by Nick O'Leary to use the MQTT protocol.
        We created a common topic along with another group, and developed the code so we could turn on and off their light with our button, and vice versa.
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp; The third lab was about oneM2M. 
        It first consisted in an initiation through a Jupiter Notebook where we could get familiar with the oneM2M protocol and requests.
        We then had to simulate the previous MQTT application using the oneM2M standards, more precisely through an ACME server.
        With Jupiter Notebook capacities, we were able to create four thread to simulate the system: one for the broker, one for the button, one for the light and one for the ACME server.
        <br><br>
        The last lab was about the deployment using NodeRed.
        Unfortunately, due to delay in the previous lab, we were not able to work much on this part.
    </p>

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; To conclude, I think that the Machine to Machine communication is a really interesting subject.
        It is a concept that could be really interesting in the IoT industry, as it allows for a better communication between devices.
        The concept of MQTT was really well explained and I think that I acquired a good understanding of it.
        However, I think that the course was a bit too short and sketchy to really understand the concept of oneM2M.
        As I plan to work in a more web and software development oriented field, I think that the knowledge of Middleware technologies is not essential.
        However, it is always good to have a good understanding of the different technologies that are used in the industry.
    </p>

    <SkillMatrix :skillMatrix="skillMatrixMiddleware" title="Middleware"/>

    <PDFReader  path="./documents/reports/Report_Middleware_for_iot-brunetto_biendou.pdf" 
                title="Report - Middleware for IoT" 
                language="English" 
                madeBy="Marie Brunetto, Brian Biendou"
                color="secondary"/>

    
    <!--______________SOA AND SE____________________-->
    <TitleSubject title="SERVICE ARCHITECTURE AND SOFTWARE ENGINEERING" teacher="Nawal Guermouche" color="primary"/>
    
    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; Service Architecture is a subject that focuses on the concept of Service Oriented Architecture (SOA) and its use in today's industry.
        Service Architecture relies on the division of an application in multiple services or microservices, that will each supports and treat a specific task.
        The advantage of such an architecture is that it allows for a better scalability and maintainability of the application, as well as a better distribution of the computing power.
        Each service can be run on a different device, and can be easily replaced or updated without affecting the whole application. 
        It wan also be written in different languages, as long as they are able to communicate with each other.
        This communication can be done using different protocols, such as SOAP or REST.
        We explored the communication in SOAP and REST through courses and labs sessions.
    </p>

    <!---->
    <h3>Realization</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; To apply the knowledge we had on SOA, we had to create a project that would use the concept of Service Architecture.
        The goal of the project was to create an application that would bring together people that could require help in their everyday life with volunteers.
        This application had to be written using java, on the Eclipse IDE.
        This project was divided in four parts:
    </p>
        <ul class="text-justify ml-10">
            <li><b>SOAP</b>. The first part was to explore how to implement and visualize exchanges using the SOAP protocol.
                Though, as it is less used as the time goes by, we only made a single service to have the time for the next application.</li>
            <li><b>REST</b>. We then created a service using the default REST present in our Maven project, Jersey.</li>
            <li><b>Micro Services</b>. For the final part, we had to develop all the relevant microservices for the application to be functional.
                By using the Spring library, we were able to make the end microservices, as well as the configuration and discovery services.</li>
            <li><b>Deployment</b>. A final step was to deploy one of the service on a cloud platform, Microsoft Azure in this exercise.</li>
        </ul>
    <p class="text-justify my-5">
        For the structure, our application was composed of three main services.
    </p>
        <ul class="text-justify ml-10">
            <li>The first one was the <b>user service</b>, that manages the users of the application. They can be volunteers, help seekers, administrators or checkers. This class contains the necessary contact information.</li>
            <li>The second one was a <b>post service</b>, that manages the posts of the users, wether they are volunteers or help seekers. It contains the description and author of the post.</li>
            <li>The final one was the <b>assignment service</b>, that assigns the current status of a user responding to a post, whether it is to give or get help.</li>
        </ul>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; Finally, another project was lead where we had to create another project.
        We choose to conceive an application that will follow the position of sheep in a farm, to detect if they escaped.
        In this case, alarms would be triggered.
        This application relies as well on microservices using Maven projects and the Spring library.
    </p>
        

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; To conclude, I think that this course was really interesting and gave me a good insight on how to create a service architecture.
        I was able to understand the concept of microservices and how they can be used in a real application.
        Using the same subject as the previous year also helped me to see multiple solutions for a same problem, with the advantages and inconvenient of each.
        REST is an omnipresent protocol in the web development industry. 
        As it is a domain I would like to go towards, it is important to have a good understanding of it.
        For this reason, I found the projects really interesting and useful.
        <br>
    </p>

    <SkillMatrix :skillMatrix="skillMatrixSOA" title="Service Architecture"/>
    <SkillMatrix :skillMatrix="skillMatrixSoftEng" title="Software Engineering"/>
    
    <PDFReader  path="./documents/reports/Report_SOA-Beghin_Boukouiss_Brunetto.pdf" 
                title="Report - Service Architecture and Software Engineering TDs" 
                language="English" 
                madeBy="Marie Brunetto, Léa Beghin, Samia Boukouiss"
                color="secondary"/>
    
    <!--______________CLOUD COMPUTING____________________-->
    <TitleSubject title="CLOUD AND EDGE COMPUTING" teacher="Sami Yangui" color="primary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; Cloud and Edge computing is a subject focusing on the concept of virtualization, and its use in today's industry.
        Multiple technologies have been seen and explored:
    </p>
        <ul class="ml-10 text-justify">
            <li><b>Virtualization</b>. We approached virtualization by the architecture, mainly through three concepts: 
                Hypervisor architecture, whether it is bare-metal or hosted, Paravirtualization and Containerization.
                The concept of virtualization is essential for distributed computing, mainly to ensure that every end point is able
                to run a services as well, without relying on their main os, but rather on a predefined virtual environment created
                through an image. <br>
                During the lab sessions, we had the opportunity to explore the subject of virtualization and some of the well-known technologies.
            </li>
            <li><b>Cloud Computing</b>, a concept with no proper definition, but meaning "on-demand network access to a shared pool of configurable computing resources".
                The idea is to host the computing of an application on one or multiple devices.
                This is often delegated to platforms such as Amazon Web Services (AWS) or Microsoft Azure.
                These platforms propose to price depending on predefined parameters such as computing capacity, availability.</li>
            <li><b>Edge Computing</b>, it consists in using nearby device to partition the computing of an application.
                It can for instance be from an embedded device to nearby phones or computer that have more important computing power.</li>
            <li><b>Fog Computing</b>, We briefly talked about fog computing.</li>
        </ul>

    <!---->
    <h3>Realization</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; To exercise our new knowledge about virtualization, we had six lab sessions to familiarize ourselves with the creation and manipulation of virtual machines and containers.
        To proceed, we used three tools: 
    </p>
        <ul class="text-justify ml-10">
            <li><b>VirtualBox</b> is a software that can be used to operate,</li>
            <li><b>Docker</b>, a well-known containerization manager,</li>
            <li><b>Openstack</b>, an online cloud computing platform, on which we were able to manage virtual machines as well as the networks on which they operate on.</li>
        </ul>
    <p class="text-justify my-5">
        Finally, we also had a part about kubernetes. Unfortunately, due to some technical issues, my group and I were not able to achieve this part and properly make our hand on this technology.
        The report containing the general outline of our lab session can be read at the end of this page.
        <br>
    </p>

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        &nbsp;&nbsp;&nbsp;&nbsp; In conclusion of this course, I would estimate that my comprehension of the subject is quite clear and could be used for further application.
        However, I would still need to train myself to the tools in more definite environment, especially orchestration system that are widely used in companies such as Kubernetes or Docker Swarm.
        If I want to go towards a web development profession, having experience with cloud computing technologies could be an interesting skill to have.
        During my internship in summer 2024, where I had to develop a web application, I already have the opportunity to see the hosting through  Docker and Kubernetes virtualization.
        <br><br>

    </p>

    <SkillMatrix :skillMatrix="skillMatrixCloud" title="Cloud and Edge Computing"/>

    <!---->
    <PDFReader  path="./documents/reports/Report-Cloud_Computing-BIENDOU-BRUNETTO-VASSEUR.pdf" 
                title="Report - Cloud and Edge Computing Lab courses" 
                language="English" 
                madeBy="Marie Brunetto, Cyril Vasseur, Brian Biendou"
                color="secondary"/>

  

</template>




<script lang="ts">

    export default {
        data() {
            return {
                skillMatrixCloud: [ {skill: "Understand the concept of cloud computing", expected: 4, estimated: 4},
                                    {skill: "Use a IaaS-type cloud service", expected: 4, estimated: 4},
                                    {skill: "Deploy and adapt a cloud-based platform for IoT", expected: 4, estimated: 3},
                                  ],
                skillMatrixSOA: [ {skill: "Know how to define a Service Oriented Architecture", expected: 4, estimated: 4},
                                    {skill: "Deploy an SOA with web services", expected: 4, estimated: 4},
                                    {skill: "Deploy and configure an SOA using SOAP", expected: 4, estimated: 4},
                                    {skill: "Deploy and configure an SOA using REST", expected: 4, estimated: 4},
                                    {skill: "Integrate a process manager in an SOA", expected: 4, estimated: 4},
                                  ],
                skillMatrixMiddleware: [  {skill: "Know how to situate the main standards for the Internet of Things", expected: 4, estimated: 4},
                                          {skill: "Deploy an architecture compliant to an IoT standard and implement a sensor network", expected: 4, estimated: 4},
                                          {skill: "Deploy and configure and IoT architecture using OM2M", expected: 4, estimated: 3},
                                          {skill: "Interact with the different resources of the architecture using REST services", expected: 4, estimated: 4},
                                          {skill: "Integrate a new technology into the deployed architecture", expected: 4, estimated: 4},
                                  ],
                skillMatrixSoftEng: [ {skill: "Define the different phases in software development", expected: 3, estimated: 3},
                                      {skill: "Know the different project management methods", expected: 3, estimated: 3},
                                      {skill: "Apply one of these methods a project", expected: 3, estimated: 3},
                                  ],
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

