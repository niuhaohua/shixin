import axios from 'axios'
let root = '/apis'
import {
  Dialog
} from 'vant'
function apiService(url, method, data, success, failure) {
  axios({
    // root:root,
    method: method,
    url: root+url,
    // data: method === 'POST' || method === 'PUT' ? data : null,
    // params: method === 'GET' || method === 'DELETE' ? data : null,
    params: data,
    withCredentials: false
  }).then(res => {
    console.log(res)
    if (res.status === 200 && res.data.status === 0) {
      if (success) {
        success(res.data)
      } else {
        Dialog.alert({
          message: '请解析返回数据'
        })
      }
    } else {
      if(res.status === 200){
        failure(res.data.status)
      }else{
        failure(res.status)
      }
    }
  }).catch(function (err) {
    failure(err.status)
  })
}


export default {
  get: function (url, params, success, failure) {
    return apiService(url, 'GET', params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiService(url, 'POST', params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiService(url, 'PUT', params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiService(url, 'DELETE', params, success, failure)
  }
}