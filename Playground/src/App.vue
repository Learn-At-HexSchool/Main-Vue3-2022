<script>
import HelloWorldVue from "/src/components/HelloWorld.vue";

export default {
  name: "App",

  components: {
    HelloWorld: HelloWorldVue,
  },
};
</script>

<!--
    <script setup>
      // This starter template is using Vue 3 <script setup> SFCs
      // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
      import HelloWorld from "/src/components/HelloWorld.vue";
    </script>
  -->



<template>
  <section>
    <img alt="Vue logo" src="/src/assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </section>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
