<template>
  <learning-survey></learning-survey>
  <user-experiences></user-experiences>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences
  },
  //savedSurveyResults is not needed because
  //data will be managed by firebase
  data() {
    return {
      //savedSurveyResults: []
    };
  },
  methods: {
    // storeSurvey(surveyData) {
    //   const surveyResult = {
    //     name: surveyData.userName,
    //     rating: surveyData.rating,
    //     id: new Date().toISOString()
    //   };
    //   this.savedSurveyResults.push(surveyResult);
    //   console.log(surveyResult);
    // }
  },
  provide: {
    firebaseEndpoint:
      'https://udemy-vue-survey-default-rtdb.firebaseio.com/surveys.json'
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
