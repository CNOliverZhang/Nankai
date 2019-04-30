//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  //处理不存在的页面
  onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/index/index'
    })
  },

  globalData: {
    userInfo: null,
    arr: [],
    teen: [
      { 'weigh': 0, 'name': '儒系青年', 'definition': '作为一枚儒系的南开青年，你坚信：必须足够努力才能看起来毫不费力！为了天下苍生，打足鸡血，积极进取，立志成为更好的自己。' },
      { 'weigh': 0, 'name': '道系青年', 'definition': '作为一枚道系的南开青年，你崇尚：清净无为，逍遥自在。喜欢转锦鲤保平安，热衷保健养生求虚命。尊崇天人合一的理念，脱不脱单全靠天意。' },
      { 'weigh': 0, 'name': '鬼系青年', 'definition': '作为一枚鬼系的南开青年，你认为自己患有：社交恐惧症，表达困难症。在大庭广众面前你害怕被别人注视，习惯昼伏夜出，在集体里毫无存在感。' },
      { 'weigh': 0, 'name': '法系青年', 'definition': '作为一枚法系的南开青年，你认为：无规矩不成方圆，一切都要照着规则来，就算是人生，也要按部就班才完整：22岁恋爱，25岁结婚，30岁之前生完孩子，50岁退休。' },
      { 'weigh': 0, 'name': '仙系青年', 'definition': '作为一枚仙系的南开青年，你习惯：用历劫的心看待水逆，用修仙的心态坚持熬夜。世间琐事自动规避，柴米油盐别来烦我。日常揽镜自照，不食人间烟火。' },
      { 'weigh': 0, 'name': '魔系青年', 'definition': '作为一枚魔系的南开青年，你总是：易燃易爆易炸毛，日常不是想打人就是想被人打。定是锱铢必较，睚眦必报，不疯魔不成活，不作死就不会死。' },
      { 'weigh': 0, 'name': '佛系青年', 'definition': '作为一枚佛系的南开青年，你相信：海纳百川有容乃大，壁立千仞无欲则刚。你追求Love&Peace，不熬夜，不早起，偶尔“朋克养生”。面对生活的困难也能与世无争，岁月静好。' }
    ]
  }
})