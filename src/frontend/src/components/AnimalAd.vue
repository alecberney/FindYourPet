<template>
  <div class="ad">
    <div class="image">
      <img src="images/kitty.jpg" alt="image">
    </div>
    <div class="name">
      <h1>{{animal.name}}</h1>
      <h2>{{animal.type}}</h2>
    </div>
    <div class = "description">
      <h2>
        Titre inspiré
      </h2>
      <p>
        Lorem ipsum blablalbla latin blabla  
        Lorem ipsum blablalbla latin blabla  Lorem ipsum blablalbla latin blabla  Lorem ipsum blablalbla latin blabla  Lorem ipsum blablalbla latin blabla  Lorem ipsum blablalbla latin blabla 
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalAd",
  props: {
    animal: {}
  }
}
</script>

<style scoped>

.ad{
  width: 90%;
  height: 160px;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  border: solid;
  border-color: var(--sub-color);
  padding: 10px;
  margin: 30px;
  transition: all .3s;
}

.ad:hover {
 background-color: var(--select-color);
 }


.ad div {
  margin-right: 20px;
  margin-left: 20px;
}

img{
  width: 160px;
  height: 160px;
  align-self: center;
}

.name{
  flex: 1;
  width: 100px;
  text-align: left;
  padding-left: 20px;
  border: solid;
  border-color: var(--sub-color);
  
}

.description{
  padding-left: 20px;
  border: solid;
  border-color: var(--sub-color);
  flex: 2;
}

</style>
