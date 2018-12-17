Page({

  data: {
    avatar: "https://image.potatofield.cn/18-10-21/43988906.jpg",
  },
  
  //接受昵称
  onLoad: function (options) {
	  this.setData({
		  nickname: options.nickname
	  })
  },

  //返回昵称
  prev: function () {
    wx.redirectTo({
      url: '../byeEighteen',
    })
  },

  //用户自主选择图片上传
  fromAlbum: function () {
    var that = this;
    wx.chooseImage({
      count: 1, //最多可以选择的图片
      sourceType: ['album', 'camera'], //用户可以选择拍照或者相册上传
      success: function (res) {
        wx.showToast({
          title: '上传成功',
          icon: 'suceess',
          duration: 5000,
          mask: true,
        })
        //把照片传给avatar
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          avatar: tempFilePaths[0], //res.tempFilePaths是一个string数组
        })
        wx.redirectTo({
          url: '../answer/answer?nickname=' + that.data.nickname + '&avatar=' + that.data.avatar,
        })
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
      wx.showToast({
        title: '已获得头像',
        icon: 'suceess',
        duration: 5000,
        mask: true,
      })
      that.setData({
        name: e.detail.userInfo.nickName,
        avatar: e.detail.userInfo.avatarUrl
      })
      wx.downloadFile({
        url: e.detail.userInfo.avatarUrl,
        success: function (res) {
          //把照片传给avatar
          that.setData({
            avatar: res.tempFilePath,
          })
          wx.redirectTo({
            url: '../answer/answer?nickname=' + that.data.nickname + '&avatar=' + that.data.avatar,
          })
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
  }
})