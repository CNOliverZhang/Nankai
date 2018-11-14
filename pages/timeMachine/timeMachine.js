// pages/timeMachine/timeMachine.js
Page({


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