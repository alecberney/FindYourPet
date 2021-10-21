<template>
  <div class="footer">
      <div class="left">
      </div>
      <div class="middle">
      </div>
        <div class="right">
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

.footer {
    height: 100px;
    width: 100%;
    bottom: 0;
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
    width: 80x;
    height: 80px;
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
