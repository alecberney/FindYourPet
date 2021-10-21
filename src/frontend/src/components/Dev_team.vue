<template>
  <div class="devteam">
    <div class = "title">
    <h1>L'équipe Find Your Pet</h1>
    </div>
    <div class="bottom">
      <Dev url = "images/doggo.jpg" name= "Alec Berney" />
      <Dev url = "images/doggo.jpg" name= "Teo Ferrari" />
      <Dev url = "images/doggo.jpg" name= "Quentin Forestier" />
      <Dev url = "images/doggo.jpg" name= "Melvyn Herzig" />  
    </div>
  </div>
</template>

<script>
import Dev from './Dev.vue'

export default {
  name: 'App',
  components: {
    Dev
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1,
h2,
but {
  font-family: cursive;
}

.devteam{
  background-color: #FAE5DC;
  width: 80%;
  margin: auto;
  margin-top: 80px;
  padding: 20px;

}

.bottom {
  margin: auto;
  padding: 20px;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  background-color: #F7C9D1;
}
</style>
