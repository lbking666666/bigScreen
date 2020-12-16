 import { getApi, postApi } from './config.js'
 //登陆接口
 export function postLogin(data) {
   const url = '/api/login';
   return postApi(url, data)
 }
 //自动登陆接口
 export function addAreaUser(data) {
   const url = '/screen/addAreaUser';
   return getApi(url, data)
 }
