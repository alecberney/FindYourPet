<template>
  <div class="main">
    <h1>Annonces récentes :</h1>
    <div class="list">
      <ul>
        <li v-for="animal in this.animals.slice(0,3)" :key="animal.id" style="list-style-type:none">
          <AnimalAd :animal="animal"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

import AnimalAd from "./AnimalAd";

export default {
  name: "AnimalAdsList",
  components: {AnimalAd},
  beforeMount() {
    axios.get('http://localhost:3000/animals').then(result => {
      this.animals = result.data;
      console.log(result.data);
    });

  },
  data: function () {
    return {
      animals: []
    }
  },
}
</script>

<style scoped>

.main {
  background-color: var(--main-color);
  width: 90%;
  padding: 20px;
  height: 800px;
  margin: auto;
  margin-bottom: 40px;
  border-bottom: solid;
  border-left: solid;
  border-right: solid;
  border-color: var(--sub-color);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  
}

.list {
  height: 85%;
  overflow: auto;

}


</style>
