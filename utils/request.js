import config from './config.js'

export default (url,data={},method='GET') => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      header: {
        cookie: wx.getStorageSync('cookies')?wx.getStorageSync('cookies').find(item => item.indexOf('MUSIC_U') !== -1):''
      },
      success: (result) => {
        if(data.isLogin){
          wx.setStorageSync('cookies', result.cookies)
        }
        resolve(result.data);
      },
      fail: (reason) => {
        reject(reason);
      }
    })
  })
}