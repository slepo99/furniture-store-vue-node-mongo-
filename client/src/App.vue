<template>
  <div id="app">
    <img
      src="@/assets/images/authPage/background/Login.svg"
      class="background"
      alt=""
    />
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img.background {
  min-height: 100%;
  min-width: 640px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  /* Зависит от размера изображения */
  @media screen and (max-width: 640px) {
    img.bg {
      left: 50%;
      margin-left: -320px;
    }
  }
}
</style>
