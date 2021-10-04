<template>

<div id="prog">
  Hi,{{name}}

  <ul>
    <li>Berlin</li>
    <li>Hamburg</li>
    <li>Stuttgart</li>
  </ul>

  <ul>
    <li v-for="city in cities" v-bind:key="city.id">{{city.name}}</li>
  </ul>

<p v-for="n in 10" v-bind:key="n">{{n}}</p>

<h3>{{Math.random()}}</h3>
</div>

  
</template>
<script>

export default {
  name: 'App',
  data:() => ({
    name:"Matze",
    cities:[
      {id:1, name:"Stuttgart"},
      {id:2, name:"Hamburg"},
      {id:3, name:"Berlin"},
      {id:4, name:"Köln"},
    ]
  })
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