import { ProjectContext } from './ProjectContext'

const INITIAL_STATE = {}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ProjectProvider = ({ children }: Props) => {
  ;<ProjectContext.Provider value={{}}></ProjectContext.Provider>
}
