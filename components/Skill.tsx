import { Skill } from '../interfaces'

interface Props {
  skill: Skill
}

const Skill = ({ skill }: Props) => {
  return (
    <div className="flex items-center">
      <i className="fa-solid fa-check text-2xl text-sky-500"></i>
      <div className="ml-4 text-left">
        <p className="font-bold">{skill.attributes.name}</p>
        <span className="font-light">{skill.attributes.level}</span>
      </div>
    </div>
  )
}

export default Skill
