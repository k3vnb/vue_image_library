<template>
  <div>
    Image List
    {{ allImages.length }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'ImageList',
    //computed reads info into component and make it accessible from our template
    computed: mapGetters(['allImages']),
    methods: mapActions(['fetchImages']),
    //also define lifecycle method, as below
    created(){
      this.fetchImages();
    }
  };
</script>

<style>
</style>
