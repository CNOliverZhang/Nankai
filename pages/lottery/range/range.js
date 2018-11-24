// pages/lottery/range/range.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      mode: options.mode
    })
  },

  //起始号码
  getStart: function (e) {
    this.setData({
      start: Number(e.detail.value)
    })
  },

  //结束号码
  getEnd: function (e) {
    this.setData({
      end: Number(e.detail.value)
    })
  },

  //下一页
  next: function () {
    if (!this.data.start) {
      wx.showModal({
        title: '输入错误',
        content: '起始号码不能为空',
        showCancel: false
      })
    } else if (!this.data.end) {
      wx.showModal({
        title: '输入错误',
        content: '结束号码不能为空',
        showCancel: false
      })
    } else if (this.data.start >= this.data.end) {
      wx.showModal({
        title: '输入错误',
        content: '结束号码不能小于或等于起始号码',
        showCancel: false
      })
    } else {
      wx.redirectTo({
        url: '../number/number?mode=' + this.data.mode + '&start=' + this.data.start + '&end=' + this.data.end,
      })
    }
  },

  //返回
  prev: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
})