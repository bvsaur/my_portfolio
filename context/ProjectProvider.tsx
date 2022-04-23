import { useReducer } from 'react'
import { ProjectState, Project } from '../interfaces'
import { ProjectContext } from './ProjectContext'
import { ProjectReducer } from './ProjectReducer'
import axiosClient from '../libs/axios'
import { AxiosResponse } from 'axios'

const INITIAL_STATE: ProjectState = {
  projects: [],
  errorMsg: '',
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ProjectProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(ProjectReducer, INITIAL_STATE)

  const getProjects = async () => {
    try {
      const res: AxiosResponse = await axiosClient.get('/projects?populate=*')
      const projects: Project[] = res.data.data
      dispatch({ type: 'getProjects', payload: projects })
    } catch (error) {
      dispatch({ type: 'error', payload: 'Something went wrong :(' })
    }
  }

  return (
    <ProjectContext.Provider value={{ state, getProjects }}>
      {children}
    </ProjectContext.Provider>
  )
}
