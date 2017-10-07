const axios = require('axios')

module.exports = () => {
  return axios.create({
    baseURL: 'https://api.itsalex.fr/',
    timeout: 1000,
    headers: {
      'Authorization': 'Bearer ' + global.localStorage.getItem('token')
    }
  })
}
