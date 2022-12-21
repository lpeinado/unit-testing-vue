/* eslint-disable */

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <AppHeader msg="Welcome to Your Vue.js App" />
  <LoginForm @formSubmitted="doSomething"/>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    LoginForm,
  },
  setup(){
    const doSomething = function({name}){
      console.log("Doing something with:" + name )
    }
    return { doSomething }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
