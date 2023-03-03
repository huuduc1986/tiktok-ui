import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const get = async (path, options={}) => {
  const respon = await request.get(path, options) ;
  return respon.data
}

export default request ;