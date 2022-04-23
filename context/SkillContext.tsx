import { createContext } from 'react'
import { SkillState } from '../interfaces'

export type SkillContextProps = {
  state: SkillState
  getSkills: () => void
}

export const SkillContext = createContext<SkillContextProps>(
  {} as SkillContextProps
)
