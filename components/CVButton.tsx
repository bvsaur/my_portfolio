import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import axiosClient from '../libs/axios'

const CVButton = () => {
  const [url, setURL] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchURL = async () => {
      try {
        const res: AxiosResponse = await axiosClient.get('/cv')
        setURL(res.data.data.attributes.url)
        setError(false)
      } catch (error) {
        console.log('errooor')
        setError(true)
      }
    }

    if (!url && !error) {
      fetchURL()
    }
  }, [url])

  return (
    <div className="my-5 flex items-center justify-center space-x-7">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={url}
        className="rounded-md bg-sky-400 px-4 py-3 font-medium text-white shadow-lg transition-all hover:bg-sky-500 hover:shadow-xl"
      >
        {url ? 'Download CV' : 'Loading...'}
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

export default CVButton
