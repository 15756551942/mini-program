// pages/index/index.js
import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    recommendList:[],
    topList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request('/banner',{type:2}).then((result) => {
      this.setData({
        bannerList: result.banners
      })
    },(reason) => {
      console.log(reason)
    });

    request('/personalized',{limit:10}).then((result) => {
      this.setData({recommendList: result.result})
    },(reason) => {
      console.log(reason)
    });

    let index = 0;
    let resultArr = [];
    while(index<5){
      request('/top/list', { idx: index++ }).then((result) => {
        // console.log(result)
        let topListItem = { name: result.playlist.name,tracks:result.playlist.tracks};
        resultArr.push(topListItem);
        this.setData({ topList: resultArr });
      }, (reason) => {
        console.log(reason)
      })
    }
    // console.log(resultArr)
    
    // console.log(this.data.topList)
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