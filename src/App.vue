<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'Manual',
          name: 'Manual Lorenz',
          phone: '01234 56544 449',
          email: 'manuel@localhost.com'
        },
        {
          id: 'Julie',
          name: 'Julie Jones',
          phone: '01234 56544 449',
          email: 'manuel@localhost.com'
        }
      ]
    };
  }
};
</script>
