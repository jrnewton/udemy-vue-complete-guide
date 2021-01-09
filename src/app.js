const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logs: []
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
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLog('monster', 'attack', attackValue);
    },

    completeRound() {
      this.attackPlayer();
      this.currentRound++;
    },

    attackMonster(event, min = 5, max = 12) {
      const attackValue = getRandomValue(min, max);
      this.monsterHealth -= attackValue;
      this.addLog('player', 'attack', attackValue);
      this.completeRound();
    },

    specialAttackMonster(event) {
      this.attackMonster(10, 25);
    },

    healPlayer(event) {
      const healValue = getRandomValue(8, 20);
      this.playerHealth += healValue;
      this.addLog('player', 'heal', healValue);

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
      this.logs = [];
    },

    surrender() {
      this.winner = 'monster';
    },

    addLog(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
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
