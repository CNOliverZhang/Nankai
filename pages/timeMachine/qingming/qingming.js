const app = getApp()

Page({
  data: {
    words:[
      {
        style: 'content hidden',
        text:'渤海之滨',
      },
      {
        style: 'content hidden',
        text:'白河之津',
      },
      {
        style: 'content hidden',
        text: '巍巍我南开精神',
      },
      {
        style: 'content hidden',
        text: '　',
      },
      {
        style: 'content hidden',
        text: '在南开发展的漫长岁月中',
      },
      {
        style: 'content hidden',
        text: '一批又一批南开人',
      },
      {
        style: 'content hidden',
        text: '为了中华民族的复兴',
      },
      {
        style: 'content hidden',
        text: '鞠躬尽瘁 死而后已',
      },
      {
        style: 'content hidden',
        text: '　',
      },
      {
        style: 'content hidden',
        text: '无论在战场上浴血奋战',
      },
      {
        style: 'content hidden',
        text: '还是在教室里教书育人',
      },
      {
        style: 'content hidden',
        text: '无论在中南海运筹帷幄',
      },
      {
        style: 'content hidden',
        text: '还是在实验室夙兴夜寐',
      },
      {
        style: 'content hidden',
        text: '他们穷尽自己的一生',
      },
      {
        style: 'content hidden',
        text: '把鲜血和汗水洒在共和国需要的地方',
      },
      {
        style: 'content hidden',
        text: '　',
      },
      {
        style: 'content hidden',
        text: '如今 在他们的身后',
      },
      {
        style: 'content hidden',
        text: '我们缅怀他们',
      },
      {
        style: 'content hidden',
        text: '追忆他们',
      },
      {
        style: 'content hidden',
        text: '继承他们的遗志',
      },
      {
        style: 'content hidden',
        text: '　',
      },
      {
        style: 'content hidden',
        text: '不忘先贤',
      },
      {
        style: 'content hidden',
        text: '砥砺前行',
      },
      {
        style: 'content hidden',
        text: '　',
      },
    ],
    startButtonStyle:'bar-button hidden',
    showLoad: true,
  },

  //显示文字
  onLoad: function () {
    let that = this
    wx.downloadFile({
      url: 'https://image.potatofield.cn/%E5%88%86%E4%BA%AB%E5%9B%BE.jpg',
      success: function (res) {
        let share = res.tempFilePath
        that.setData({
          share: share
        })
      }
    })
    wx.showModal({
      title: '是否开启声音',
      content: '您是否希望开启背景音乐？',
      success: function(res) {
        if (res.confirm) {
          wx.downloadFile({
            url: 'https://music.163.com/song/media/outer/url?id=1943186.mp3',
            success: function (res) {
              let music = wx.createInnerAudioContext()
              music.src = res.tempFilePath
              music.play()
              that.setData({
                showLoad: false
              })
              that.showText()
            }
          })
        } else {
          that.setData({
            showLoad: false
          })
          that.showText()
        }
      }
    })
    
  },

  showText: function() {
    let that = this
    let delay = 1000
    for (let i = 0; i < that.data.words.length; i++) {
      let target = 'words[' + String(i) + '].style'
      setTimeout(function () {
        that.setData({
          [target]: 'content show'
        })
      }, delay)
      delay += 1000
    }
    setTimeout(function () {
      that.setData({
        startButtonStyle: 'bar-button show'
      })
    }, delay)
  },

  //下一页
  next:function(e){
    wx.redirectTo({
      url: './celebrities/celebrities',
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
})
