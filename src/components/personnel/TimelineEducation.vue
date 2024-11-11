<template>
    <v-timeline side="end" >
        <v-timeline-item
        v-for="item in items"
        :key="item.id"
        :dot-color="item.color"
        size="small"
        >
        <v-alert v-if="item.title" color="surface-darken-1" :value="true">
            <strong style="font-size: xx-large;" :class="'text-' + item.color">{{item.text}}</strong>
        </v-alert>

        <v-alert v-else :color="item.color" :value="true">
            <a v-if="item.date"><strong>{{item.date}}</strong> -</a>
            {{item.text}}
        </v-alert>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          id: 1,
          color: 'error',
          text: 'INSA Toulouse',
          title: 'YES'
        },
        {
          id: 2,
          color: 'error',
          date: '2024-2025',
          text: "Transverse Multidisciplinary Project known as Innovation and Smart Systems (ISS) - Depening of my knowledge, especially on the field of the Internet of Things (IoT). Apprenticeship in the company Thales Alenia Space",
          textFR: 'Majeur en Innovation and Smart Systems (ISS) - Approfondissement des connaissances, particulièrement sur le plan de l\'Internet of Things (IoT) Alternance avec l\'entreprise Thales Alenia Space',
        },
        {
          id: 3,
          color: 'error',
          date: '2022-2024',
          text: 'Specialisation in Computer and Network Engineering, with the minor Communication Systems - Learning of software development and advanced algorithmic concepts, as well as networks architecture set up and maintenance.',
          textFR: 'Spécialisation Informatique et Réseaux, option Systèmes Communicants - Apprentissage du développement logiciel et des concepts d\'algorithmie avancée, ainsi de la mise en place et de la maintenance d\'architectures réseaux',
        },
        {
          id: 4,
          color: 'error',
          date: '2020-2022',
          text: 'Integrated generalist preparatory classes.',
          textFR: 'Classes préparatoire généraliste intégrée.',
        },
        {
          id: 5,
          color: 'info',
          text: 'Lycée Polyvalent Costebelle',
          title: 'YES'
        },
        {
          id: 6,
          color: 'info',
          date: '2017-2020',
          text: 'Scientific Baccalauréat Option Engineering Science and Italien Européen. Mention : Très bien',
          textFR: 'Baccalauréat Scientifique Option Science de l\'Ingénieur et Italien Européen. Mention obtenue : Très bien',
        },
      ],
    }),
  }
</script>