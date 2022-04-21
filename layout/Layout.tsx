import { ReactNode } from 'react'
import Head from 'next/head'
import LinkButton from '../components/LinkButton'
import SocialLink from '../components/SocialLink'

interface Props {
  title: string
  children: ReactNode
}

const Layout = ({ title, children }: Props) => {
  return (
    <div className="py-10 text-center">
      <Head>
        <title>{title} | Bruno Verano</title>
      </Head>

      <img
        src="/img/me.jpg"
        alt="My Picture"
        className="mx-auto h-36 w-36 cursor-pointer rounded-full border-4 border-sky-500 p-1"
      />

      <div className="my-5">
        <h1 className="text-3xl font-bold">Bruno Verano</h1>
        <p className="font-medium text-gray-400">Full Stack Developer</p>
      </div>
      <div className="flex justify-center space-x-7">
        <SocialLink network="linkedin" />
        <SocialLink network="github" />
        <SocialLink network="gitlab" />
      </div>
      <div className="my-5 flex items-center justify-center space-x-7">
        <button className="rounded-md bg-sky-400 px-4 py-3 font-medium text-white shadow-lg transition-all hover:bg-sky-500 hover:shadow-xl">
          Download CV
          <i className="fa-solid fa-arrow-down ml-3 animate-bounce"></i>
        </button>
        <a
          href="mail:brunoveranoc@gmail.com"
          className="cursor-pointer rounded-md bg-gray-200 py-3 px-4 transition-colors hover:bg-gray-300"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>

      <div className="mx-auto my-5 inline-block space-x-2 rounded-xl bg-gray-200 p-2">
        <LinkButton text="Projects" href="/" />
        <LinkButton text="Skills" href="/skills" />
      </div>
      <main className="mt-5">{children}</main>
    </div>
  )
}

export default Layout
