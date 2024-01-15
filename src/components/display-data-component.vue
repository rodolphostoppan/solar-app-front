<template>
  <div class="container">
    <span>{{ name }}</span>
    <span class="result">{{ value }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: ['name', 'value']
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.result {
  padding: 0 0.3rem 0.2rem 0;
  border-right: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: 0 0 3px 0;
}
</style>
