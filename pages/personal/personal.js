// pages/personal/personal.js
import request from '../../utils/request.js'

let startY = 0;
let moveY = 0;
let moveDistance = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(0)',
    coverTransition: '',
    userInfo: '',
    recentPlayList: []
  },

  getRecentUserPlayList(userId) {
    request('/user/record',{uid:userId,type:0}).then((result) => {
      // console.log(result)
      let index = 0
      let recentList = result.allData.map(item => {
        item.id = index++
        return item
      })
      this.setData({ recentPlayList: result.allData})
    },(reason) => {
      console.log(reason)
    })
  },

  handleTouchStart(event) {
    this.setData({coverTransition:''})
    startY = event.touches[0].clientY
  },

  handleTouchMove(event) {
    moveY = event.touches[0].clientY
    moveDistance = moveY - startY
    // console.log(moveDistance)
    if (moveDistance <= 0){
      return
    }
    if (moveDistance >= 80){
      moveDistance = 80
    }
    this.setData({ coverTransform: `translateY(${moveDistance}rpx)`});
  },

  handleTouchEnd() {
    this.setData({ coverTransform: `translateY(0)`})
    this.setData({coverTransition:'transform 1s linear'})
  },  

  toLogin() {
    wx.navigateTo({
      url: '../login/login',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = wx.getStorageSync('userInfo')
    if(userInfo){
      this.setData({ userInfo: JSON.parse(userInfo) })
    }
    this.getRecentUserPlayList(this.data.userInfo.userId)
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