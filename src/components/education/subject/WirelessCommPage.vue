<template>
    <BackButton @change-content="ChangeContent" color="primary" class="mb-4"/>
    
    <TitleSubject title="LP-WPAN" teacher="Slim Abdellatif" color="primary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">

        
        <br>
    </p>

    <!---->
    <h3>Realization</h3>
    <p class="text-justify my-5">
        <br>
    </p>

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        <br>
    </p>

    En construction

    <SkillMatrix :skillMatrix="skillMatrixLPWAN"/>

    <TitleSubject title="EMERGING NETWORKS" teacher="Slim Abdellatif" color="primary"/>
    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        Notes :
        IPv6 != IPv4 : séparer localisation et identification de communication
        =>routeur LISP : Localisation Identification Separation Protocol
        =>Permet de changer de mode de communciation sans la casser

        Virtualisation de réseaux:
        Logique cloud : ajuster capacité selon les besoins + fonctionnalités réseaux classiques:
        NAT, Firewall etc.

        SDN Software Defined Network:
            =>Simplifier la gestion de réseaux
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

    <SkillMatrix :skillMatrix="skillMatrixEmerging"/>


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