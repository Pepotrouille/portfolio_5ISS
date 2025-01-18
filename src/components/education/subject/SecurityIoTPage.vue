<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    

    
    <TitleSubject title="SECURITY FOR IoT NETWORKS" teacher="Eric Alata" color="secondary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        The Internet of Things is a domain in which a lot of communications occur between numerous devices.
        While some of the information might seem trivial (like temperature or humidity), other can have important or confidential information (home cameras or medical sensors)
        Security is important to guarantee availability, confidentiality and integrity of the exchanged data.
        In this course, we learned about potential threats that can target connected objects or systems in general.
        By knowing these dangers, we also learned some way to prevent them by putting thought into the conception of our system.
        <br><br>
        We saw four different parts in this course:
    </p>
    <ul class="text-justify ml-10">
        <li><b>Protocols</b>: this first part describe threats that might target communication protocols.</li>
        <li><b>Micro-Architecture</b>: this second part focus more on the hardware danger and the need to think about that aspect during the conception of our system. </li>
        <li><b>Cryptography</b>: this third part presents how to encrypt and decrypt messages, what cyphers are used and how secure they are. </li>
        <li><b>Quantic</b>: this final part explains in a post quantic worlds how resistant the cyphers and protection previously seen are, and how we can foresee the threats.</li>
    </ul>

    <!---->
    <h3>Realization</h3>
    <p class="text-justify my-5">
        For this class, we had a few labs to see how an attack could occur and how farsighted we should be when conceiving systems.
        <br><br>
        The first labs was about protocols. In this two labs, we had a few situations such as sql injections, buffer overflows or binary uploads.
        These exercises wee presented to us as task to accomplish on a web page, similar to a capture the flag.
        It allowed us to see the risk straigt to the point.
        <br><br>
        The second lab was about cryptography. 
        In this course, we saw multiple application cases with the use of certificates, an introduction to side channel attacks and what is OpenSSL.
        We could also see some concrete examples of attack. 
        For instance, we saw the case of a man in the middle attack using certificates for an RSA encryption.
        We saw the multiple cases where an interceptor could get the message and impersonate someone in a communication.
        
        <!--To complete-->
    </p>
    <ImageSubject   imagePath="./images/Security_MITM_Certificates.png" 
                    description="Results of a Man In The Middle through an RSA based communication using Certificates." 
                    color="secondary"
                    width_percent="100"/>
    
    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        Security is not my strong subject. 
        However, I think these course gave me more insight about potential threats, complementing the lessons from the previous years.
        Event thought I will not work in a security-oriented field, web and software development might both require to be aware of threats.
        For instance, the use of database or account management requires to be fully aware of risks and precautions to take.
        <br>
    </p>

    <SkillMatrix :skillMatrix="skillMatrixSec" title="Security for IoT"/>
    <SkillMatrix :skillMatrix="skillMatrixSecNetworks" title="Security for IoT Networks"/>



En construction

</template>

<script lang="ts">


    export default {
        data() {
            return {
                skillMatrixSecNetworks: [ {skill: "Understand the fundamentals of security", expected: 4, estimated: 4},
                                          {skill: "Be able to identify security weaknesses in an IoT architecture", expected: 3, estimated: 3},
                                          {skill: "Be able to assess the impact of exploiting a security vulnerability in an IoT architecture", expected: 4, estimated: 3},
                                          {skill: "Be able to propose adequate security counter-measures", expected: 3, estimated: 3},
                                        ],
                skillMatrixSec: [ {skill: "Knowing the main issues in security for IoT", expected: 3, estimated: 3},
                                  {skill: "Understand the terminology of security", expected: 3, estimated: 3},
                                  {skill: "Being able to have a critical look at the design of a system from a security point of view", expected: 3, estimated: 3},
                                  {skill: "Being able to understand a scientific article that explains a weakness or a security solution and to explain it", expected: 3, estimated: 3},
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