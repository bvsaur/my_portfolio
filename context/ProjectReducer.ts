import { Project, ProjectState } from '../interfaces'

type ProjectActions =
  | { type: 'getProjects'; payload: Project[] }
  | { type: 'error'; payload: string }

export const ProjectReducer = (
  state: ProjectState,
  action: ProjectActions
): ProjectState => {
  switch (action.type) {
    case 'getProjects':
      return {
        projects: action.payload,
        errorMsg: '',
      }
    case 'error':
      return {
        errorMsg: action.payload,
        projects: [],
      }
    default:
      return state
  }
}
