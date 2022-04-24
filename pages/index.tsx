import Project from '../components/Project'
import { IProject, IResume } from '../interfaces'
import Layout from '../layout/Layout'

import { client } from '../libs/sanity'

interface Props {
  projects: IProject[]
  resume: IResume
}

const Home = ({ projects, resume }: Props) => {
  return (
    <Layout title="Projects" resume={resume}>
      <div className="mx-auto grid w-full grid-cols-1 gap-7 px-7 md:grid-cols-2 lg:w-2/3 lg:grid-cols-2 lg:gap-10 lg:px-0 xl:w-1/2 xl:gap-14">
        {projects.map((project) => (
          <Project project={project} key={project._id} />
        ))}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  let queryProjects = `*[_type == "project"] {
    _id,
    image,
    name,
    provider,
    repoURL,
    siteURL
  }`

  let queryResume = `*[_type == "resume"] {
    "url": file.asset->url
  }`

  const [projects, resume] = await Promise.all([
    client.fetch(queryProjects),
    client.fetch(queryResume),
  ])

  return {
    props: {
      projects,
      resume: resume[0],
    },
  }
}

export default Home
