<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to the world"/> -->
  <Calculator />
  <p>{{myname}}, {{doubleAge}} </p>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'; */
import Calculator from './components/Calculator.vue';


export default {
  name: 'App',
  mounted(){
    this.m1();
  },
  data(){
    return{
      myname:'Matz',
      age: 19
    }
  },
  computed:{
    doubleAge(){
      return this.age *2;
    }
  },
  components: {
    /* HelloWorld, */
    Calculator
  },
  methods: {
    m1(){this.m2()},
    m2(){ console.log('Ich bin m2');}
  }
}
</script>

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
