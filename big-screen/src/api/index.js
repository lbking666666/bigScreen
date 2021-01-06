import { getApi, postApi } from './config.js'
import mock from './mock.js'

 export function addAreaUser(data) {
     const url = '/wep-oms/bigScreen/addAreaUser';
     return getApi(url, data)
 }

 export function addAreaExternal(data) {
     const url = '/wep-oms/bigScreen/addAreaExternal';
     return getApi(url, data)
 }

 export function areaExternalRank(data) {
     const url = '/wep-oms/bigScreen/areaExternalRank';
     return getApi(url, data)
 }



 export function showWechat(data) {
     const url = '/wep-oms/bigScreen/showWechat';
     return getApi(url, data)
 }

 export function trends(data) {
     const url = '/wep-oms/bigScreen/trends';
     return getApi(url, data)
 }

 export function areaExternal(data) {
     const url = '/wep-oms/bigScreen/areaExternal';
     return getApi(url, data)
 }


 export function showTask(data) {
     const url = '/wep-oms/bigScreen/showTask';
     return getApi(url, data)
 }


 export function showArea(data) {
     const url = '/wep-oms/bigScreen/showArea';
     return getApi(url, data)
 }
 export function showExternal(data) {
     const url = '/wep-oms/bigScreen/showExternal';
     return getApi(url, data)
 }