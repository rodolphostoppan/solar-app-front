<template>
  <main>
    <modal
      text="Tem certeza que deseja cadastrar esse cliente?"
      :show="showModal"
      @close="closeModal"
      @action="addClient"
    />
    <h1>Cliente</h1>
    <p>Primeiro vamos cadastrar o cliente pra quem será feito o projeto:</p>
    <form @submit.prevent="openModal">
      <input-text-component v-model="client.name" name="Cliente" />
      <input-select-component v-model="client.location.state" name="Estado" :options="states" />
      <input-select-component v-model="client.location.city" name="Cidade" :options="cities" />
      <input-text-component v-model="client.location.address" name="Endereço" />
      <submit-client name="CADASTRAR" />
    </form>
  </main>
</template>

<script lang="ts">
import InputTextComponent from '../../components/input-text-component.vue'
import InputSelectComponent from '../../components/input-select-component.vue'
import ButtonComponent from '../../components/button-component.vue'
import ModalDialog from '../../components/modal-dialog.vue'
import { Client } from './entities/client'
import { ClientService } from './services/client.service'
import { inject } from 'vue'
import { HTTP_CLIENT, type HttpClient } from '@/infra/http/http'

export default {
  components: {
    InputTextComponent: InputTextComponent,
    InputSelectComponent: InputSelectComponent,
    SubmitClient: ButtonComponent,
    modal: ModalDialog
  },

  data() {
    return {
      client: new Client(),
      clientService: new ClientService(inject(HTTP_CLIENT) as HttpClient),
      showModal: false,
      states: [
        { id: 1, item: 'pr' },
        { id: 3, item: 'SP' },
        { id: 4, item: 'RS' },
        { id: 5, item: 'SC' },
        { id: 6, item: 'MG' },
        { id: 7, item: 'RJ' },
        { id: 8, item: 'ES' },
        { id: 9, item: 'MT' }
      ],
      cities: [
        { id: 1, item: 'Maringá' },
        { id: 3, item: 'Londrina' },
        { id: 4, item: 'Curitiba' },
        { id: 5, item: 'Marialva' },
        { id: 6, item: 'Sarandi' },
        { id: 7, item: 'Colorado' },
        { id: 8, item: 'Santa Fé' },
        { id: 9, item: 'Paiçandu' }
      ]
    }
  },

  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    async addClient() {
      this.clientService.save(this.client).then(() => {
        this.$router.push({ name: 'bill' })
        this.showModal = false
      })
    }
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

form {
  display: grid;
  gap: 1rem;

  :last-child {
    margin-top: 7rem;
  }
}
</style>
