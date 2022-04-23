import { useContext, useEffect } from 'react'
import Project from '../components/Project'
import ProjectSkeleton from '../components/ProjectSkeleton'
import { ProjectContext } from '../context/ProjectContext'
import Layout from '../layout/Layout'

const Home = () => {
  const { state, getProjects } = useContext(ProjectContext)
  const { projects, errorMsg } = state

  useEffect(() => {
    if (projects.length === 0) {
      getProjects()
    }
  }, [projects])

  return (
    <Layout title="My Projects">
      {errorMsg && (
        <p className="mb-5 text-2xl font-bold text-red-500">{errorMsg}</p>
      )}
      <div className="mx-auto grid w-full grid-cols-1 gap-7 px-7 md:grid-cols-2 lg:w-2/3 lg:grid-cols-2 lg:gap-10 lg:px-0 xl:w-1/2 xl:gap-14">
        {projects.length === 0
          ? Array(4)
              .fill(0)
              .map((v, i) => <ProjectSkeleton key={i} />)
          : projects.map((project) => (
              <Project project={project} key={project.id} />
            ))}
      </div>
    </Layout>
  )
}

export default Home
