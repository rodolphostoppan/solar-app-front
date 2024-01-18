<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in projects" :key="index">
        <td v-for="(value, key) in row" :key="key">{{ value }}</td>
        <td class="td-actions">
          <div class="action-buttons"><edit-button /> <remove-button /></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import EditButton from './button-icon/edit-button.component.vue'
import RemoveButton from './button-icon/delete-button.component.vue'
import { HTTP_CLIENT, type HttpClient } from '@/infra/http/http'
import { ProjectService } from '@/modules/project/services/project.service'
import { inject } from 'vue'

export default {
  components: {
    EditButton: EditButton,
    RemoveButton: RemoveButton
  },
  props: {
    headers: {
      type: Array,
      default: () => {
        if (screen.width < 768) return ['Projeto', 'UF', 'Cidade', 'Pot', 'Ações']
        return ['Projeto', 'Estado', 'Cidade', 'Potência', 'Ações']
      }
    }
  },
  data() {
    return {
      projects: [{}],
      projectService: new ProjectService(inject(HTTP_CLIENT) as HttpClient)
    }
  },
  methods: {
    async getAllProjects() {
      this.projects = (await this.projectService.getAllProjects()).map((project) => ({
        projectName: project.client.name,
        state: project.location.state,
        city: project.location.city,
        power: project.power
      }))
    }
  },
  mounted() {
    this.getAllProjects()
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  color: var(--font-color);
}

table th,
table td {
  text-align: left;
  padding: 1rem;
}

table th {
  background-color: var(--primary-color);
}

th:first-child {
  border-top-left-radius: 1rem;
}

th:last-child {
  width: 10rem;
  border-top-right-radius: 1rem;
}

table td {
  border-bottom: 1px solid #dddddd;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
  max-width: fit-content;
}
</style>
