<template>
  <card v-for="post in filteredPosts"
  :key="post.id">
    <template v-slot:title>
        {{ post.title }}
      </template>

      <template v-slot:content>
        {{ post.content }}
      </template>

      <template v-slot:description>
        <controls :post="post"/>
      </template>
  </card>
</template>

<script>
import { computed } from 'vue'
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'
import { store } from './store.js'
export default {
  components: {
    Card,
    Controls
  },

  setup() {

    const filteredPosts = computed(() => {
      if (!store.state.currentTag) {
        return store.state.posts
      }

      return store.state.posts.filter(
          post => post.hashtags.includes(store.state.currentTag)
        )
    })

    return {
      filteredPosts
    }
  }

}
</script>

<style scoped>

</style>