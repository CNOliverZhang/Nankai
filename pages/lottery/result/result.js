Page({

  data: {
    imageUrl: 'https://image.potatofield.cn/18-11-24/76817672.jpg',
    current: '等待抽签',
    index: 0,
  },

  onLoad: function (options) {
    var that = this
    wx.hideShareMenu()
    wx.downloadFile({
      url: that.data.imageUrl,
      success: function (res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          imageUrl: tempFilePath
        })
      }
    })
    that.setData({
      mode: options.mode,
      start: options.start,
      end: options.end,
      result: JSON.parse(options.result),
      time: options.time
    })
  },

  //返回
  prev: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  //下一签
  next: function () {
    if (this.data.index < this.data.result.length) {
      this.setData({
        current: this.data.result[this.data.index],
        index: this.data.index + 1
      })
    } else {
      wx.showModal({
        title: '签被抽完了',
        content: '已经抽完了指定数量的签',
        showCancel: false
      })
    }
  },

  //重新抽取
  again: function () {
    var that = this
    wx.showModal({
      title: '重新抽取',
      content: '是否从已设定的号码范围中抽取？如果选择“确定”则可以继续使用刚才设定的抽取范围；如果选择“取消”，则需重新设定抽取范围',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '../number/number?mode=' + that.data.mode + '&start=' + that.data.start + '&end=' + that.data.end,
          })
        } else if (res.cancel) {
          wx.redirectTo({
            url: '../lottery',
          })
        }
      }
    })
  },

  onShareAppMessage: function () {
    return {
      path: '/pages/lottery/result/result?mode=' + this.data.mode + '&start=' + this.data.start + '&end=' + this.data.end + '&time=' + this.data.time + '&result=' + JSON.stringify(this.data.result),
      title: this.data.time + "抽奖结果",
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
  }
})