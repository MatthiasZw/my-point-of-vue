<template>
  Hi, 
  {{name_first}} <br>
  
  {{fullName}}.

  <div class="age">
    {{alter}},
    <span v-if="doubleAge < 18">Du bist noch nicht 18.</span>
    

    <span v-else-if="doubleAge==18">Herzlichen Glückwunsch</span>
      
    <span v-else> Über 18 Jahre alt</span>  
  </div>

  <div v-show="name_first === 'Matze'">Hi, Matze</div>
  
</template>
<script>

export default {
  name: 'App',
  data: () => ({
    name_first:"Matze",
    name_last:"Zwack",
    alter: 389,
  }),
  computed:{
    fullName(){
      return this.name_first + '  ' + this.name_last;
    },
    doubleAge(){return this.alter*2}
  }
  
}
</script>
<style>
.age{
  border: 1px solid #ff0000;
  margin: 5px;
  padding: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>