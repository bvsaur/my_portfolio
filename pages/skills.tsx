import React from 'react'
import Skill from '../components/Skill'
import { client } from '../libs/sanity'
import { IResume, ISkill } from '../interfaces'
import Layout from '../layout/Layout'

interface Props {
  skills: ISkill[]
  resume: IResume
}

const Skills = ({ skills, resume }: Props) => {
  return (
    <Layout title="Skills" resume={resume}>
      <div>
        <div>
          <h2 className="mb-7 text-2xl font-bold">My Skills</h2>
          <div className="mx-auto grid grid-cols-2 gap-5 px-5 md:grid-cols-3 md:px-10 xl:w-1/2">
            {skills.map((skill) => (
              <Skill skill={skill} key={skill._id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  let querySkill = `*[_type == "skill"] {
    _id,
    name,
    level
  }`

  let queryResume = `*[_type == "resume"] {
    "url": file.asset->url
  }`

  const [skills, resume] = await Promise.all([
    client.fetch(querySkill),
    client.fetch(queryResume),
  ])

  return {
    props: {
      skills,
      resume: resume[0],
    },
  }
}

export default Skills
