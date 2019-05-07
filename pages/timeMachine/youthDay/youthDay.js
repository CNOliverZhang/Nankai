const app = getApp()
Page({
  data: {
    window_info:{},
    shareImg: 'https://image.potatofield.cn/youthDay/share.jpg'
  },
  testStart:function(){
    let that = this
    let arr = []
    for (var i = 0; i < 8;i++) {
      var isRepeat = false;
      var Rand = Math.random();
      var num = Math.floor(Rand * 8);
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] == num ) {
          isRepeat = true;
          i--;
        }
      }
      if(isRepeat == false){
        arr.push(num);
      }
    }
    wx.redirectTo({
      url: 'testpage/testpage?arr=' + JSON.stringify(arr),
    })
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          window_info:{
            height:res.windowHeight,
            width:res.windowWidth
          }
        })
      },
    })
    wx.downloadFile({
      url: this.data.shareImg,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          shareImg: tempFilePath
        })
      }
    })
  },
  getUserInfo:function(e)
  {
    if (e.detail.userInfo != null) {    //用户点击允许授权
      app.globalData.userInfo.imageUrl = e.detail.userInfo.avatarUrl;
      app.globalData.userInfo.nickName = e.detail.userInfo.nickName;
    }
    else{
      app.globalData.userInfo.imageUrl = '';
      app.globalData.userInfo.nickName = '同学'
    }
  },
  onShareAppMessage: function (res) {
    return {
      title: "测测你是哪系青年",
      imageUrl: this.data.shareImg,
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
