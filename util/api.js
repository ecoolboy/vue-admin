import request from './request'
export const getBrand=()=>request('/brand/detail/{brandId}','GET','x')
