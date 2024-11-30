<template>
  <div class="game-board">
    <CardNumber v-for="number of numbers" :key="number" :label="number" />
  </div>
</template>

<style scoped>

.game-board {
  width: 492px;
  height: 492px;
  border-radius: 16px;
  background-color: #3E7100;
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
  margin-bottom: 15px;
}

</style>

<script>

import { useGameStore } from '@/stores/game';
import CardNumber from './CardNumber.vue';

export default {
  components: {
    CardNumber
  },
  created() {
    this.store = useGameStore()
  },
  data() {
    return {
      store: null,
      numbers: Array.from({ length: 25 }, (_, i) => i + 1)
    }
  },
  methods: {
  }
}

</script>
