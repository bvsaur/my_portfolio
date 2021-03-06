import Head from 'next/head'
import LinkButton from '../components/LinkButton'
import SocialLink from '../components/SocialLink'
import Image from 'next/image'
import CVandMailButton from '../components/CVandMailButton'
import { IResume } from '../interfaces'

interface Props {
  title: string
  children: JSX.Element | JSX.Element[]
  resume: IResume
}

const Layout = ({ title, children, resume }: Props) => {
  return (
    <div className="py-10 text-center">
      <Head>
        <title>{title} | Bruno Verano</title>
      </Head>

      <div className="inline-block rounded-full border-4 border-sky-500">
        <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-white">
          <Image src="/img/me.jpg" width={200} height={200} />
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-3xl font-bold">Bruno Verano</h1>
        <p className="font-medium text-gray-400">Full Stack Developer</p>
      </div>
      <div className="flex justify-center space-x-7">
        <SocialLink network="linkedin" />
        <SocialLink network="github" />
        <SocialLink network="gitlab" />
      </div>

      <CVandMailButton resume={resume} />

      <div className="mx-auto my-5 inline-block space-x-2 rounded-xl bg-gray-200 p-2">
        <LinkButton text="Projects" href="/" />
        <LinkButton text="Skills" href="/skills" />
      </div>
      <main className="mt-5">{children}</main>
    </div>
  )
}

export default Layout
