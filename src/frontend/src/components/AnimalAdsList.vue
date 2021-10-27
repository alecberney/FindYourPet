<template>
  <div>
    <ul>
      <li v-for="animal in this.animals" :key="animal.id">
        <AnimalAd :animal="animal"/>
      </li>
    </ul>
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

div {
  background-color: #FAE5DC;
  width: 80%;
  height: 600px;
  margin: auto;
  margin-top: 80px;
  overflow: auto;
}
</style>
