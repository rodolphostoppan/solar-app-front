<template>
  <main>
    <modal
      route="client"
      text="Tem certeza que deseja dimensionar outro projeto?"
      :show="showModal"
      @close="closeModal"
      @action="startOver"
    />
    <h1>Dimensionamento</h1>
    <p>PRONTO! Isso é o que seu cliente vai precisar:</p>
    <section>
      <display-data name="Potência do sistema: " :value="`${project.power} kWp`" />
      <display-data name="Número de módulos: " :value="`${project.modules}`" />
      <display-data name="Potência dos módulos: " :value="`${project.modulesPower} W`" />
      <display-data name="Número de inversores: " :value="`${project.inverter}`" />
      <display-data name="Geração média: " :value="`${project.generation} kWh`" />
    </section>
    <button-action name="START OVER" @click="openModal" />
  </main>
</template>

<script lang="ts">
import DisplayDataComponent from '../../components/display-data-component.vue'
import Button from '../../components/button-component.vue'
import ModalDialog from '../../components/modal-dialog.vue'
import { SizingService } from './services/sizing.service'
import { inject } from 'vue'
import { HTTP_CLIENT, type HttpClient } from '@/infra/http/http'
import { Project } from '../project/entities/project'

export default {
  components: { DisplayData: DisplayDataComponent, ButtonAction: Button, Modal: ModalDialog },
  data() {
    return {
      project: new Project().format(),
      showModal: false,
      sizingService: new SizingService(inject(HTTP_CLIENT) as HttpClient)
    }
  },
  methods: {
    async projectData() {
      const projects = await this.sizingService.getAllProjects()
      const data = await this.sizingService.getProjectData(projects[0].id)
      this.project = data
    },
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    startOver() {
      this.$router.replace('/')
      this.showModal = false
    }
  },
  beforeMount() {
    this.projectData()
  }
}
</script>

<style scoped>
main {
  display: grid;
  justify-content: center;

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

  padding: 2rem 1rem;

  border-radius: 0.5rem;

  margin-bottom: 7rem;
}
</style>
