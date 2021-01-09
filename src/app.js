const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0
    };
  },
  computed: {
    //make style bits computed properties to keep HTML +lean+
    monsterBarStyles() {
      return { width: this.monsterHealth + '%' };
    },

    playerBarStyles() {
      return { width: this.playerHealth + '%' };
    },

    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    attackMonster() {
      this.monsterHealth -= getRandomValue(5, 12);
      this.attackPlayer();
      this.currentRound++;
    },

    attackPlayer() {
      this.playerHealth -= getRandomValue(8, 15);
    },

    specialAttackMonster() {
      this.monsterHealth -= getRandomValue(10, 25);
      this.attackPlayer();
      this.currentRound++;
    }
  }
});
app.mount('#game');
