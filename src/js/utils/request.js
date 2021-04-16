import axios from 'axios'

export default (url, data = {}, method = 'GET') => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      params: data,
      method
    }).then(response => {
      resolve(response)
    }).catch(failed => {
      reject(failed)
    })
  })
}
