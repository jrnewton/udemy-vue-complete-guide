<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  created() {
    this.populateTeamData(this.teamId);
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    next();
  },
  methods: {
    populateTeamData(teamId) {
      const selectedTeam = this.teams.find(team => {
        return team.id === teamId;
      });
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }

      const sort = this.$route.query.sort;
      this.members = selectedMembers.sort((left, right) => {
        let diff = 0;
        if (left.fullName < right.fullName) {
          diff = -1;
        } else if (left.fullName > right.fullName) {
          diff = 1;
        } else {
          diff = 0;
        }

        if (sort === 'dsc') {
          diff = -1 * diff;
        }

        return diff;
      });

      this.teamName = selectedTeam.name;
    }
  },
  watch: {
    teamId(newId) {
      //console.log('teamId updated', newId);
      this.populateTeamData(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
