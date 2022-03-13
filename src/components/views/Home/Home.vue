<template>
  <div class="container">
    <div id="main" ref="homeContent">
      <div class="content-box">
        <router-link style="text-decoration: none" to="thong-tin-sv">Thông tin sinh viên</router-link>
      </div>
      <div class="content-box">Đăng ký học</div>
      <div class="content-box">Lớp học đã đăng ký</div>
      <div class="content-box">Điểm học tập</div>
      <div class="content-box">Học phí</div>
      <div class="content-box">Đóng góp ý kiến</div>
      <div class="content-box">Đóng góp ý kiến</div>
      <div class="content-box">Đóng góp ý kiến</div>
      <div class="content-box">Đóng góp ý kiến</div>
      <div class="content-box">Đóng góp ý kiến</div>
      <div class="content-box">Đóng góp ý kiến</div>
      <div class="content-box">Đóng góp ý kiến</div>
      <div class="content-box">Đóng góp ý kiến</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  computed: {},
  watch: {},
  mounted() {

  },
  data() {
    return {
      sideBarWidth: null
    }
  },

}
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
}

#main {
  display: flex;
  flex-wrap: wrap;
}

.content-box {
  display: flex;
  justify-content: center;
  font-weight: bolder;
  color: white;
  width: 12rem;
  height: 8rem;
  margin: 1rem;
  border: 2px solid black;
  border-radius: 4px;
  background-color: #6e8888;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #8aafaf;
  }
}
</style>
