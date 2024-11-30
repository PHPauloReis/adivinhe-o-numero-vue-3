<template>
  <div class="button-container">
    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4_224)">
      <path d="M24.0169 2.98048V9.95313C24.0169 10.8097 23.324 11.5026 22.4674 11.5026H15.4948C14.6382 11.5026 13.9453 10.8097 13.9453 9.95313C13.9453 9.09656 14.6382 8.40366 15.4948 8.40366H18.5642C17.113 6.48133 14.8237 5.31535 12.3857 5.31535C8.12023 5.31535 4.64843 8.78618 4.64843 13.0521C4.64843 17.318 8.11974 20.7898 12.3861 20.7898C14.0751 20.7898 15.6802 20.2557 17.0288 19.2432C17.7173 18.7334 18.6857 18.868 19.1985 19.5519C19.7113 20.2376 19.5738 21.2089 18.8898 21.7217C17 23.1394 14.7566 23.8938 12.3917 23.8938C6.4158 23.8936 1.54947 19.0273 1.54947 13.0521C1.54947 7.07691 6.4158 2.21058 12.391 2.21058C15.7393 2.21058 18.8794 3.78282 20.918 6.38062V2.98048C20.918 2.12391 21.6109 1.431 22.4674 1.431C23.324 1.431 24.0169 2.12391 24.0169 2.98048Z" fill="#87BF41"/>
      </g>
      <defs>
      <clipPath id="clip0_4_224">
      <rect width="24.7917" height="24.7917" fill="white" transform="translate(0 0.65625)"/>
      </clipPath>
      </defs>
    </svg>
    <div class="text">
      Reiniciar
    </div>
  </div>
</template>

<style scoped>

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 369px;
  padding: 15px 0;
  background-color: #DDE8D2;
  border: 2px solid #87BF41;
  border-radius: 10px;
  color: #87BF41;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 15px;
}

.button-container:hover {
  background-color: #CDE0BA;
  transition: background-color 0.3s;
}

.text {
  font-size: 23px;
  font-weight: bold;
  margin-left: 10px;
}

</style>

<script>

export default {
  data() {
    return {

    }
  }
}

</script>
