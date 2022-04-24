import { IResume } from '../interfaces'

interface Props {
  resume: IResume
}

const CVandMailButton = ({ resume }: Props) => {
  return (
    <div className="my-5 flex items-center justify-center space-x-7">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={resume.url}
        className="rounded-md bg-sky-400 px-4 py-3 font-medium text-white shadow-lg transition-all hover:bg-sky-500 hover:shadow-xl"
      >
        Download CV
        <i className="fa-solid fa-arrow-down ml-3 animate-bounce"></i>
      </a>
      <a
        href="mailto:brunoveranoc@gmail.com"
        className="cursor-pointer rounded-md bg-gray-200 py-3 px-4 transition-colors hover:bg-gray-300"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  )
}

export default CVandMailButton
