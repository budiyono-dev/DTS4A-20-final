import axios from 'axios'

const doGet = ( url, params) => {
  const method = 'GET'
  return axios({url, method, params})
}

export { doGet }
