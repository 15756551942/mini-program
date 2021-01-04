// pages/video/video.js
import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [],
    navId: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request('/video/group/list').then((result) => {
      console.log(result)
      let videoGroupList = result.data.slice(0, 14), navId = result.data[0].id
      this.setData({ videoGroupList,navId})
    },(reason) => {
      console.log(reason)
    })
  },

  changeNav(event) {
    let navId = event.currentTarget.id
    this.setData({ navId:+navId })
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