import axios from 'axios';

// 1. 创建 axios 实例
// 2. 设置基础 URL
// 3. 设置超时时间
// 4. 添加请求拦截器和响应拦截器
const request = axios.create({
  baseURL: 'https://mock.apipark.cn/m1/4608787-0-default', //
  timeout: 5000, // 请求超时时间
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => 
    // 在发送请求之前做些什么
     config
  ,
  (error) => 
    // 对请求错误做些什么
     Promise.reject(error)
  
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => 
    // 对响应数据做点什么
     response.data
  ,
  (error) => 
    // 对响应错误做点什么
     Promise.reject(error)
  
);

export { request };
