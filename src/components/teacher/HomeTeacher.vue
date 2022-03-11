
<template>
  <div>
  <Header />
  <div class="mainContent">
    <Menu />
    <router-view />
  </div>
  </div>
</template>

<script>
import Menu from './MenuTeacher.vue'
import Header from './HeaderTeacher.vue'
export default {
  
  components:{
    Menu,
    Header
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContent{
  width:100vw;
  height:93vh;
  display:flex;
}
</style>
