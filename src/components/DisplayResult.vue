<template>
  <div class="display-container" :class="{ 'lose': userLose }">
    <div class="text">{{ displayText }}</div>
    <div v-if="remainingMoves > 0" class="remaining-moves">{{ remainingMoves }}</div>
  </div>
</template>

<style scoped>

.display-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  height: auto;
  background-color: #3E7100;
  padding: 7px;
  color: #FFF;
  flex: 0 0 auto;
  border-radius: 8px;
  cursor: default;
  margin-bottom: 15px;
}

.text {
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
}

.remaining-moves {
  background-color: #87BF41;
  font-size: 24px;
  font-weight: 900;
  color: #FFF;
  padding: 10px;
  border-radius: 8px;
}

.lose {
  background-color: #C8C8C8;
  border: 2px solid #7B7B7B;
  color: #7B7B7B;
  font-size: 18px !important;
  text-align: center;
  padding: 20px;
  justify-content: center;
}

.lose .text {
  margin-left: 0;
}

</style>

<script>

import { useGameStore } from '@/stores/game'

export default {
  data() {
    return {
      store: useGameStore(),
      displayText: 'Jogadas restantes:',
    }
  },
  computed: {
    remainingMoves() {
      return this.store.getRemainingMoves.toString().padStart(2, '0')
    },
    userLose() {
      return this.store.getGameStatus == 'ended'
    }
  },
  watch: {
    userLose(newValue) {
      if (newValue) {
        this.displayText = 'Você perdeu!'
      } else {
        this.displayText = 'Jogadas restantes:'
      }
    }
  }
}


</script>
