<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="errorExists">
        An error occured.
        {{ errorText }}
      </p>
      <ul v-else-if="dataExists">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :id="result.id"
          :name="result.name"
          :rating="result.rating"
          :deleteEntry="deleteEntry"
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
    async deleteEntry(id) {
      console.log('delete clicked for', id);
      try {
        const kludgedURL = this.firebaseEndpoint.replace(
          '.json',
          `/${id}.json`
        );
        console.log('delete', kludgedURL);
        const response = await fetch(kludgedURL, {
          method: 'DELETE'
        });
        console.log('delete response', response);
      } catch (error) {
        console.log('[deleteEntry] caught error', error);
      }
    },
    async loadData() {
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
          console.log('[load] response not ok', response.status);
          this.errorExists = true;
          this.errorText = response.status;
        }
      } catch (error) {
        console.log('[load] caught error', error);
        this.errorExists = true;
        this.errorText = error + '';
      } finally {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.loadData();
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
