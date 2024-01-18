<template>
  <main>
    <h2>O que deseja? 👇</h2>
    <ul>
      <li><button-component name="ANÁLISE" @click="goToPage('table-projects')" /></li>
      <li><button-component name="DIMENSIONAMENTO" @click="goToPage('client')" /></li>
    </ul>
  </main>
</template>

<script lang="ts">
import ButtonComponent from '@/components/button-component.vue'

export default {
  components: { ButtonComponent },
  methods: {
    goToPage(route: string) {
      this.$router.push(`${route}`)
    }
  }
}
</script>

<style scoped>
main {
  display: grid;
  justify-items: center;

  padding: 1.5rem;
  gap: 1.5rem;
}

ul {
  display: grid;
  justify-items: center;
  gap: 2rem;
}
</style>
