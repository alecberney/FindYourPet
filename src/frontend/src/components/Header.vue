<template>
  <div class="header">
      <div class="logo">
        <a href="/index.html">
            <img src="@/assets/images/findyourpet_logo.png" alt="logo" >
        </a>
      </div>
      <div class="title">
       <button> Home </button>
       <button> Annonces </button>
      </div>
      <div class="menu">
          <img src="@/assets/images/hamburger_menu.png" alt="menu">
      </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
    height: 80px;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    display: flex;
    justify-content: space-between;
    background-color: var(--header-color);
    border-bottom: solid;
    border-color: var(--sub-color);
}

.logo {
    border-right:solid;
    border-right-color: var(--sub-color);
    align-content: flex-start;
}

.logo img {
    width: 80px;
    height: 80px;
}

.title {
  display:flex;
  width: 100%;
}

.title button {
  height: 100%;
  padding: 20px;
  font-size: 24px;
  color: white;
  border: none;
  background-color: var(--header-color);

  transition: all .3s;
}

.title button:hover {
  background-color: var(--header-selection-color);
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
