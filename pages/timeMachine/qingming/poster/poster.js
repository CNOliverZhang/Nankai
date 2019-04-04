Page({

  data: {
    oneName:'',
    content:'',
    showPoster:false
  },

  onLoad: function (options) {
    let that = this
    that.setData({
      name:options.name
    })
    wx.downloadFile({
      url: 'https://image.potatofield.cn/%E6%B5%B7%E6%8A%A5.jpg',
      success: function (res) {
        let background = res.tempFilePath
        that.setData({
          background: background
        })
      }
    })
    wx.downloadFile({
      url: 'https://image.potatofield.cn/%E5%88%86%E4%BA%AB%E5%9B%BE.jpg',
      success: function (res) {
        let share = res.tempFilePath
        that.setData({
          share: share
        })
      }
    })
  },

  onShareAppMessage: function () {
    let that = this
    return {
      title: '不忘先贤，砥砺前行 - 一起来祭奠南开先贤',
      path: 'pages/timeMachine/qingming/qingming',
      imageUrl: that.data.share
    }
  },

  write:function(e){
    this.setData({
      content: e.detail.value
    })
  },

  goBack:function(){
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  save: function(){
    var that = this;
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success(res) {
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000,
        })
      },
      fail(res) {
        wx.showToast({
          title: '保存失败',
          icon: 'none',
          duration: 2000,
        })
      }
    })
  },

  cancel: function(){
    this.setData({
      showPoster:false
    })
  },
  
  finish: function(){
    let that=this
    wx.showToast({
      title: '正在处理',
      icon: 'loading',
      duration: 10000,
    })
    let context = wx.createCanvasContext('poster')
    let content = "　　"+that.data.content
    let name = that.data.name
    let background = that.data.background
    context.drawImage(background, 0, 0, 1080, 1920)
    context.setFontSize(80)
    context.setTextAlign('left')
    context.setFillStyle('black')
    context.fillText(name, 80, 410)
    context.stroke()
    context.setFontSize(60)
    let chr = content.split("");
    let temp = "";
    let row = [];
    for (var i = 0; i < chr.length; i++) {
      if (temp.length < 12) {
        temp += chr[i];
      }
      else {
        i--;
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp);
    context.setTextAlign('left');
    for (var i = 0; i < row.length; i++) {
      context.fillText(row[i], 80, 800 + i * 100)
    }
    context.stroke()
    context.draw()
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'poster',
        success: function (res) {
          wx.hideToast()
          that.setData({
            imagePath: res.tempFilePath,
            canvasHidden: true,
            showPoster: true,
          });
        },
        fail: function (res) {
          wx.showToast({
            title: '图片生成失败',
            icon: 'none',
            duration: 2000
          })
        }
      });
    }, 500);
  }
})