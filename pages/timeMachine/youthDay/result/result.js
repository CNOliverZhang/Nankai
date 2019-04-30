const app = getApp();

Page({

  data: {
    imagePath: 'https://image.potatofield.cn/youthDay/result.png',
    shareImg: 'https://image.potatofield.cn/youthDay/share.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          window_info: {
            height: res.windowHeight,
            width: res.windowWidth
          }
        })
      },
    });
    wx.downloadFile({
      url: this.data.shareImg,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          shareImg: tempFilePath
        })
      }
    })
    this.setData({
      result: options.reslt
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this
    wx.downloadFile({
      url: this.data.imagePath,
      success: function (res) {
        let image = res.tempFilePath;
        var context = wx.createCanvasContext('resultimage');
        var window_width = that.data.window_info.width <= 600 ? that.data.window_info.width : 600;
        context.drawImage(image, 0, 0, window_width * 0.75, window_width * 1.4);
        context.stroke();
        var name = app.globalData.userInfo.nickName;
        context.setFillStyle("#000000");
        context.setFontSize(window_width * 0.040);
        context.fillText(name, window_width * 0.259, window_width * 0.72);
        context.stroke();
        var definition = app.globalData.teen[0].definition;
        context.setFontSize(window_width * 0.035);
        context.setFillStyle("#000000");
        for (var i = 0; i < definition.length; i += 16) {
          var temp = definition.slice(i, i + 16);
          context.fillText(temp, window_width * 0.1, window_width * (1.1 + i * 0.04 / 16));
        }
        context.stroke();
        var result = that.data.result;
        context.setFontSize(window_width * 0.09);
        context.setFillStyle("#97231e");
        context.setTextAlign('center');
        context.fillText(result, window_width * 0.375, window_width * 1.01);
        context.stroke();
        context.draw();
      }
    })
  },

  saveImg:function(){
    var that = this;
    wx.canvasToTempFilePath({
      canvasId: 'resultimage',
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imagePath: tempFilePath,
        });
        wx.saveImageToPhotosAlbum({
          filePath: that.data.imagePath,
          success(res) {
            wx.showModal({
              content: '图片已保存到相册，赶紧晒一下吧~',
              showCancel: false,
              confirmText: '好的',
              confirmColor: '#333',
              success: function (res) {
              }
            })
          },
          fail: function () {
            wx.showToast({
              title: "保存失败",
              icon: 'none',
              duration: 2000
            })
          }
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '图片保存失败',
          icon: 'none',
          duration: 2000
        })
      }
    });
  },
  onShareAppMessage: function (res) {
    return {
      title: "测测你是哪系青年",
      imageUrl: this.data.imageUrl,
      path: 'pages/timeMachine/youthDay/youthDay',
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