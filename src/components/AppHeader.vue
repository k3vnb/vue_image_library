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
