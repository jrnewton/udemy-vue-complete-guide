<template>
  <base-dialog v-if="invalidData" title="Invalid Input">
    <template #default>
      <p>Unfortunatly the following input values are invalid:</p>
      <ul>
        <li v-for="error in errors" :key="error.field">
          <i>{{ error.msg }}</i> for <u>{{ error.field }}</u>
        </li>
      </ul>
    </template>
    <template #actions>
      <base-button @click="okayDialog">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="Title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="Description"
          rows="3"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="url">URL</label>
        <input id="url" name="Link URL" type="url" ref="urlInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
const validateFormData = (title, desc, url) => {
  const errors = [];
  if (title.trim() === '') {
    errors.push({ field: 'title', msg: 'value required' });
  }

  if (desc.trim() === '') {
    errors.push({ field: 'description', msg: 'value required' });
  }

  if (url.trim() === '') {
    errors.push({ field: 'url', msg: 'value required' });
  }

  return errors;
};

export default {
  inject: ['addResource'],
  data() {
    return {
      invalidData: false,
      errors: []
    };
  },
  methods: {
    submitForm() {
      this.invalidData = false;

      const title = this.$refs.titleInput.value;
      const description = this.$refs.descriptionInput.value;
      const url = this.$refs.urlInput.value;

      const errors = validateFormData(title, description, url);
      if (errors.length) {
        this.invalidData = true;
        this.errors = errors;
        return;
      }

      console.log('add resource', title);
      this.addResource(title, description, url);
    },
    okayDialog() {
      this.invalidData = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
