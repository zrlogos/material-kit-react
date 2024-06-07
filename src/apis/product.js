import { request } from '../utils/request';

// 获取所有产品
export const getProducts = () => request({
    url: '/products',
    method: 'get',
  });

// 获取单个产品详情
export const getProductById = (id) => request({
    url: `/products/${id}`,
    method: 'get',
  });

// 添加新产品
export const addProduct = (data) => request({
    url: '/products',
    method: 'post',
    data,
  });

// 更新产品信息
export const updateProduct = (id, data) => request({
    url: `/products/${id}`,
    method: 'put',
    data,
  });

// 删除产品
export const deleteProduct = (id) => request({
    url: `/products/${id}`,
    method: 'delete',
  });
