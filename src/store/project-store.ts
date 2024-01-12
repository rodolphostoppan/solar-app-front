import { Project } from '@/modules/project/entities/project'
import { defineStore } from 'pinia'

export const projectStore = defineStore('project', {
  state: () => ({
    data: new Project()
  }),
  actions: {
    setProjectData(data: Project) {
      this.data = data
    }
  }
})
