<template>
  <main>
    <modal-dialog
      route="project"
      text="Deseja cadastrar outra fatura?"
      :show="showModal"
      @close="closeModal"
      @callback="addBill"
    />
    <h1>Fatura</h1>
    <p>Agora vamos cadastrar as faturas de energia do cliente:</p>
    <section>
      <uc-input name="UC" type="number" />
      <holder-input name="Titular" />
      <state-select name="Estado" />
      <city-select name="Cidade" />
      <address-input name="Endereço" />
      <amount-input name="Valor da fatura" type="number" unit="R$" unit-position="prefix" />
      <tariff-input name="Valor da tarifa" type="number" />
      <consumption-input name="Consumo médio" type="number" />
      <submit-bill name="CADASTRAR" @click="openModal" />
    </section>
  </main>
</template>

<script lang="ts">
import InputTextComponent from '@/components/input-text-component.vue'
import InputSelectComponent from '@/components/input-select-component.vue'
import Button from '@/components/button-component.vue'
import ModalDialogBill from '@/components/bill-modal-dialog.vue'

export default {
  components: {
    UcInput: InputTextComponent,
    HolderInput: InputTextComponent,
    StateSelect: InputSelectComponent,
    CitySelect: InputSelectComponent,
    AddressInput: InputTextComponent,
    AmountInput: InputTextComponent,
    TariffInput: InputTextComponent,
    ConsumptionInput: InputTextComponent,
    SubmitBill: Button,
    ModalDialog: ModalDialogBill
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
