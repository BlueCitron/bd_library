<template>
  <div class="container">

    <Intro
    v-if="!authenticated"
    :launch="launchModal"
    ></Intro>

    <Search
     v-if="authenticated"
    ></Search>

    <Password
    :authenticated="authenticated"
    @ToggleAuth="toggleAuth"
    ></Password>

  </div>
</template>
<script>
import Intro from '~/components/Intro.vue'
import Password from '~/components/Password.vue'
import Search from '~/components/Search.vue'

export default {
  components: {
    Intro,
    Password,
    Search,
  },

  data () {
    return {
      authenticated: false,
    }
  },

  methods: {
    launchModal () {
      let modal       = document.querySelector('.modal')
      modal.style.display = 'flex'
    },
    toggleAuth (a) {
      this.authenticated = !this.authenticated
    },
  },

  created () {

  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic');

* {
  margin: 0;
  padding: 0;
  font-family: 'Nanum Gothic', sans-serif;
}

.container {
  width: 100%;
  height: 100vh;
  background: #000;
}
.container::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('/library.jpg') no-repeat;
  background-size: cover;
  opacity: .3;
}

</style>
