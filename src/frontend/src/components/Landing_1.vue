<template>
  <div class="landing1">
    <div class = title>
    <h1>Adoptez un animal de compagnie proche de chez vous maintenant !</h1>
    </div>
    <div class="bottom">
      <h2>
        <p>- Trouvez des animaux proches de chez vous !</p>
        <p>- Créez des annonces pour vos animaux !</p>
      </h2>
    </div>
    <div class="buttons">
        <button> Voir des annonces </button>
        <button> Créer des annonces </button>
    </div>
  </div>
</template>

<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1,
h2,
but {
  font-family: cursive;
}

.landing1{
  background-color: #FAE5DC;
  width: 80%;
  margin: auto;
  margin-top: 80px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.landing1 div {
   margin: auto;
  width: 80%;
}

.bottom {
  padding: 20px;
  background-color: #F7C9D1;
}

.buttons {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.buttons button {
   display: inline-block;
  padding: .75rem 1.25rem;
  border-radius: 10rem;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: #F29188;
  border-color:#F29166
  
}
</style>
