//api方法封装
import axios from 'axios';
/*import store from '@/store'*/

//设置请求超时时间
axios.defaults.timeout = 20000;
// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
  /*if(response.data.message == '员工账号已禁用!' || response.data.message =='员工已离职!'){
    window.location.href = '/login'
  }else{
      if (response.data.message === '未登录') {
        response.data.code =1
        store.dispatch('IS_LOGIN',false);
      }else{
        store.dispatch('IS_LOGIN',true);
      }
  }*/
  return response
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break
      case 404:
        err.message = 'not found'
        break
      case 408:
        err.message = '请求超时'
        break
      case 504:
        err.message = '网关超时'
        break
      default:
        err.message = '网络错误'
        break
    }
    console.log('after')
  }
})
//get 方法
export function getApi(url, data) {
  return axios.get(url, {params:data}).then((res) => {
    return Promise.resolve(res.data)
  })
}

//post 方法
export function postApi(url, data) {
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}
