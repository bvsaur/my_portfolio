import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProjectProvider } from '../context/ProjectProvider'
import { SkillProvider } from '../context/SkillProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProjectProvider>
      <SkillProvider>
        <Component {...pageProps} />
      </SkillProvider>
    </ProjectProvider>
  )
}

export default MyApp
