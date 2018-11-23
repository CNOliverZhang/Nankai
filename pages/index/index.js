const app = getApp()

Page({

  data: {
    imageUrl: 'https://image.potatofield.cn/18-10-24/3328292.jpg',
  }, 

  onLoad: function() {
    var that = this
    wx.downloadFile({
      url: this.data.imageUrl,
      success: function(res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imageUrl: tempFilePath
        })
      }
    })
  },
  
  //改革开放
  gotoReformForty: function () {
    wx.navigateTo({
      url: '/pages/reformForty/reformForty',
    })
  },

  //许愿2019
  gotoFlagNineteen: function () {
    wx.navigateTo({
      url: '/pages/wishNineteen/wishNineteen',
    })
  },

  //抽奖抽签小助手
  gotoLottery: function () {
    wx.navigateTo({
      url: '/pages/lottery/lottery',
    })
  },

  //头像生成器
  gotoAvatarCreator: function() {
    wx.navigateTo({
      url: '/pages/avatarCreator/avatarCreator',
    })
  },

  //时光机
  gotoTimeMachine: function() {
    wx.navigateTo({
      url: '/pages/timeMachine/timeMachine',
    })
  },

  //用户点击右上角分享
  onShareAppMessage: function(res) {
    return {
      title: "南开大学团委服务平台",
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

  //呼出菜单
  actionSheet: function() {
    wx.showActionSheet({
      itemList: ['关于本程序', '建议与反馈'],
      success(res) {
        if (res.tapIndex === 0) {
          wx.navigateTo({
            url: '/pages/about/about',
          })
        } else if (res.tapIndex === 1) {
          wx.navigateTo({
            url: '/pages/feedback/feedback'
          })
        }
      }
    })
  }
})