<template>
    <BackButton @change-content="ChangeContent" color="info" class="my-4"/>
    
    <TitleSubject title="CLOUD AND EDGE COMPUTING" teacher="Sami Yangui" color="primary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="justify-center my-5">
        Cloud and Edge computing is a subject focusing on the concept of virtualization, and its use in today's industry.
        Two main technologies have been seen and explored: Virtual Machines and Containers.
        <br>
    </p>

    <!---->
    <h3>Realisation</h3>
    <p class="justify-center my-5">
        To exercise our new knowledge about virtualization, we had six lab sessions to familiarize ourselves with the creation and manipulation of virtual machines and containers.
        To proceed, we used three tools: 
    </p>
        <ul class="ml-10">
            <li><b>VirtualBox</b> is a software that can be used to operate,</li>
            <li><b>Docker</b>, a well-known containerisation manager,</li>
            <li><b>Openstack</b>, an online cloud computing platform, on which we were able to manage virtual machines as well as the networks on which they operate on.</li>
        </ul>
    <p class="justify-center my-5">
        Finally, we also had a part about kubernetes. Unfortunately, due to some technical issues, my group and I were not able to achieve this part and properly make our hand on this technology.
        The report containing the general outline of our lab session can be read at the end of this page.
        <br>
    </p>

    <!---->
    <h3>Analysis</h3>
    <p class="justify-center my-5">
        In conclusion of this course, I would estimate that my comprehension of the subject is quite clear and could be used for further application.
        However, I would still need to train myself to the tools in more definite environment, especially orchestration system that are widely used in companies such as Kubernetes or Docker Swarm.
        <br>
    </p>

    <v-table class="bg-surface-darken-3">
    <thead>
      <tr>
        <th class="text-left">Skill</th>
        <th class="text-left">Expected</th>
        <th class="text-left">Estimated</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in skill_matrix"
        :key="item.skill"
      >
        <td>{{ item.skill }}</td>
        <td>{{ item.expected }}</td>
        <td>{{ item.estimated }}</td>
      </tr>
    </tbody>
  </v-table>

    <!---->
    <PDFReader  path="./documents/reports/Report-Cloud_Computing-BIENDOU-BRUNETTO-VASSEUR.pdf" 
                title="Report - Lab courses" 
                language="English" 
                madeBy="Marie BRUNETTO, Cyril VASSEUR, Brian BIENDOU"
                color="secondary"/>

  

</template>




<script lang="ts">

    export default {
        data() {
            return {
                skill_matrix: [ {skill: "Understand the concept of cloud computing", expected: 4, estimated: 4},
                                {skill: "Use a IaaS-type cloud service", expected: 4, estimated: 4},
                                {skill: "Deploy and adapt a cloud-based platform for IoT", expected: 4, estimated: 3},
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