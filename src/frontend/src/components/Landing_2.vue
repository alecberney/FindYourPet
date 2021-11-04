<template>
  <div class="landing2">
    <div>
      <h2>Pour annoncer un animal :</h2>
      <ul style="list-style-type:number">
        <li>
          Crée un compte
        </li>
        <li>
          Crée une annonce
        </li>
        <li>
          Attends qu'on autre utilisateur te contacte
        </li>
      </ul>
    </div>

    <div>
      <h2>Pour adopter un animal :</h2>
      <ul style="list-style-type:number">
        <li>
          Consulte les annonces
        </li>
        <li>
          Selectionne une annonce qui te plaît
        </li>
        <li>
          Contacte le propriétaire actuel
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  

.landing2{
  background-color: var(--main-color);
  width: 90%;
  margin: auto;
  margin-top: 40px;
  padding: 20px;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  border-top: solid;
  border-left: solid;
  border-RIGHT: solid;
  border-color: var(--sub-color);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.landing2 div {
  border-radius: 100px;
  margin: auto;
  width: 25%;
  padding: 30px;
  background-color: var(--secondary-color);
  border: solid;
  border-color:var(--sub-color);
  text-align: left;
  
}
</style>
