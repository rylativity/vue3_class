<template>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <p>{{ total }}</p>
  <div 
    v-for="number in history"
    :key="number"
  >{{ number }}</div>
</template>

<script>
// import { ref, reactive, computed, watch, watchEffect } from 'vue'
import { useNumbers } from './useNumbers.js'
export default {
  setup() {
    
    return useNumbers()
  }
}
</script>

<style scoped>
button {
  height: 100px;
  width: 100px;
  font-size: 40px;
}
p {
  font-size: 40px;
}
</style>