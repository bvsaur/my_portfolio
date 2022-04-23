import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProjectProvider } from '../context/ProjectProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProjectProvider>
      <Component {...pageProps} />
    </ProjectProvider>
  )
}

export default MyApp
