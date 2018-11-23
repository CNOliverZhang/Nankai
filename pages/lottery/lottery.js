Page({
  data: {

  },

  onLoad: function (options) {

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
      imageUrl: this.data.share,
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