const app = getApp();

Page({

  data: {
    avatar: "https://image.potatofield.cn/18-10-21/43988906.jpg",
    background: "https://image.potatofield.cn/18-10-21/91534259.jpg",
    share: "https://image.potatofield.cn/18-10-21/60370926.jpg",
    showAvatarHolder: false,
  },

  //下载默认头像，背景图及分享图至临时目录
  onLoad: function() {
    var that = this;
    wx.downloadFile({
      url: that.data.avatar,
      success: function(res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          avatar: tempFilePath
        })
      }
    })
    wx.downloadFile({
      url: that.data.background,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          background: tempFilePath
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

  //采用canvas方法绘图
  createAvatar: function () {
    var that = this;
    var context = wx.createCanvasContext('avatarCanvas');
    //背景图：校徽
    var background = that.data.background;
    context.drawImage(background, 0, 0, 600, 600);
    //获取尺寸用于计算裁剪方案
    wx.getImageInfo({
      src: that.data.avatar,
      success: function(res) {
        that.setData({
          width: res.width,
          height: res.height,
        })
      }
    })
    //等待获取图片尺寸，延迟计算
    setTimeout(function() {
      var width = that.data.width
      var height = that.data.height
      var xClipFrom = 0;
      var yClipFrom = 0;
      if (width > height) {
        xClipFrom = (width - height) / 2;
        width = height;
      }
      else {
        yClipFrom = (height - width) / 2;
        height = width;
      }
      var avatar = that.data.avatar;
      context.arc(300, 300, 180, 0, 2 * Math.PI);
      context.clip();
      context.drawImage(avatar, xClipFrom, yClipFrom, width, height, 120, 120, 360, 360);
      context.draw();
    }, 2000)
    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'avatarCanvas',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          that.setData({
            imagePath: tempFilePath, //将生成的图片路径传入前端html显示
          });
        },
        //生成失败
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

  //用户自主选择图片上传
  fromAlbum: function () {
    var that = this;
    wx.chooseImage({
      count: 1, //最多可以选择的图片
      sourceType: ['album', 'camera'], //用户可以选择拍照或者相册上传
      success: function (res) {
        //把照片传给avatar用来绘图
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          avatar: tempFilePaths[0], //res.tempFilePaths是一个string数组
        })
        //提示框
        wx.showToast({
          title: '正在绘图',
          icon: 'loading',
          mask: true,
          duration: 5000
        })
        //canvas绘图
        that.createAvatar();
        //延迟显示图片
        setTimeout(function () {
          wx.hideToast();
          that.setData({
            showAvatarHolder: true
          });
        }, 4000)
      },
      //上传失败
      fail: function (res) {
        wx.showToast({
          title: '上传失败',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },

  //授权上传头像
  bindGetUserInfo: function (e) {
    var that = this;
    //成功获取授权
    if (e.detail.userInfo) {
      that.setData({
        name: e.detail.userInfo.nickName,
        avatar: e.detail.userInfo.avatarUrl
      })
      wx.downloadFile({
        url: e.detail.userInfo.avatarUrl,
        success: function (res) {
          //把照片传给avatar用来绘图
          that.setData({
            avatar: res.tempFilePath,
          })
          //提示框
          wx.showToast({
            title: '正在绘图',
            icon: 'loading',
            mask: true,
            duration: 5000
          })
          //canvas绘图
          that.createAvatar();
          //延迟显示图片
          setTimeout(function () {
            wx.hideToast();
            that.setData({
              showAvatarHolder: true
            });
          }, 4000)
        },
        //下载头像失败
        fail: function (res) {
          wx.showToast({
            title: '头像获取失败',
            icon: 'none',
            duration: 1500
          })
        }
      })
    }
    //获取授权失败
    else {
      wx.showToast({
        title: '授权失败',
        icon: 'none',
        duration: 1500
      })
    }
  },

  //返回首页
  gotoIndex: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },

  //保存至相册
  save: function () {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      //保存成功
      success(res) {
        wx.showModal({
          content: '头像已保存到相册，赶紧换上吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            if (res.confirm) {
              that.setData({
                showAvatarHolder:false,
              })
            }
          }
        })
      },
      //保存失败
      fail: function () {
        that.setData({
          showAvatarHolder: false,
        })
        wx.showToast({
          title: "保存失败",
          icon: 'none',
          duration: 1500
        })
      }
    })
  },

  //取消保存图片
  cancel: function () {
    var that = this;
    that.setData({
      showAvatarHolder: false,
    })
    wx.showToast({
      title: "取消保存",
      icon: 'none',
      duration: 1500
    })
  },

  //分享
  onShareAppMessage: function (res) {
    return {
      title: "快来生成你的南开头像",
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