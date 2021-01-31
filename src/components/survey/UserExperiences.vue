<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="load">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else-if="dataExists">
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
      results: [],
      isLoading: false,
      dataExists: false
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      try {
        const response = await fetch(this.firebaseEndpoint);
        if (response.ok) {
          this.results.splice(0);
          const jsonResult = await response.json();
          if (jsonResult) {
            for (const id in jsonResult) {
              this.results.push({
                id: id,
                name: jsonResult[id].name,
                rating: jsonResult[id].rating
              });
            }
          }
          this.dataExists = this.results.length > 0;
        } else {
          console.log('response not ok', response.status);
        }
      } catch (error) {
        console.log('caught error', JSON.stringify(error));
      } finally {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.load();
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
