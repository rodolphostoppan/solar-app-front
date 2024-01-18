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
      <input-text-component v-model="store.data.client.name" name="Cliente" />
      <input-select-component
        v-model="store.data.client.location.state"
        name="Estado"
        :options="states"
      />
      <input-select-component
        v-model="store.data.client.location.city"
        name="Cidade"
        :options="cities"
      />
      <input-text-component v-model="store.data.client.location.address" name="Endereço" />
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
import { projectStore } from '@/store/project-store'
import { states } from '@/infra/states/states'

export default {
  components: {
    InputTextComponent: InputTextComponent,
    InputSelectComponent: InputSelectComponent,
    SubmitClient: ButtonComponent,
    modal: ModalDialog
  },

  data() {
    return {
      store: projectStore(),
      client: new Client(),
      clientService: new ClientService(inject(HTTP_CLIENT) as HttpClient),
      showModal: false,
      states: states,
      cities: []
    }
  },

  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    addClient() {
      this.$router.push({ name: 'bill' })
      this.showModal = false
    }
  },

  created() {
    this.$watch('store.data.client.location.state', async () => {
      await fetch(`./src/infra/cities/${this.store.data.client.location.state.toLowerCase()}.json`)
        .then((response) => response.json())
        .then((cities) => (this.cities = cities))
    })
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
