// pages/timeMachine/timeMachine.js
Page({

  //许愿2019
  gotoFlagNineteen: function () {
    wx.navigateTo({
      url: '/pages/timeMachine/wishNineteen/wishNineteen',
    })
  },

  //回首2018
  gotoByeEighteen: function () {
    wx.navigateTo({
      url: './byeEighteen/byeEighteen',
    })
  },

  //改革开放知多少
  gotoReformForty: function () {
    wx.navigateTo({
      url: './reformForty/reformForty',
    })
  },

  //我与南开谈恋爱
  gotoLoveNankai: function () {
    wx.navigateTo({
      url: './loveNankai/loveNankai',
    })
  },

  //九九南开
  gotoNinetyNine: function () {
    wx.navigateTo({
      url: './ninetyNine/ninetyNine',
    })
  },

  ///荷花节
  gotoLotus: function () {
    wx.navigateTo({
      url: './lotus/lotus',
    })
  },

  prev: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
})