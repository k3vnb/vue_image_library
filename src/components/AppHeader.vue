<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <div class="right menu">
      <a href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
//we will import mapActions from vuex to call the action to this component
import { mapActions } from 'vuex';
export default {
  name: 'AppHeader',
  methods: mapActions(['login'])
};
// you sill sometimes see syntax as methods: {...mapActions(['login'])}, this would allow you to use other methods in addition, it is unnecessary if you only have one method;
</script>

<style>
</style>

<!-- http://localhost:8080/#access_token=6f88a6209efc05428373a0373d220c512c99abf1&expires_in=315360000&token_type=bearer&refresh_token=ef0d1f21d7f3a797e2969714859dd12dc33c7d1a&account_username=K3vnb&account_id=93477653 -->
