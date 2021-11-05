<template>
  <div>
    <Landing1/>
    <Landing2/>
    <AnimalAdsList/>
    <DevTeam/>
  </div>
</template>

<script>
import Landing1 from './Landing_1.vue'
import Landing2 from './Landing_2.vue'
import AnimalAdsList from './AnimalAdsList.vue'
import DevTeam from './Dev_team.vue'

export default {
  name: 'App',
  components: {
    Landing1,
    Landing2,
    AnimalAdsList,
    DevTeam
  }
}
</script>