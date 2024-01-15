import { Project } from '@/modules/project/entities/project'
import type { HttpClient } from '../../../infra/http/http'

export class SizingService {
  constructor(private readonly httpClient: HttpClient) {}
  getAllProjects(): Promise<Project[]> {
    return this.httpClient.get('/projects').then(({ data }) => {
      return data.map((project: any) => new Project(project))
    })
  }
  getProjectData(id: string) {
    return this.httpClient.get(`/projects/${id}`).then(({ data }) => {
      return new Project(data)
    })
  }
}
