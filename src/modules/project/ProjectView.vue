<template>
  <main>
    <h1>Projeto</h1>
    <p>Por fim, só preciso de mais alguns dados pra mostrar o projeto do seu cliente:</p>
    <section>
      <state-select name="Estado" :options="states" v-model="store.data.location.state" />
      <city-select name="Cidade" :options="cities" v-model="store.data.location.city" />
      <address-input name="Endereço" v-model="store.data.location.address" />
      <amount-input
        name="Potência dos módulos (W)"
        type="number"
        v-model="store.data.modulesPower"
      />
      <submit-bill name="DIMENSIONAR" @click="projectSizing" />
      <progress-bar :show="loader" text="Dimensionando projeto..." />
    </section>
  </main>
</template>

<script lang="ts">
import InputTextComponent from '@/components/input-text-component.vue'
import InputSelectComponent from '@/components/input-select-component.vue'
import Button from '@/components/button-component.vue'
import ProgressBar from '@/components/progress-bar.vue'
import { ProjectService } from './services/project.service'
import { HTTP_CLIENT, type HttpClient } from '@/infra/http/http'
import { inject } from 'vue'
import { projectStore } from '../../store/project-store'
import { states } from '../../infra/states/states'

export default {
  components: {
    StateSelect: InputSelectComponent,
    CitySelect: InputSelectComponent,
    AddressInput: InputTextComponent,
    AmountInput: InputTextComponent,
    SubmitBill: Button,
    ProgressBar: ProgressBar
  },
  data() {
    return {
      store: projectStore(),
      projectService: new ProjectService(inject(HTTP_CLIENT) as HttpClient),
      loader: false,
      states: states,
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
    async projectSizing() {
      this.loader = true
      await this.projectService
        .save(this.store.data)
        .finally(() => {
          this.loader = false
        })
        .then(() => {
          this.$router.push({ name: 'sizing' })
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

section {
  display: grid;
  gap: 1rem;

  :last-child {
    margin-top: 7rem;
  }
}
</style>
