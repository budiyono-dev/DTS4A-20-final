import axios from 'axios'

const doGet = ( url, params) => {
  const method = 'GET'
  return axios({url, method, params})
}

const doGetUUID = ( url) => {
  const method = 'GET'
  return axios({url, method})
}

export { doGet,doGetUUID }
