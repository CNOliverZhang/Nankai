Page({

  data: {
    shareImage: "https://image.potatofield.cn/18-12-17/61841224.jpg",
  },

  onLoad: function (options) {
    var that = this
    wx.downloadFile({
      url: that.data.shareImage,
      success: function (res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          shareImage: tempFilePath
        })
      }
    })
    that.setData({
      imagePath: options.imagePath,
      category: options.category,
      remark: options.remark,
      nickname: options.nickname
    })
  },

  //保存图片
  savePhoto:function() {
    var that=this;
    wx.saveImageToPhotosAlbum({
      filePath:that.data.imagePath,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333'
        })
      },
      fail:function() {
        wx.showToast({
          title: "保存失败",
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  //返回主页
  return: function() {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },

  onShareAppMessage: function () {
    return {
      path: "/pages/timeMachine/byeEighteen/byeEighteen",
      title: "回首2018，快来测试你的南开气质吧~",
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