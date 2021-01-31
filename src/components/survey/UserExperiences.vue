<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="load">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="errorExists">An error occured: {{ errorText }}</p>
      <ul v-else-if="dataExists">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else>
        No stored experiences found. Start adding some survey results first.
      </p>
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
      dataExists: false,
      errorExists: false,
      errorText: null
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      this.dataExists = false;
      this.errorExists = false;
      this.errorText = null;
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
          this.errorExists = true;
          this.errorText = response.status;
          console.log('response not ok', response.status);
        }
      } catch (error) {
        this.errorExists = true;
        this.errorText = error + '';
        console.log('caught error', error);
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
