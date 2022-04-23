import Image from 'next/image'
import { useState } from 'react'
import { Project } from '../interfaces'

interface Props {
  project: Project
}

const Project = ({ project }: Props) => {
  const [show, setShow] = useState(false)
  return (
    <div
      className="relative h-56 w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Image
        src={project.attributes.image.data.attributes.url}
        layout="fill"
        objectFit="scale-down"
        objectPosition="center"
      />
      <div
        className={`${
          !show && 'hidden'
        } absolute flex h-full w-full items-center justify-center bg-sky-500 bg-opacity-0 transition-colors duration-150 ease-in-out hover:bg-opacity-70`}
      >
        <a
          href={project.attributes.repoURL}
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa-brands fa-github absolute right-4 top-4 animate-pulse text-3xl text-white"></i>
        </a>

        <a
          href={project.attributes.siteURL}
          target="_blank"
          rel="noreferrer noopener"
          className="select-none break-all text-3xl font-bold uppercase text-white"
        >
          {project.attributes.name}
        </a>
      </div>
    </div>
  )
}

export default Project
