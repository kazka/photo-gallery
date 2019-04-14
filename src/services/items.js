import axios from 'axios'
const baseUrl = 'https://z1pa3598cb.execute-api.eu-north-1.amazonaws.com/dev/gallery/'
const headers = { 'Authorization': 'allow' }

const getIndex = () => {
  const request = axios.request({
    url: baseUrl,
    method: 'get',
    headers: headers
  })
  return request.then(response => response.data.objects)
}

const getPath = (path) => {
  console.log(baseUrl + path)
  const request = axios.request({
    url: baseUrl + path,
    method: 'get',
    headers: headers
  })
  return request.then(response => response.data.objects)
}

export default { getIndex, getPath }