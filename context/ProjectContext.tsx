import { createContext } from 'react'
import { ProjectState } from '../interfaces'

export type ProjectContextProps = {
  state: ProjectState
  getProjects: () => void
}

export const ProjectContext = createContext<ProjectContextProps>(
  {} as ProjectContextProps
)
