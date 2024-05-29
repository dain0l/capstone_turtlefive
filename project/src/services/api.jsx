import axios from 'axios';

// axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // 서버 등록시 수정 예정!!!
  // baseURL: 'https://www.docturtle.site/api',

  headers: {
    'Content-Type': 'application/json',
  },
     withCredentials: true
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default api;
