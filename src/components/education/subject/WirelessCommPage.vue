<template>
    <BackButton @change-content="ChangeContent" color="primary" class="mb-4"/>
    
    <TitleSubject title="An insight into Internet based technologies and protocols for Wirelessly connected things " teacher="Slim Abdellatif" color="primary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        This course's aim was to teach us about the protocols and technologies that can be used for the networks in the Intenet of Things applications.
        The subject was mainly about the functioning of IPv6 and IPv6 related protocols.
    </p>

    <!---->
    <h3>Realization</h3>
    <p class="text-justify my-5">
        Through a lab, we were able to learn more about the 6LoWPAN protocol, an IPv6 based protocol designed for the Internet of Things.
        We were able to see how the communication worked by listening as the exchanges on a local network using the software Wireshark.
        We could see how 6LoWPAN optimized the energy consumption during communications by the use of light header, for instance through the reduction or suppression of the IPv6 addresses, that can have redundant information.
    </p>

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        As we are specialized in connected objects, it is essential to our formation to know protocols that would be used for IoT.
    </p>

    <PDFReader  path="./documents/reports/Takeaway_IPv6_for_WSN_brunetto.pdf" 
                title="Questions to validate our understanding of IPv6 technologies in WSN" 
                language="English" 
                madeBy="Marie Brunetto"
                color="info"/>

    <TitleSubject title="EMERGING NETWORKS" teacher="Slim Abdellatif" color="primary"/>
    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        This course's objectives was to learn more about the softwarization of the networks, known as SDN (Software Defined Networks).
        The aim of this technology is to separate the physical equipment form the management. 
        Through a centralized the management of the network into a cloud or edge sever, interfaces and functionalities can be implemented.
        The Network Function Virtualizer, or NFV, represents functions such as Routing, NAT or Firewall that are implemented on virtualized environment, virtual machines. 
        It goes along with SDN, but for upper layers (transport, application…). 
        It allows more flexibility when it comes to adding, managing or removing functionalities.
    </p>

    <!---->
    <h3>Realisation</h3>
    <p class="text-justify my-5">
        To apply our new knowledge, we had the opportunity to participate at two lab sessions.
        These session consisted in the creation of a network using a switch SDN to take over the management.
        Using Openflow, we had to implement rules to ensure the connectivity between two end points.
        This connectivity first needed to pass ICMP (ping), and then SSH and COaP.
        Finally, the second lab taught us a way to create the rules through a script, an NFV, to define the routing.
    </p>

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        This course was a very interesting addition in regard to my previous formation in communicating systems.
        It talked about a subject that I did not know about, and I think, as it can be used in some cases, it is important to have the knowledge about SDN as a part of our formation.
    </p>

    <PDFReader  path="./documents/reports/Takeaway_SDN_Brunetto.pdf" 
                title="Questions to validate our understanding of SDN" 
                language="English" 
                madeBy="Marie Brunetto"
                color="info"/>

</template>

<script lang="ts">


    export default {
        data() {
            return {
                skillMatrixLPWAN: [ {skill: "Unknown", expected: 0, estimated: 0},
                                  ],
                skillMatrixEmerging: [  {skill: "Unknown", expected: 0, estimated: 0},
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