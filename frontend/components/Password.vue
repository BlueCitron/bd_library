<template>
  <div class="modal">
    <div class="textbox">
      <input
      id="password"
      type="password"
      placeholder="비밀번호를 입력해주세요."
      v-model="password"
      @keyup.enter="authenticate(password)"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      password: '',
    }
  },
  props: {
    authenticated: Boolean,
  },
  methods: {
    async authenticate (password) {
      let modal       = document.querySelector('.modal')
      if (process.client) {
        const { data } = await this.$http.post(`${process.env.baseURL}/enter`, { password: this.password })
        if (data.success) {
          this.$emit('ToggleAuth')
          modal.style.display = 'none'
        } else {
            alert('비밀번호가 맞지 않습니다.')
        }
        this.password = ''
      }
    }
  },
  mounted () {
    window.onclick = event => {
      let modal       = document.querySelector('.modal')
      if (event.target == modal)  {
        modal.style.display = 'none'
      }
    }
  }
}
</script>
<style scoped>
.modal {
  display: none;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.15);
  z-index: 9999;
}

.textbox {
  width: 400px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.textbox input {
  border: none;
  outline: none;
  width: 100%;
  height: 30px;
  padding: 8px 20px;
  border: 1px solid grey;
  border-radius: 8px;
}
</style>
