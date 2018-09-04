<template>
  <div>
    Fetching your info...
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  created(){
    console.log('a . ' + window.location.hash);
    this.finalizeLogin(window.location.hash);
  }
};

</script>

<style scoped>
  div {
    text-align: center;
  }
</style>
