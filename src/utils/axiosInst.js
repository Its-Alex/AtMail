const axios = require('axios')

module.exports = () => {
  return axios.create({
    baseURL: 'http://localhost:3005/',
    timeout: 1000,
    headers: {
      'Authorization': global.localStorage.getItem('token')
    }
  })
}
