import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/brianverb/eportfolio-fake-json-server`,
  withCredentials: false, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getBlogs() {
    return apiClient.get('/blogs')
  },
  getBlog(id) {
    return apiClient.get('/blogs/' + id)
  }
}
