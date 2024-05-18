import axios from 'axios';

// axios 인스턴스 생성
const api = axios.create({
  baseURL: 'https://docturtle.site/', // 서버 등록시 수정 예정!!!
  headers: {
    'Content-Type': 'application/json',
    
  },
  credentials: 'include'
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
