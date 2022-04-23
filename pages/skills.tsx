import React, { useContext, useEffect } from 'react'
import Layout from '../layout/Layout'

import { SkillContext } from '../context/SkillContext'
import Skill from '../components/Skill'
import SkillSkeleton from '../components/SkillSkeleton'

const Skills = () => {
  const { state, getSkills } = useContext(SkillContext)
  const { skills, errorMsg } = state

  useEffect(() => {
    if (skills.length === 0) {
      getSkills()
    }
  }, [skills])

  return (
    <Layout title="My Skills">
      <div>
        <div>
          <h2 className="mb-7 text-2xl font-bold">My Skills</h2>
          <div className="mx-auto grid grid-cols-2 gap-5 px-5 md:grid-cols-3 md:px-10 xl:w-1/2">
            {skills.length === 0
              ? Array(6)
                  .fill(0)
                  .map((v, i) => <SkillSkeleton key={i} />)
              : skills.map((skill) => <Skill skill={skill} key={skill.id} />)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Skills
