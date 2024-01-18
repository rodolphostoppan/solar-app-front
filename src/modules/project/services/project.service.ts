import type { HttpClient } from '@/infra/http/http'
import { Project } from '../entities/project'

export class ProjectService {
  constructor(private readonly httpClient: HttpClient) {}
  save(project: Project) {
    const payload = project.format()
    return this.httpClient.post('/projects', payload)
  }

  update(project: Project) {
    const payload = project.format()
    return this.httpClient.put(`/projects/${project.id}`, payload)
  }

  delete(id: string) {
    return this.httpClient.delete(`/projects/${id}`, null)
  }

  getProjectById(id: string): Promise<Project> {
    return this.httpClient.get(`/projects/${id}`).then(({ data }) => {
      return new Project(data)
    })
  }

  getAllProjects(): Promise<Project[]> {
    return this.httpClient.get('/projects').then(({ data }) => {
      return data.map((project: any) => new Project(project))
    })
  }

  getAllCitiesNames(): Promise<string[]> {
    return this.httpClient.get('/cities').then(({ data }) => {
      return data.map((citiesNames: string) => new Array(citiesNames))
    })
  }
}
