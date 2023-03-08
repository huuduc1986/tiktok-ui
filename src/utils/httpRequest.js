import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/', //process.env.REACT_APP_BASE_URL
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const get = async (path, options={}) => {
  const respon = await httpRequest.get(path, options) ;
  return respon.data
}

export default httpRequest ;

//'https://tiktok.fullstack.edu.vn/api/'