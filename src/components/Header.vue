<template>
  <div class="header">
      <router-link  class="logo" to="/"> 
        <img style="width:40px ; height:35px;" src="../image/logo-small.png" />
      </router-link>
      <div class="avatar">
        <i style="color:rgb(214, 208, 208);margin-top: -13px;" class="fa-solid fa-circle-user fa-2x"></i>
        <p>Lê Hồng Quang</p>
        <i style="color:rgb(214, 208, 208)" class="fa-solid fa-chevron-down"></i>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
    height:7vh;
    display:flex;
    justify-content: space-between;
    padding: 0 20px;
    background:#2b3643;
        align-items: baseline;
}
.avatar{
  
  display:flex;
}
.avatar >p {
  color :rgb(214, 208, 208);
  margin:0 10px;
}
</style>