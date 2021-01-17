<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <!-- value of our slot name attribute is a variable name 
          that will hold all slot bindings -->
    <course-goals #default="props">
      <h2>{{ props.index }} @ {{ props.item }}</h2>
      <h4>{{ props.randomText }}</h4>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  //these components are local to this vue object
  components: {
    //syntax options
    //1) 'the-header': TheHeader
    //or
    //2) TheHeader: TheHeader
    //3) TheHeader
    //
    //#1 defines html element <the-header> which requires closing tag.
    //#2 defines same html element as #1 and defines html element <TheHeader>.
    //   <TheHeader> is a self closing tag: <TheHeader/>
    //#3 uses modern JS syntax to expand TheHeader -> TheHeader: TheHeader
    'the-header': TheHeader,
    //prettier-ignore
    BadgeList: BadgeList,
    UserInfo,
    CourseGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin'
      }
    };
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
