<template>
    <BackButton @change-content="ChangeContent" color="secondary" class="mb-4"/>
    
    <TitleSubject title="EMBEDDED AI" teacher="Philippe Leleux" color="secondary"/>

    <!---->
    <h3>Description of the subject</h3>
    <p class="text-justify my-5">
        Artificial Intelligence is a trending subject, because of its powerful capacities in a large range of use cases.
        In the Internet of Things domain, devices will often have a limited computing power.
        However, it would be more than useful when it comes to analyzing reoccurring behaviors for instance.
        In these courses, we saw what is defined as Artificial Intelligence
        We also explored what aspects can be changed to reduce models and allow use to embed them on light systems.
        <br>
    </p>

    <!---->
    <h3>Realization</h3>
    <p class="text-justify my-5">
        Multiple labs followed the courses, we were able to put into practice the concepts we saw during the lessons.
        In the form of a Jupyter Notebook, we were able to use multiple tools as Python libraries to achieve multiple tasks:
    </p>
    <ul class="text-justify ml-10">
        <li>In the first lab, we were given a dataset of 9 sensor measuring human activity during multiple action such as lying down, running or sitting. 
            Using Scikit-learn, we had to train a model to predict the action with given sensor measurement.</li>
        <li>With Tensor-Flow Light, we were give two datasets: forms to be identified as ellipse, triangle and rectangle, as well as a dataset for fall recognition.
            We were able to see the process of training a Convolutional Neural Network. 
            We could then them through a Confusion Matrix and indicator like loss or accuracy. Finally, we had to be critical about our system and the results we got.</li>
    </ul>

    <!---->
    <h3>Analysis</h3>
    <p class="text-justify my-5">
        This course was an interesting addition to our formation, because of the powerful analyzing capacities of well trained AI models.
        Knowledge about how to make a model can be reused in every domain, and it remains a good course to have had.
    </p>

    <SkillMatrix :skillMatrix="skillMatrixEmbAI"/>
    



  En construction

<!---->

</template>

<script lang="ts">

    export default {
        data() {
            return {
                skillMatrixEmbAI: [ {skill: "Understand the characteristics of supervised and unsupervised learning problems.", expected: 4, estimated: 0},
                                    {skill: "Understand the main basic methods and algorithms to deal with these problems.", expected: 4, estimated: 0},
                                    {skill: "Understand the specificities of AI at the edge.", expected: 4, estimated: 0},
                                    {skill: "Understand The main optimization methods enabling the embedding of AI algorithms.", expected: 4, estimated: 0},
                                    {skill: "Be able to use these methods through Python libraries to solve practical problems with IoT data.", expected: 4, estimated: 0},
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