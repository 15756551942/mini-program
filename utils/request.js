import config from './config.js'

export default (url,data={},method='GET') => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      success: (result) => {
        resolve(result.data);
      },
      fail: (reason) => {
        reject(reason);
      }
    })
  })
}