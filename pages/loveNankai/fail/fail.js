// pages/loveNankai/fail/fail.js
Page({

  data: {
    shareImage: 'https://image.potatofield.cn/18-10-30/5857730.jpg'
  },

  onLoad: function (options) {
    var that = this;
    wx.downloadFile({
      url: that.data.shareImage,
      success: function (res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          shareImage: tempFilePath
        })
      }
    })
  },

  prev: function () {
    wx.redirectTo({
      url: '../../index/index',
    })
  },

  retry: function () {
    wx.redirectTo({
      url: '../loveNankai',
    })
  },

  onShareAppMessage: function () {
    return {
      title: "快来和南开“弹”恋爱",
      path: '../loveNankai',
      imageUrl: this.data.shareImage,
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