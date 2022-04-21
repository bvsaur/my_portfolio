import React from 'react'
import Layout from '../layout/Layout'

import { SKILLS } from '../data/skills'

const Skills = () => {
  return (
    <Layout title="My Skills">
      <div>
        <div>
          <h2 className="mb-7 text-2xl font-bold">My Skills</h2>
          <div className="mx-auto grid grid-cols-2 gap-5 px-5 md:grid-cols-3 md:px-10 xl:w-1/2">
            {SKILLS.map((skill) => (
              <div className="flex items-center" key={skill.name}>
                <i className="fa-solid fa-check text-2xl text-sky-500"></i>
                <div className="ml-4 text-left" key={skill.name}>
                  <p className="font-bold">{skill.name}</p>
                  <span className="font-light">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Skills
