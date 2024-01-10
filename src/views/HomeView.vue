<template>
  <main>
    <h2>Dimensionamento 👇</h2>
    <start @click="goToPage" name="START" />
  </main>
</template>

<script lang="ts">
import StartButton from '../components/button-component.vue'

export default {
  components: {
    Start: StartButton
  },
  methods: {
    goToPage() {
      this.$router.push({ name: 'client' })
    }
  }
}
</script>

<style scoped>
main {
  display: grid;
  justify-items: center;

  gap: 1.5rem;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  > button {
    padding: 2rem 5rem;
    font-weight: 700;
    font-size: 3rem;
    color: var(--font-color);
  }
}
</style>
