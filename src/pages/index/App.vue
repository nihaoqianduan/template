<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <oreo-button>Button</oreo-button> -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
@import url("../../assets/less/base.less");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0;
  width: 100%;
  height: 100%;
}
</style>
