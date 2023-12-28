<template>
  <main>
    <h1>Fatura</h1>
    <p>Agora vamos cadastrar as faturas de energia:</p>
    <section></section>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
main {
  display: grid;
  justify-items: center;

  padding: 4rem 1.5rem;
  gap: 2rem;

  > p {
    text-align: center;
  }
}

section {
  display: grid;
  gap: 1rem;

  :last-child {
    margin-top: 7rem;
  }
}
</style>
