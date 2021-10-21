<template>
  <div class="header">
      <div class="logo">
        <img src="@/assets/images/findyourpet_logo.png" alt="logo">
      </div>
      <div class="title">
      </div>
      <div class="menu">
          <img src="@/assets/images/hamburger_menu.png" alt="menu">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color: #000;
    size: 36px;
    font-family: Verdana, Geneva, Tahoma, sans-serif
    }

.header {
    height: 90px;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    background-color:  	#4e598c;
}

.logo {
    width: 20%;
    border-right:solid;
    border-right-color: #FCF1EE;
    align-content: flex-start;
}

.logo img {
    width: 100px;
    height: 100px;
}

.title {
    width: 60%;
    justify-content: center;
}

.menu {
    width: 20%;
    display: flex;
    justify-content: right;
}

.menu img {
    width: 40x;
    height: 40px;
    margin-right: 40px;
    align-self: center;
}

</style>
