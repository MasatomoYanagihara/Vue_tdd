<template>
  <div id="app">
    <MyClient :windowLocationHref="locationHrefStr" />
  </div>
</template>

<script>
import MyClient from "./components/MyClient";

export default {
  name: "App",
  data() {
    // URL情報を欲しいかつDI(=Dependency Injection)するために、ここで注入する。
    return {
      locationHrefStr: window.location.href,
    };
  },
  components: {
    MyClient,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
