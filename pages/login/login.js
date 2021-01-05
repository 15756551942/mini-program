// pages/login/login.js
import request from '../../utils/request.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:''
  },

  handleInput(event) {
    // console.log(event)
    let type = event.currentTarget.id
    this.setData({ [type]: event.detail.value})
  },

  login() {
    let {phone,password} = this.data
    if(!phone) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
      return
    }
    let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/
    if(!phoneReg.test(phone)) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
      return
    }
    if(!password) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return
    }
    wx.showToast({
      title: '前端验证通过'
    })
    request('/login/cellphone',{phone,password,isLogin:true}).then((result) => {
      // console.log(result)
      if(result.code === 200){
        wx.showToast({
          title: '登录成功'
        })
        wx.reLaunch({
          url: '../personal/personal',
        })
        wx.setStorageSync('userInfo', JSON.stringify(result.profile))
      } else if (result.code === 501) {
        wx.showToast({
          title: result.msg
        })
      } else if (result.code === 502) {
        wx.showToast({
          title: result.msg
        })
      }else if(result.code === 509){
        wx.showToast({
          title: result.msg
        })
      }else {
        wx.showToast({
          title: '登录失败',
        })
      }
    },(reason) => {
      console.log(reason)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})