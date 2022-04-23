import { AxiosResponse } from 'axios'
import { useReducer } from 'react'
import { SkillState } from '../interfaces'
import axiosClient from '../libs/axios'
import { SkillContext } from './SkillContext'
import { SkillReducer } from './SkillReducer'

const INITIAL_STATE: SkillState = {
  skills: [],
  errorMsg: '',
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const SkillProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(SkillReducer, INITIAL_STATE)

  const getSkills = async () => {
    try {
      const res: AxiosResponse = await axiosClient.get('/skills')
      const skills = res.data.data
      dispatch({ type: 'getSkills', payload: skills })
    } catch (error) {
      dispatch({ type: 'error', payload: 'Something went wrong :(' })
    }
  }

  return (
    <SkillContext.Provider value={{ state, getSkills }}>
      {children}
    </SkillContext.Provider>
  )
}
