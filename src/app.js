const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null
    };
  },
  computed: {
    //make style bits computed properties to keep HTML +lean+
    monsterBarStyles() {
      let width = this.monsterHealth;
      if (width < 0) {
        width = 0;
      }

      return { width: width + '%' };
    },

    playerBarStyles() {
      let width = this.playerHealth;
      if (width < 0) {
        width = 0;
      }

      return { width: width + '%' };
    },

    specialAttackDisabled() {
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    completeRound() {
      this.playerHealth -= getRandomValue(8, 15);
      this.currentRound++;
    },

    attackMonster(event, min = 5, max = 12) {
      this.monsterHealth -= getRandomValue(min, max);
      this.completeRound();
    },

    specialAttackMonster(event) {
      this.attackMonster(10, 25);
    },

    healPlayer(event) {
      this.playerHealth += getRandomValue(8, 20);
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
      this.completeRound();
    },

    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    }
  },
  watch: {
    //I'm just watching player because playerAttack will always
    //occur at end of each round.
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      } else if (this.monsterHealth <= 0) {
        this.winner = 'player';
      }
    }
  }
});
app.mount('#game');
