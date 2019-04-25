// pages/tutorial/tutorial.js
var app = getApp();
var __place_info = require("../src/tutorialdata.js");
var __drawlots = require('../src/drawlots/imageurl.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screeninfo:{},
    place_chosen:0,
    place_info:{},
    image_path: '',
    shareImage: 'https://image.potatofield.cn/%E5%88%86%E4%BA%AB%E5%9B%BE.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      screeninfo:app.globalData.screeninfo
    });
    this.setData({
      place_chosen:options.place,
      image_path:__drawlots.images[options.place],
      place_info:__place_info.data[options.place]
    });
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

  onShareAppMessage: function () {
    let that = this
    return {
      title: '五一去哪儿',
      imageUrl: that.data.shareImage,
      success: function (res) {
        wx.showToast({
          title: "分享成功",
          icon: 'success',
          duration: 1500
        })
      },
      fail: function (res) {
        wx.showToast({
          title: "分享失败",
          icon: 'none',
          duration: 1500
        })
      }
    }
  }
})