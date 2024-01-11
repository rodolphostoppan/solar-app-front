<template>
  <main>
    <h1>Projeto</h1>
    <p>Por fim, só preciso de mais alguns dados pra mostrar o projeto do seu cliente:</p>
    <section>
      <state-select name="Estado" :options="states" v-model="project.location.state" />
      <city-select name="Cidade" :options="cities" v-model="project.location.city" />
      <address-input name="Endereço" v-model="project.location.address" />
      <amount-input name="Potência dos módulos (W)" type="number" v-model="project.modulesPower" />
      <submit-bill name="DIMENSIONAR" @click="projectSizing" />
    </section>
  </main>
</template>

<script lang="ts">
import InputTextComponent from '@/components/input-text-component.vue'
import InputSelectComponent from '@/components/input-select-component.vue'
import Button from '@/components/button-component.vue'
import { ProjectService } from './services/project.service'
import { HTTP_CLIENT, type HttpClient } from '@/infra/http/http'
import { inject } from 'vue'
import { Project } from './entities/project'

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
      project: new Project(),
      projectService: new ProjectService(inject(HTTP_CLIENT) as HttpClient),
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
    async projectSizing() {
      await this.projectService.save(this.project).then(() => {
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
