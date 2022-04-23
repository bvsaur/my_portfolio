import { Skill, SkillState } from '../interfaces'

type SkillActions =
  | { type: 'getSkills'; payload: Skill[] }
  | { type: 'error'; payload: string }

export const SkillReducer = (
  state: SkillState,
  action: SkillActions
): SkillState => {
  switch (action.type) {
    case 'getSkills':
      return {
        skills: action.payload,
        errorMsg: '',
      }
    case 'error':
      return {
        skills: [],
        errorMsg: action.payload,
      }
    default:
      return state
  }
}
