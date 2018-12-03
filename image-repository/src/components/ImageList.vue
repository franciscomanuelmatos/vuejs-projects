<template>
  <div>
    Image Gallery

    <ul>
      <img class="ui small image" v-for="image in getAllImages" :key="image.id" :src="image.link" />
    </ul>
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
    ...mapGetters(['getAllImages'])
  },
  created() {
    this.fetchImages();
  },
}
</script>
