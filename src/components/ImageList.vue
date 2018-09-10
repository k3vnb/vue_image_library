<template>
  <div>
    Image List
  </div>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    name: 'ImageList',
    methods: mapActions(['fetchImages']),
    //also define lifecycle method, as below
    created(){
      this.fetchImages();
    }
  };
</script>

<style>
</style>
