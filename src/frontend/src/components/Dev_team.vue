<template>
  <div class="devteam">
    <div class = "title">
    <h1>L'équipe Find Your Pet</h1>
    </div>
    <div class="bottom">
      <Dev url = "images/Berney.png" name= "Alec Berney" />
      <Dev url = "images/Ferrari.png" name= "Teo Ferrari" />
      <Dev url = "images/Forestier.png" name= "Quentin Forestier" />
      <Dev url = "images/Herzig.png" name= "Melvyn Herzig" />  
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

.devteam{
  background-color: var(--main-color);
  width: 90%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 20px;
  border: solid;
  border-color: var(--sub-color);
  border-radius: 25px;

}

.bottom {
  margin: auto;
  padding: 20px;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  background-color: var(--secondary-color);
  border: solid;
  border-color: var(--sub-color);
  border-radius: 200px;
}
</style>
