import Project from '../components/Project'
import Layout from '../layout/Layout'

const Home = () => {
  return (
    <Layout title="My Projects">
      <div className="mx-auto grid w-full grid-cols-1 gap-7 px-7 md:grid-cols-2 lg:w-2/3 lg:grid-cols-2 lg:gap-10 lg:px-0 xl:w-1/2 xl:gap-14">
        <Project />
        <Project />
      </div>
    </Layout>
  )
}

export default Home
