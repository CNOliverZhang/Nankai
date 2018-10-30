// pages/timeMachine/timeMachine.js
Page({

  gotoNinetyNine: function () {
    wx.navigateTo({
      url: './ninetyNine/ninetyNine',
    })
  },

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