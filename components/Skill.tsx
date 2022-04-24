import { ISkill } from '../interfaces'

interface Props {
  skill: ISkill
}

const Skill = ({ skill: { name, level } }: Props) => {
  return (
    <div className="flex items-center">
      <i className="fa-solid fa-check text-2xl text-sky-500"></i>
      <div className="ml-4 text-left">
        <p className="font-bold">{name}</p>
        <span className="font-light">{level}</span>
      </div>
    </div>
  )
}

export default Skill
