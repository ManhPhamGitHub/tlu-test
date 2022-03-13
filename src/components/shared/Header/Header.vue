<template>
  <div class="container">
    <div id="header">
      <div>
        <button id="collapse-btn">III</button>
      </div>
      <div class="dropdown">
        <div style="display: flex; align-items: center; justify-content: center">Account</div>
        <ul>
          <li>Thông tin tài khoản</li>
          <li>Đổi mật khẩu</li>
          <li>Đăng Xuất</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
}

#header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  background-color: #2b3643;
}

.dropdown {
  transition: 0.5s;
  background-color: #44505e;
  ul {
    display: none;
    list-style-type: none;
  }

  li {
    padding: 10px;
    border: 1px solid black;
    transition: 0.5s;
  }

  li:hover {
    background-color: wheat;
  }
}

.dropdown div {
  text-align: center;
  color: white;
  height: 100%;
  width: 12rem;
  border-radius: 4px;
}

.dropdown:hover {
  cursor: pointer;
  background-color: cadetblue;
  z-index: 1;

  ul {
    display: block;
    background-color: white;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}

#collapse-btn {
  height: 100%;
  width: 3rem;
  border-radius: 3px;
  border: none;
  background-color: cadetblue;

  &:hover {
    cursor: pointer;
  }
}
</style>
