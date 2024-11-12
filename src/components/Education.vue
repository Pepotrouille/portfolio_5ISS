<template>
    <v-container class="mb-16" v-if="currentContent == null">
        <v-row class="mb-4">
            <v-col>
                <v-sheet color="surface-darken-1" class="text-h1 font-weight-bold mb-4 text-primary text-center">Education 5ISS</v-sheet>
            </v-col>
        </v-row>
        <v-row class="mb-4">
            <v-col>
                <v-sheet color="surface-darken-1" class="text-center">
                    In this page, you will find a summary of every subject of my last year of study of my computer science engineering studies, by subject. You will be able to find reports and presentation slides that have been used as well.
                </v-sheet>
            </v-col>
        </v-row>
        <v-row class="mb-4">
            <v-col>
                <v-sheet color="secondary" class="text-h3 font-weight-bold text-center pa-5">
                    Domain - Communication Systems for IoT
                </v-sheet>
            </v-col>
        </v-row>
        <v-row class="mx-8 d-flex justify-center">
            <v-btn v-for="item in scIoTItems" :key="item.id" class="ma-2 pa-2 bg-secondary" width="60%" @click="ChangeContent(item.path)">{{item.name}}</v-btn>
        </v-row>
        <v-row class="mt-16">
            <v-col>
                <v-sheet color="primary" class="text-h3 font-weight-bold text-center pa-5">
                    Domain - Computer Systems for IoT
                </v-sheet>
            </v-col>
        </v-row>
        <v-row class="mx-8 d-flex justify-center">
            <v-btn v-for="item in siIoTItems" :key="item.id" class="ma-2 pa-2 bg-primary" width="60%" @click="ChangeContent(item.path)">{{item.name}}</v-btn>
        </v-row>
        <v-row class="mt-16">
            <v-col>
                <v-sheet color="info" class="text-h3 font-weight-bold text-center pa-5">
                    Cross-disciplinary subjects
                </v-sheet>
            </v-col>
        </v-row>
        <v-row class="mx-8 d-flex justify-center">
            <v-btn v-for="item in transversalItems" :key="item.id" class="ma-2 pa-2 bg-info" width="60%" @click="ChangeContent(item.path)">{{item.name}}</v-btn>
        </v-row>
    </v-container>
    <v-container v-else>
        <component :is="currentContent" @change-content="ChangeContent"/>
    </v-container>
</template>

<script lang="ts">
    import WSNPage from './education/subject/WSNPage.vue';
    import SmartDevicesPage from './education/subject/SmartDevicesPage.vue';
    import EmbeddedAIPage from './education/subject/EmbeddedAIPage.vue';
    import SecurityIoTPage from './education/subject/SecurityIoTPage.vue';
    import EnergyConnectedObjects from './education/subject/EnergyConnectedObjects.vue';

    import WirelessCommPage from './education/subject/WirelessCommPage.vue';
    import FiveGTechnoPage from './education/subject/FiveGTechnoPage.vue';
    import MiddlewarePage from './education/subject/MiddlewarePage.vue';

    import InnoProjectPage from './education/subject/InnoProjectPage.vue';
    import PortfolioPage from './education/subject/PortfolioPage.vue';

    //Changer en classes pour avoir couleur, titres et listes
    export default {
        data() {
            return {
                currentContent: null,
                scIoTList: ["Smart Devices", "Wireless Sensors Network", "Embedded AI for IoT", "Security for IoT", "Energy for Connected Objects"],
                siIoTList: ["Wireless Communication", "5G Technologies", "Middleware and Services"],
                transversalList: ["Innovative Project", "Portfolio"],
                currentPage: 'Main', // Default template
                scIoTItems: [
                    { id: 1, name: "Wireless Sensors Network", path: WSNPage },
                    { id: 3, name: "Smart Devices", path: SmartDevicesPage },
                    { id: 4, name: "Embedded AI for IoT", path: EmbeddedAIPage },
                    { id: 5, name: "Security for IoT", path: SecurityIoTPage },
                    { id: 6, name: "Energy for Connected Objects", path: EnergyConnectedObjects },
                ],
                siIoTItems: [
                    { id: 7, name: "Wireless Communication", path: WirelessCommPage },
                    { id: 8, name: "5G Technologies", path: FiveGTechnoPage },
                    { id: 9, name: "Middleware and Services", path: MiddlewarePage },
                ],
                transversalItems: [
                    { id: 10, name: "Innovative Project", path: InnoProjectPage },
                    { id: 11, name: "Portfolio", path: PortfolioPage },
                ],
            };
        },
        computed: {
            combinedData() {
            return {
                lists: [
                ...this.scIoTList,
                ...this.siIoTList,
                ...this.transversalList
                ],
                scIoTItems: this.scIoTItems
                };
            },
        },
        methods: {
        ChangeContent(contentTemplate: any) {
                this.currentContent = contentTemplate;
                console.log(this.currentContent)
            },
        },

    };
    
</script>