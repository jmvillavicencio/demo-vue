import axios from 'axios'

const API = process.env.APIURL;

export default axios.create({
  baseURL: API,
})
