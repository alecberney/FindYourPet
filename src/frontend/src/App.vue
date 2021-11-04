<template>
  <Header title="find your pet"/>
  <Landing1/>
  <Landing2/>
  <AnimalAdsList/>
  <DevTeam/>
  <Footer/>

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Landing1 from './components/Landing_1.vue'
import Landing2 from './components/Landing_2.vue'
import AnimalAdsList from './components/AnimalAdsList'
import DevTeam from './components/Dev_team.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Landing1,
    Landing2,
    AnimalAdsList,
    DevTeam
  }
}
</script>

<style>

* {box-shadow: border-box;}

h1,
h2,
h3,
h4,
h5,
h6,
p{
  font-family: Tahoma, sans-serif ;
}

:root{

  /*
  --main-color: #F7C9D1;
  --bg-color: #FCF1EE;
  --select-color: #FAE5DC;
  --secondary-color: #DCA893;
  --sub-color: #7A3A23;
  */
  
  --main-color: #fadcf1b4;
  --bg-color: #ffffff;
  --select-color: #ffdfb6;
  --secondary-color: #ffcf99;
  --sub-color: #ff80aa77;
  --header-color: #4e598c;
  
  /*
  --main-color: #595758;
  --bg-color: #FFFFFF;
  --select-color: #FFE4F3;
  --secondary-color: #FFC8FB;
  --sub-color: #FF92C2;
  */
  /*
  --main-color: #A66641;
  --bg-color: #FFFFFF;
  --select-color: #F2AF88;
  --secondary-color: #F29188;
  --sub-color: #F2B4AE;
  */

}

body {
  width: 100%;
  margin: 0;
  background: url("./assets/images/test.jpg");
  background-color: var(--bg-color);
  background-size: 100%;
  background-repeat:repeat-x;
  background-attachment:fixed;
  background-position: left top;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 80px;
  width: 100%;
  height: 100%;
}
</style>
