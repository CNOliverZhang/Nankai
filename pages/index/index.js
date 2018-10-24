const app = getApp()

Page({

  data: {

  },

  //头像生成器
  gotoAvatarCreator: function () {
    wx.navigateTo({
      url: '../avatarCreator/avatarCreator',
    })
  },

  //海报生成器
  gotoPosterCreator: function () {
    wx.navigateTo({
      url: '../posterCreator/posterCreator',
    })
  },

  //用户点击右上角分享
  onShareAppMessage: function (res) {
    return {
      title: "南开大学团委服务平台",
      imageUrl: '../../images/share.jpg',
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

  //呼出菜单
  actionSheet: function() {
    wx.showActionSheet({
      itemList: ['关于本程序', '建议与反馈'],
      success(res) {
        if (res.tapIndex === 0) {
          wx.navigateTo({
            url: '../about/about',
          })
        } else if (res.tapIndex === 1) {
          wx.navigateTo({
            url: '../feedback/feedback'
          })
        }
      }
    })
  }
})