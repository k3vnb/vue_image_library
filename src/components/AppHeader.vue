<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Log Out</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
//we will import mapActions from vuex to call the action to this component
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  //methods modify data or react to events inside of our component, computed reads data and gets access to it inside our template
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout'])
};
// you sill sometimes see syntax as methods: {...mapActions(['login'])}, this would allow you to use other methods in addition, it is unnecessary if you only have one method;
</script>

<style scoped>
.horizontal {
  display: flex;
}
.horizontal button:hover {
  cursor: pointer;
}
</style>

<!-- http://localhost:8080/#access_token=6f88a6209efc05428373a0373d220c512c99abf1&expires_in=315360000&token_type=bearer&refresh_token=ef0d1f21d7f3a797e2969714859dd12dc33c7d1a&account_username=K3vnb&account_id=93477653 -->
