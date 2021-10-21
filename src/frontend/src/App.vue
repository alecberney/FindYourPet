<template>
  <Header title="find your pet"/>
  <Landing-1/>
  <HelloWorld url="images/background_kitten.jpg" alt="image"/>
  <HelloWorld url="images/kitty.jpg" alt="image"/>
  <HelloWorld url="images/doggo.jpg" alt="image"/>
  <HelloWorld url="images/pets.jpg" alt="image"/>
  <Footer/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Landing1 from './components/Landing_1.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer,
    Landing1
  }
}
</script>

<style>
body {
  width: 100%;
  margin: 0;
  background-color: #FCF1EE; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 80px;
  width: 100%;
  height: 100%;
}
</style>
