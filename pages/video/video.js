// pages/video/video.js
import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [],
    navId: [],
    videoList: [],
    videoId: [],
    videoPlayTime: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    request('/video/group/list').then((result) => {
      // console.log(result)
      let videoGroupList = result.data.slice(0, 14),
        navId = result.data[0].id
      this.setData({
        videoGroupList,
        navId
      })
      this.getVideoList(navId)
    }, (reason) => {
      console.log(reason)
    })
    
  },

  changeNav(event) {
    let navId = event.currentTarget.id
    this.setData({
      navId: +navId,
      videoList: []
    })
    wx.showLoading({
      title: '正在加载',
    })
    this.getVideoList(this.data.navId)
  },
  
  getVideoList(navId) {
    request('/video/group', {
      id: navId
    }).then((result) => {
      // console.log(result)
      let index = 0
      let videoList = result.datas.map(item => {
        item.id = index++
        return item
      })
      this.setData({ videoList })
    }, (reason) => {
      console.log(reason)
    })
    wx.hideLoading()
  },

  handlePlay(event) {
    let vid = event.currentTarget.id
    // this.vid !== vid && this.videoContext && this.videoContext.stop()
    // this.vid = vid
    this.setData({videoId:vid})
    this.videoContext = wx.createVideoContext(vid)
    this.videoContext.play()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})