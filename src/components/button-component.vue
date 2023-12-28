<template>
  <button @click="goToPage(route as string)">{{ name }}</button>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    route: String
  },
  methods: {
    goToPage(name: string) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style scoped>
button {
  background-color: var(--primary-color);
  border-radius: 0.5rem;
  padding: 2rem;
  font-weight: 700;
  font-size: 2rem;
  color: var(--font-color);
}
</style>
