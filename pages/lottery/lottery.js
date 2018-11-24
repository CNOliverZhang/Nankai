Page({
  data: {
    imageUrl: 'https://image.potatofield.cn/18-11-24/76817672.jpg'
  },

  onLoad: function (options) {
    var that = this
    wx.downloadFile({
      url: that.data.imageUrl,
      success: function(res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          imageUrl: tempFilePath
        })
      }
    })
  },

  //抽签模式
  singleMode: function () {
    wx.redirectTo({
      url: './range/range?mode=single',
    })
  },

  //抽奖模式
  multipleMode: function () {
    wx.redirectTo({
      url: './range/range?mode=multiple',
    })
  },

  //返回
  prev: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  //分享
  onShareAppMessage: function (res) {
    return {
      title: "抽奖抽签小助手",
      imageUrl: this.data.imageUrl,
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
  },
})