<template>
  <main>
    <h1>Dimensionamento</h1>
    <p>PRONTO! Esse é o projeto do seu cliente:</p>
    <section>
      <display-data name="Potência do sistema: " value="10kWp" />
      <display-data name="Número de módulos: " value="20" />
      <display-data name="Potência dos módulos: " value="550W" />
      <display-data name="Número de inversores: " value="1" />
      <display-data name="Geração média: " value="800kWh" />
    </section>
  </main>
</template>

<script lang="ts">
import DisplayDataComponent from '@/components/display-data-component.vue'

export default {
  components: { DisplayData: DisplayDataComponent },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
main {
  display: grid;

  padding: 4rem 3rem;
  gap: 2rem;

  > h1,
  p {
    text-align: center;
  }
}

section {
  display: grid;
  gap: 1rem;

  background-color: var(--primary-color);
  color: var(--background-color);

  font-size: 1.8rem;

  padding: 2rem;

  border-radius: 0.5rem;
}
</style>
