<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="load">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  inject: ['firebaseEndpoint'],
  data() {
    return {
      results: []
    };
  },
  methods: {
    async load() {
      console.log('loading data...');
      try {
        const response = await fetch(this.firebaseEndpoint);
        if (response.ok) {
          const jsonResult = await response.json();
          console.log('loading done', jsonResult);
          this.results.splice(0);
          for (const id in jsonResult) {
            this.results.push({
              id: id,
              name: jsonResult[id].name,
              rating: jsonResult[id].rating
            });
          }
        } else {
          console.log('response not ok', response.status);
        }
      } catch (error) {
        console.log('caught error', error.data);
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
