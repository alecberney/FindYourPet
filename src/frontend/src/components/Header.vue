<template>
  <div class="header">
      <div class="logo">
        <a @click="$router.push('/')">
            <img src="@/assets/images/findyourpet_logo.png" alt="logo" >
        </a>
      </div>
      <div class="nav">
       <button @click="$router.push('/')"> Home </button>
       <button @click="$router.push('/annonces')"> Annonces </button>
      </div>
      <div class="account">
          
       <button @click="$router.push('/login  ')"> Login </button>
       <button @click="$router.push('/register  ')"> Register </button>
      </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button{
  height: 100%;
  padding: 20px;
  font-size: 24px;
  border: none;
  background-color: var(--header-color);
  transition: all .3s;
  color: white;
}

.account button{
  color: darkgrey;
  font-size: 18px;
}

button:hover {
  background-color: var(--header-selection-color);
}

.header {
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: var(--header-color);
}

.logo {
    border-right:solid;
    border-right-color: var(--header-selection-color);
    align-content: flex-start;
}

.logo img {
    width: 80px;
    height: 80px;
}

.nav {
  display:flex;
  justify-content: right;
  width: 100%;
}

.account {
    width: 20%;
    display: flex;
    justify-content: right;
}

.account img {
    width: 40x;
    height: 40px;
    margin-right: 40px;
    align-self: center;
}

</style>
