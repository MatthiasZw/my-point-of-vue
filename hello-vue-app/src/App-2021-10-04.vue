<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <br>
  Willkommen, {{`${name} ${middlename}`}},
  <hr>Aus Computed: {{doubleAge}}
  
  <hr> Aus Methodenaufruf: {{ageDouble()}}
 
</template>
<script>

export default {
  name: 'App',
  data: function(){
    return {
      name: "Matze",
      middlename: "Jay.",
      alter: 42, 
    }
  }, 
  computed:{
    doubleAge(){ return this.alter*2}
  },
  methods:{
    ageDouble(){ return this.alter*2}
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