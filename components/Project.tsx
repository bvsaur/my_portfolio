import Image from 'next/image'
import { useState } from 'react'
import { IProject } from '../interfaces'
import { urlFor } from '../libs/sanity'

interface Props {
  project: IProject
}

const Project = ({
  project: { name, provider, image, siteURL, repoURL },
}: Props) => {
  const [show, setShow] = useState(false)
  return (
    <div
      className="relative h-56 w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Image
        src={urlFor(image).url()}
        layout="fill"
        objectFit="scale-down"
        objectPosition="center"
      />
      <div
        className={`${
          !show && 'hidden'
        } absolute flex h-full w-full items-center justify-center bg-sky-500 bg-opacity-0 transition-colors duration-150 ease-in-out hover:bg-opacity-70`}
      >
        <a href={repoURL} target="_blank" rel="noreferrer noopener">
          <i
            className={`fa-brands fa-${provider} absolute right-4 top-4 animate-pulse text-3xl text-white`}
          ></i>
        </a>

        <a
          href={siteURL}
          target="_blank"
          rel="noreferrer noopener"
          className="select-none break-all text-3xl font-bold uppercase text-white"
        >
          {name}
        </a>
      </div>
    </div>
  )
}

export default Project
