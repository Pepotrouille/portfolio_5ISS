<template>
    <BackButton @change-content="ChangeContent" color="primary" class="mb-4"/>
    
    <TitleSubject title="MIDDLEWARE AND SERVICES" teacher="Nawal Guermouche" color="primary"/>

    <SkillMatrix :skillMatrix="skillMatrixMiddleware" title="Middleware"/>
    <SkillMatrix :skillMatrix="skillMatrixSoftEng" title="Software Engineering"/>
    <SkillMatrix :skillMatrix="skillMatrixSOA" title="Service Architecture"/>
    
    <!--______________CLOUD COMPUTING____________________-->
    <TitleSubject title="CLOUD AND EDGE COMPUTING" teacher="Sami Yangui" color="info"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        Cloud and Edge computing is a subject focusing on the concept of virtualization, and its use in today's industry.
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
            <li><b>Cloud Computing</b>, a ,</li>
            <li><b>Edge Computing</b>, an .</li>
            <li><b>Fog Computing</b>, an .</li>
        </ul>
    <p class="text-justify my-5">
        
        
        
        <br>
    </p>

    <!---->
    <h3>Realisation</h3>
    <p class="text-justify my-5">
        To exercise our new knowledge about virtualization, we had six lab sessions to familiarize ourselves with the creation and manipulation of virtual machines and containers.
        To proceed, we used three tools: 
    </p>
        <ul class="text-justify ml-10">
            <li><b>VirtualBox</b> is a software that can be used to operate,</li>
            <li><b>Docker</b>, a well-known containerisation manager,</li>
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
        In conclusion of this course, I would estimate that my comprehension of the subject is quite clear and could be used for further application.
        However, I would still need to train myself to the tools in more definite environment, especially orchestration system that are widely used in companies such as Kubernetes or Docker Swarm.
        <br>
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
                skillMatrixSOA: [ {skill: "Know how to define a Service Oriented Architecture", expected: 4, estimated: 0},
                                    {skill: "Deploy an SOA with web services", expected: 4, estimated: 0},
                                    {skill: "Deploy and configure an SOA using SOAP", expected: 4, estimated: 0},
                                    {skill: "Deploy and configure an SOA using REST", expected: 4, estimated: 0},
                                    {skill: "Integrate a process manager in an SOA", expected: 4, estimated: 0},
                                  ],
                skillMatrixMiddleware: [  {skill: "Know how to situate the main standards for the Internet of Things", expected: 4, estimated: 0},
                                          {skill: "Deploy an architecture compliant to an IoT standard and implement a sensor network", expected: 4, estimated: 0},
                                          {skill: "Deploy and configure and IoT architecture using OM2M", expected: 4, estimated: 0},
                                          {skill: "Interact with the different resources of the architecture using REST services", expected: 4, estimated: 0},
                                          {skill: "Integrate a new technology into the deployed architecture", expected: 4, estimated: 0},
                                  ],
                skillMatrixSoftEng: [ {skill: "Define the different phases in software development", expected: 3, estimated: 0},
                                      {skill: "Know the different project management methods", expected: 3, estimated: 0},
                                      {skill: "Apply one of these methods a project", expected: 3, estimated: 0},
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

