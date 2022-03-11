<template>
    <div class="left-side">
        <el-menu>
            <router-link to="/teacher/main">
              <el-menu-item class="menu-item" index="2">
              <i style="color:rgb(214, 208, 208)" class="fa-solid fa-desktop fa-xl"></i>
              <span>Xem Chi tiết lớp học</span>
              </el-menu-item>
            </router-link>
        </el-menu>
    </div>
</template>

<script>

export default {

}
</script>

<style>

.left-side{
  padding-top:5%;
  width:15%;
  background:#364150;
}
.menu-item{
    background:#364150;
    border-bottom: 1px solid grey;
}
.menu-item > span{
  margin-left:10px;
  color:rgb(214, 208, 208);
}
</style>