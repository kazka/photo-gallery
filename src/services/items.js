import axios from 'axios'
const baseUrl = 'https://irwqju1tzh.execute-api.eu-north-1.amazonaws.com/dev/gallery/'

const getIndex = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data.objects)
}

export default { getIndex }