<template>
    <div class="left-side">
        <el-menu>
            <router-link to="/student/infomation">
              <el-menu-item class="menu-item" index="2">
              <i style="color:rgb(214, 208, 208)" class="fa-solid fa-desktop fa-xl"></i>
              <span>Thông tin sinh viên</span>
              </el-menu-item>
            </router-link>
             <router-link to="/student/register">
              <el-menu-item class="menu-item" index="2">
              <i style="color:rgb(214, 208, 208)" class="fa-solid fa-border-all fa-xl"></i>
              <span>Đăng kí học</span>
              </el-menu-item>
            </router-link>

            <router-link to="/student/result-register">
              <el-menu-item class="menu-item" index="2">
              <i style="color:rgb(214, 208, 208)" class="fa-solid fa-magnifying-glass fa-xl"></i>
              <span>Kết quả đăng kí học</span>
              </el-menu-item>
            </router-link>

            <router-link to="/student/ideal">
              <el-menu-item class="menu-item" index="2">
              <i style="color:rgb(214, 208, 208)" class="fa-solid fa-file-signature fa-xl"></i>
              <span>Đóng góp ý kiến</span>
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