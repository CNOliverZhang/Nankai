const app = getApp();

Page({

  data: {
    wish: "允公允能，日新月异",
    avatar: "https://image.potatofield.cn/18-10-21/43988906.jpg",
    nickname: "南开人",
    share: "https://image.potatofield.cn/18-10-24/70437359.jpg",
  },

  //下载默认头像及分享图片至临时目录
  onLoad: function () {
    var that = this;
    wx.downloadFile({
      url: that.data.avatar,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          avatar: tempFilePath
        })
      }
    })
    wx.downloadFile({
      url: that.data.share,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          share: tempFilePath
        })
      }
    })
  },

  //返回主界面按钮
  prev: function() {
    wx.redirectTo({
      url: '../index/index',
    })
  },
  
  //进入下一步并传值
  next: function() {
    var that = this
    wx.redirectTo({
      url: '../posterCreator__avatar/posterCreator__avatar?wish=' + that.data.wish + '&avatar=' + that.data.avatar+ '&nickname='+that.data.nickname,
    })
  },

//获取当前页面输入框内容
  bindKeyInput: function(e) {
    this.data.wish = e.detail.value;
  },

  //分享
  onShareAppMessage: function (res) {
    return {
      title: "生成你的九九南开专属海报",
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