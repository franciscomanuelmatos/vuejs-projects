<template>
  <div class="col-md-4">
    Video List:
    <ul class="list-group">
      <VideoListItem 
        @videoSelect="onVideoSelect"
        v-for="video in videos"
        :key="video.etag"
        :video="video"
      >
      </VideoListItem>
    </ul>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  props: {
    videos: Array
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelect', video);
    }
  }
}
</script>

<style scoped>

</style>

