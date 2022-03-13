<template>
  <div v-show="isShowSideBar && isShowSideBar2" class="container">
    <div id="sidebar">
      <div id="topSideBar">
        <router-link to="/">
          <img class="logo" src="https://upload.wikimedia.org/wikipedia/vi/b/bc/Logo-Thuy_Loi.png" alt="logo"/>
        </router-link>
      </div>
      <div id="content">
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
        <ul>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <!--          <li>2</li>-->
          <!--          <li>2</li>-->
          <!--          <li>2</li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    isShowSideBar: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  mounted() {
  },
  data() {
    return {
      isShowSideBar2: this.isShowSideBar
    }
  },
  onHideSideBar() {
  }
}
</script>

<style scoped>
.container {
  border: 2px solid black;
  background-color: #44505e;
  z-index: 99;
}

@media only screen and (max-width: 600px) {
  .container {
    display: none;
  }
}

#sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 12rem;
}

#topSideBar {
  display: flex;
  justify-content: center;
  height: 3rem;
  border: 1px solid gray;
}

#topSideBar button {
  height: 30px;
}

#topSideBar img {
  height: 100%;
}

#content ul li {
  padding: 20px 20px 20px 10px;
  border: 1px solid gray;
  transition: 0.5s;
}

#content ul li:hover {
  cursor: pointer;
  background-color: cadetblue;
}

</style>
