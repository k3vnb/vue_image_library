<template>
  <div >
    <div class="image-container" v-if="isLoggedIn">
      Image List
      <img v-for="image in allImages" v-bind:src="image.link"/>
      {{ allImages.length }}
    </div>
    <h2 v-else>Log in to get started</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'ImageList',
    //computed reads info into component and make it accessible from our template
    computed: mapGetters(['allImages', 'isLoggedIn']),
    methods: mapActions(['fetchImages']),
    //also define lifecycle method, as below
    created(){
      this.fetchImages();
    }
  };
</script>

<style scoped>
  .image-container {
    column-count: 3;
    column-gap: 0;
  }
  img {
    max-width: 100%;
    padding: 5px;
  }
</style>
