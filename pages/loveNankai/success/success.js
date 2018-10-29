// pages/loveNankai/success/success.js
Page({

  data: {
    imagePath: 'https://image.potatofield.cn/18-10-30/35045931.jpg',
    nickname: '南开人',
    level: 'normal'
  },

  onLoad: function (options) {
    var that = this;
    that.setData({
      level: options.level
    })
    wx.downloadFile({
      url: that.data.imagePath,
      success: function (res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          imagePath: tempFilePath
        })
      }
    })
  },

  createPoster: function () {
    wx.showToast({
      title: '正在绘制',
      icon: 'loading',
      duration: 10000,
      mask: true,
    })
    var that = this;
    var context = wx.createCanvasContext('poster');
    //绘制背景
    var background = this.data.imagePath;
    context.drawImage(background, 0, 0, 1620, 1080);
    //绘制昵称
    var name = that.data.nickname;
    context.setFontSize(90);
    context.setFillStyle('#ffffff');
    context.setTextAlign('left');
    context.fillText(name, 430, 170);
    context.stroke();
    //绘制等级
    var level = that.data.wish;
    if (level == 'easy') {
      level = '简单'
    } else if (level == 'normal') {
      level = '正常'
    } else {
      level = '困难'
    }
    context.setFontSize(55);
    context.setFillStyle('#ffffff');
    context.setTextAlign('center');
    context.fillText(level, 315, 400);
    context.stroke();
    context.draw();
    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'poster',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          that.setData({
            imagePath: tempFilePath,
          });
          wx.redirectTo({
            url: '../poster/poster?imagePath=' + that.data.imagePath,
          })
        },
        fail: function (res) {
          wx.showToast({
            title: '图片生成失败',
            icon: 'none',
            duration: 1500
          })
        }
      });
    }, 3000);
  },

  bindKeyInput: function (e) {
    this.setData({
      nickname: e.detail.value,
    })
  },

  bindConfirm: function () {
    this.createPoster()
  },
})