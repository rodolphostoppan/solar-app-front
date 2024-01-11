<template>
  <main>
    <h1>Projeto</h1>
    <p>Por fim, só preciso de mais alguns dados pra mostrar o projeto do seu cliente:</p>
    <section>
      <state-select name="Estado" />
      <city-select name="Cidade" />
      <address-input name="Endereço" />
      <amount-input name="Potência dos módulos (W)" type="number" />
      <submit-bill name="DIMENSIONAR" route="sizing" />
    </section>
  </main>
</template>

<script lang="ts">
import InputTextComponent from '@/components/input-text-component.vue'
import InputSelectComponent from '@/components/input-select-component.vue'
import Button from '@/components/button-component.vue'

export default {
  components: {
    StateSelect: InputSelectComponent,
    CitySelect: InputSelectComponent,
    AddressInput: InputTextComponent,
    AmountInput: InputTextComponent,
    SubmitBill: Button
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    addBill() {}
  }
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

  :last-child {
    margin-top: 7rem;
  }
}
</style>
