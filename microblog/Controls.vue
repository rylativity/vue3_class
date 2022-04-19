<template>
  <button>Like</button>
  {{ post.likes }}
  <hashtag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashtag="hashtag"
  />
</template>

<script>
import Hashtag from './Hashtag.vue'
export default {
    components: { Hashtag },
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>