<template>
  <main>
    <modal
      route="bill"
      text="Tem certeza que deseja cadastrar esse cliente?"
      :show="showModal"
      @close="closeModal"
      @callback="addClient"
    />
    <h1>Cliente</h1>
    <p>Primeiro vamos cadastrar o cliente pra quem será feito o projeto:</p>
    <section>
      <input-text-component name="Cliente" />
      <input-select-component name="Estado" />
      <input-select-component name="Cidade" />
      <input-text-component name="Endereço" />
      <submit-client name="CADASTRAR" @click="openModal" />
    </section>
  </main>
</template>

<script lang="ts">
import InputTextComponent from '@/components/input-text-component.vue'
import InputSelectComponent from '@/components/input-select-component.vue'
import ButtonComponent from '@/components/button-component.vue'
import ModalDialog from '@/components/modal-dialog.vue'

export default {
  components: {
    InputTextComponent: InputTextComponent,
    InputSelectComponent: InputSelectComponent,
    SubmitClient: ButtonComponent,
    modal: ModalDialog
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

    addClient() {}
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
