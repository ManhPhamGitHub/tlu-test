<template>
    <div class="right-side">
        <div class="row-menu">
            <router-link  class="menu-details" :to="{ path: '/student/infomation' }">

                <div class="menu-details_icon">
                        <i class="fa-solid fa-building-columns fa-5x"></i>
                </div>
                <p>Thông tin sinh viên</p>
            </router-link>  
            <router-link  class="menu-details" :to="{ path: '/student/register' }">
                <div class="menu-details_icon">
                        <i class="fa-solid fa-building-columns fa-5x"></i>
                </div>
                <p>Đăng kí học</p>
             </router-link>  

            <router-link  class="menu-details" :to="{ path: '/student/resultRegister' }">
                <div class="menu-details_icon">
                        <i class="fa-solid fa-building-columns fa-5x"></i>
                </div>
                <p>Kết quả đăng kí học</p>
             </router-link>  
                
           <router-link  class="menu-details" :to="{ path: '/student/ideal' }">
                <div class="menu-details_icon">
                        <i class="fa-solid fa-building-columns fa-5x"></i>
                </div>
                <p>Đóng góp ý kiến</p>
             </router-link>  
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.right-side{
  width:85%;
  background: white;

}
.row-menu{
    display:flex;
    justify-content: space-evenly;
    margin-top:40px;
    height: 25%;
}

.menu-details{
    width:22%;
    height:100%;
    background: #037acf;
    border-radius: 6px;
    opacity: 0.9;
    transition: 0.5s;
    }

.menu-details:hover{
    background: #0071C4;
    opacity: 1;
    }
.menu-details_icon{
    margin-top:20px;
    }
.menu-details_icon >i {
   color:#e9e5e5
    }

.menu-details >p {
    padding-top:15px;
    color:#e9e5e5;
    font-size: 18px;
    font-weight: 500;
}
</style>