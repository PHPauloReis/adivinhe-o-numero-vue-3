import { defineStore } from "pinia";

export const useGameStore = defineStore('counter', {
  state: () => ({
    remainingMoves: 5,
    drawnNumber: 8,
    gameStatus: 'playing'
  }),
  getters: {
    getDrawnNumber(state) {
      return state.drawnNumber
    },
    getRemainingMoves(state) {
      return state.remainingMoves
    },
    getGameStatus(state) {
      return state.gameStatus
    }
  },
  actions: {
    setDrawnNumber(drawnNumber) {
      this.drawnNumber = drawnNumber
    },
    decrementMoves() {
      if (this.remainingMoves > 0)
        this.remainingMoves--
    },
    resetGame() {
      this.remainingMoves = 5
      this.drawnNumber = Math.floor(Math.random() * 25) + 1
      this.gameStatus = 'playing'
    },
    endGame() {
      this.gameStatus = 'ended'
    },
    winGame() {
      this.gameStatus = 'won'
    }
  },
})
