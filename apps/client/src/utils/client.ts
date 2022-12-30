import axios from 'axios'

export function getApiClient() {
  return axios.create({
    baseURL: process.env.API_BASE_URL,
  })
}
