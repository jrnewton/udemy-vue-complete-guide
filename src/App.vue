<template>
  <section>
    <header><h1>My Friends</h1></header>
    <new-friend @new-friend="newFriend"></new-friend>
    <ul>
      <friend-contact
        v-for="friend of friends"
        :key="friend.id"
        v-bind="friend"
        @toggle-favorite="toggleFavorite"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: '' + Math.random(),
          name: 'Manual Lorenz',
          phone: '01234 56544 449',
          email: 'manuel@localhost.com',
          isFavorite: true
        },
        {
          id: '' + Math.random(),
          name: 'Julie Jones',
          phone: '987 452 9999',
          email: 'julie@localhost.com',
          isFavorite: false
        }
      ]
    };
  },
  methods: {
    toggleFavorite(friendId) {
      console.log('toggleFavorite', friendId);
      const f = this.friends.find(f => f.id === friendId);
      f.isFavorite = !f.isFavorite;
    },
    newFriend(name, phone, email) {
      this.friends.push({
        id: '' + Math.random(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      });
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
