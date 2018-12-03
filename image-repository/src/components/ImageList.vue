<template>
  <div class="image-container" v-if="isLoggedIn">
    <ul>
      <img v-for="image in getAllImages" :key="image.id" :src="image.link" />
    </ul>
  </div>

  <div v-else>
    <h2>Log in to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  methods: {
    ...mapActions(['fetchImages'])
  },
  computed: {
    ...mapGetters(['getAllImages', 'isLoggedIn'])
  },
  created() {
    this.fetchImages();
  },
}
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

