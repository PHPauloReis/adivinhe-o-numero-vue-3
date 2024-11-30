<template>
  <div @click="select" class="card-number" :class="{ 'selected': selected, 'win': win }">
    <div class="number">{{ label }}</div>
  </div>
</template>

<style scoped>

.card-number {
  width: 89px;
  height: 89px;
  border-radius: 10px;
  background-color: #87BF41;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 37px;
  font-weight: bold;
  color: #FFF;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 4 4px rgba(0, 0, 0, 0.2);
}

.card-number:hover {
  background-color: #6E9640;
  transition: background-color 0.3s;
}

.selected {
  background-color: #649031;
  color: #517A22;
  box-shadow: none;
}

.win {
  background-color: #0D99FF;
}

</style>

<script>

import { useGameStore } from '@/stores/game'

export default {
  props: {
    label: {
      type: Number,
      required: true
    }
  },
  created() {
    this.store = useGameStore()
  },
  data() {
    return {
      state: null,
      win: false,
      selected: false
    }
  },
  methods: {
    select() {
      if (this.store.ended) return

      if (this.store.getDrawnNumber == this.label) {
        this.win = true
      } else {
        this.selected = true
        this.store.decrementMoves()
      }

      if (this.store.getRemainingMoves == 0) {
        this.store.endGame()
        this.$emit('endGame', this.label)
      } else {
        this.$emit('select', this.label)
      }
    }
  }
}

</script>
