//index.js
//获取应用实例
const app = getApp();
var __drawlots = require('src/drawlots/imageurl.js');

Page({
  data: {
    title_animation_1:{},
    screeninfo:{},
    title_animation_2:{},
    title_animation_cloud1:{},
    title_animaiton_cloud2:{},
    title_animation_paperplane:{},
    blah_animation_1:{},
    blah_animation_2:{},
    blah_animation_3:{},
    button_animation:{},
    /////////////////////////////////////////////////////////////
    drawlots_pushin_animation:{},
    place_number:12,
    place_chosen:0,
    z_index:-100,
    image_path:"",
    shareImage: 'https://image.potatofield.cn/%E5%88%86%E4%BA%AB%E5%9B%BE.png'
  },
  onLoad:function(){
    //调用wx.getSystemInfo接口,获取屏幕大小
    var that = this;
    wx.downloadFile({
      url: that.data.shareImage,
      success: function (res) {
        that.setData({
          shareImage: res.tempFilePath
        })
      }
    })
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          screeninfo:{
            height:res.windowHeight,
            width:res.windowWidth
          }
        });
      },
    });
    app.globalData.screeninfo = this.data.screeninfo;
    var ani_1 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
      delay: 800
    });
    ani_1.opacity(1).translate(30).step();

    var ani_2 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
      delay: 800
    });
    ani_2.opacity(1).translate(-30).step();

    var ani_3 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
      delay: 500
    });
    ani_3.opacity(1).translate(50).step();

    var ani_4 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
      delay: 500
    });
    ani_4.opacity(1).translate(-50).step();

    var ani_5 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
      delay: 500
    });
    ani_5.opacity(1).translate(20, -20).step();

    var ani_6 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
      delay: 1200
    });
    ani_6.opacity(1).translate(0, -5).step();

    var ani_7 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
      delay: 1700
    });
    ani_7.opacity(1).translate(0, -5).step();

    var ani_8 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
      delay: 2200
    });
    ani_8.opacity(1).translate(0, -5).step();

    var ani_9 = wx.createAnimation({
      duration: 500,
      timingFuction: 'ease',
      delay: 2800
    });
    ani_9.opacity(1).step();

    this.setData({
      title_animation_1: ani_1.export(),
      title_animation_2: ani_2.export(),
      title_animation_cloud1: ani_3.export(),
      title_animation_cloud2: ani_4.export(),
      title_animation_paperplane: ani_5.export(),
      blah_animation_1: ani_6.export(),
      blah_animation_2: ani_7.export(),
      blah_animation_3: ani_8.export(),
      button_animation: ani_9.export()
    });

  },
  onReady: function () {

  },

  chouqian:function(){
    var num = Math.floor(Math.random() * this.data.place_number);
    this.setData({
      place_chosen: num,
      image_path: __drawlots.images[num]
    })
  },

  drawLots:function(){
    this.chouqian();
    var ani_1 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
      delay: 0
    });
    ani_1.opacity(0).translate(0,-30).step();
    this.setData({
      index_fade_animation:ani_1.export()
    });
    var ani_2 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
      delay: 300
    });
    ani_2.opacity(1).translate(0, -30).step();
    this.setData({
      drawlots_pushin_animation: ani_2.export(),
      z_index:100
    });
  },

  tutorialPage:function(){
    wx.navigateTo({
      url: 'tutorial/tutorial?place='+this.data.place_chosen,
    })
  },

  drawlotsAgain:function(){
    this.chouqian();
    var ani_1 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
      delay: 0
    });
    ani_1.opacity(1).step();
    var ani_2 = wx.createAnimation({
      duration: 10,
      timingFunction: 'ease',
      delay: 0
    });
    ani_2.opacity(0).step();
    this.setData({
      index_fade_animation: ani_1.export(),
      drawlots_pushin_animation: ani_2.export(),
      z_index:-100
    });
  },

  onShareAppMessage: function () {
    let that = this
    return {
      title: '五一去哪儿',
      imageUrl: that.data.shareImage,
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
