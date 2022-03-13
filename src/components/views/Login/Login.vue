<template>
  <div class="container">
    <div id="login">
      <img id="loginLogo" src="https://vcdn-vnexpress.vnecdn.net/2019/07/19/preview-1-2814-1563526227.jpg" alt="img">
      <div>
        <form id="formLogin" ref="formLogin" @submit.prevent="submitForm">
          <input class="input" placeholder="Mã Sinh Viên">
          <input class="input" type="password" placeholder="******">
          <button id="btnLogin" type="submit">Đăng nhập</button>
          <div style="display: flex">
            <router-link to="/register">
              <img id="qrCode" :src="qrImg" alt="qrcode">
            </router-link>
            <p style="font-weight: bold; font-size: large">Quét mã QR để đăng ký học và điểm danh</p>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import ConstraintApi from "@/util/ConstraintApi";

export default {
  props: {},
  mounted() {
    this.getQrCode()
  },
  data() {
    return {
      qrImg: ''
    }
  },
  methods: {
    getQrCode() {
      axios.get(ConstraintApi.API.qrcode.path, {responseType: "arraybuffer"}).then(response => {
        let base64String = btoa(
            String.fromCharCode.apply(null, new Uint8Array(response.data))
        );
        this.qrImg = "data:image/jpg;base64," + base64String;
      }).catch(err => {
        console.log(err)
      })
    },
    submitForm() {
      alert('ok')
    }
  }

}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 100vh;
}

#login {
  display: flex;
  width: fit-content;
}

#loginLogo {
  width: 350px;
}

@media only screen and (max-width: 600px) {
  #loginLogo {
    display: none;
  }
}

#formLogin {
  display: flex;
  flex-direction: column;
  width: 18rem;
}

#btnLogin {
  width: 100%;
  padding: 10px;
  color: white;
  background-color: #af8c9d;
  background-image: linear-gradient(315deg, #af8c9d 0%, #8cacac 74%);
}

#qrCode {
  width: 150px;
  background-color: gray;
}
</style>
