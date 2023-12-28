<template>
  <div class="container">
    <span>{{ name }}</span>
    <span>{{ value }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    value: String
  }
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 1rem;
}
</style>
