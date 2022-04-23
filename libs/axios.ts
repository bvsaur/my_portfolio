import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
})

axiosClient.defaults.headers.common[
  'Authorization'
] = `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`

export default axiosClient
