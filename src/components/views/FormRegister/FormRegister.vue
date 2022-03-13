<template>
  <div class="container">
    <div>
      <h1 id="headerText">Nhập thông tin người dùng</h1>
      <div id="register">
        <div id="imgUpload">
          <img id="output"/>
          <input type="file" accept="image/*" @change="loadImg">
        </div>
        <form id="formRegister" ref="formLogin" @submit.prevent="submitForm">
          <div class="formInput">
            <p class="staticText">Họ và tên </p><input class="input formInput--input" placeholder="Họ và tên"
                                                       v-model="formRegister.fullName">
          </div>
          <div class="formInput">
            <p class="staticText">Ngày sinh </p> <input class="input formInput--input" type="date"
                                                        placeholder="Ngày sinh" v-model="formRegister.dayOfBirth">
          </div>
          <div class="formInput">
            <p class="staticText">Số điện thoại </p><input class="input formInput--input" placeholder="Số điện thoại"
                                                           v-model="formRegister.phoneNumber">
          </div>
          <div class="formInput">
            <p class="staticText">Email </p><input class="input formInput--input" type="email" placeholder="Email"
                                                   v-model="formRegister.email">
          </div>
          <div>
            <button id="btnSubmit" type="submit">Đăng Ký</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formRegister: {
        fullName: '',
        dayOfBirth: '',
        phoneNumber: '',
        email: ''
      },
      img: null
    }
  },
  created() {

  },
  methods: {
    submitForm() {
      alert('ok')
      this.onUpload()
    },
    onFileSelected(event) {
      this.formRegister.img = event.target.files[0]
    },
    onUpload() {

    },
    loadImg(event) {
      const output = document.getElementById('output');
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
      }
    },
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

#register {
  display: flex;
  margin-bottom: 5rem;
}
@media only screen and (max-width: 600px) {
  #register {
    display: flex;
    flex-direction: column;
  }
  #imgUpload{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #headerText{
    font-size: x-large;
  }
}

#headerText {
  text-align: center;
}

#formRegister {
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
  padding: 40px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 8px 5px lightblue;
}

.formInput {
  display: flex;
  justify-content: space-between;
}

.formInput--input {
  width: 200px;
  border: 1px solid gray;
  margin-left: 10px;
}

.staticText {
  display: flex;
  align-items: center;
  font-weight: bolder;
  color: black;
}

#btnSubmit {
  float: right;
  padding: 10px 20px;
  background-color: lightblue;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: -20px;
  font-weight: bolder;
}

#btnSubmit:hover {
  cursor: pointer;
}

#imgUpload img {
  display: flex;
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>
