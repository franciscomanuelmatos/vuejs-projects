<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Repository</a>

    
    <div class="right menu">
      <a href="#" class="ui item" @click="logout"  v-if="isLoggedIn">Logout</a>
      <a href="#" class="ui item" @click="login"  v-else>Login</a>
    </div>
  </div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
   name: 'AppHeader',
   methods: {
     ...mapActions(['login', 'logout'])
   },
   computed: {
     ...mapGetters(['isLoggedIn'])
   }
}
</script>

<style scoped>

</style>
