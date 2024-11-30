<template>
  <div class="container">
    <h1>Adivinhe o número</h1>
    <h2>Você consegue desconbrir em <strong>qual<br>
      número estou pensando?</strong></h2>

    <DisplayResult />
    <GameBoard />
    <ButtonComponent />

    <p class="footer">Área do Código © 2024 - Paulo Reis - Todos os direitos reservados</p>

  </div>
</template>

<style scoped>

.container {
  display: flex;
  width: 492px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
}

h1 {
  color: #6E9640;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 10px;
}

h2 {
  color: #3E7100;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 10px;
}

h2 strong {
  font-weight: bold;
}

.footer {
  font-size: 13px;
  color: #3E7100;
}

</style>

<script>

import ButtonComponent from './components/ButtonComponent.vue';
import DisplayResult from './components/DisplayResult.vue';
import GameBoard from './components/GameBoard.vue';

export default {
  components: {
    DisplayResult,
    GameBoard,
    ButtonComponent
  },
  methods: {
  }
}

</script>
