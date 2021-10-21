<template>
  <div class="landing1">
    <div class = title>
    <h1>Adoptez un animal de compagnie proche de chez vous maintenant !</h1>
    </div>
    <div class="bottom">
      <h2>
        <p>- Trouvez des animeaux proches de chez vous !</p>
        <p>- Créez des annonces pour vos animeaux !</p>
      </h2>
      <div class="buttons">
        <button> Voir des annonces </button>
        <button> Créer des annonces </button>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div{
  background-color: #FAE5DC;
  width: 80%;
  margin: auto;
  margin-top: 80px;
  padding: 30px;
}

.landing1{
  display: flex;
  flex-direction: column;
}

.bottom {
  background-color: #F7C9D1;
}

.buttons {
  display: flex;
  justify-content: space-around;
  background-color: #F7C9D1;
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
