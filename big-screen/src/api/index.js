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

 export function addAreaExternal(data) {
     const url = '/screen/addAreaExternal';
     return getApi(url, data)
 }

 export function areaExternalRank(data) {
     const url = '/screen/areaExternalRank';
     return getApi(url, data)
 }



 export function showWechat(data) {
     const url = '/screen/showWechat';
     return getApi(url, data)
 }

 export function trends(data) {
     const url = '/screen/trends';
     return getApi(url, data)
 }

 export function areaExternal(data) {
     const url = '/screen/areaExternal';
     return getApi(url, data)
 }


 export function showTask(data) {
     const url = '/screen/showTask';
     return getApi(url, data)
 }


 export function showArea(data) {
     const url = '/screen/showArea';
     return getApi(url, data)
 }