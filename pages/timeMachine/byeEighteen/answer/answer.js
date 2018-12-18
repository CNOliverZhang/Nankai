Page({

  data: {
    page: 0,
    imagePath: "https://image.potatofield.cn/18-12-18/18499258.jpg",
    activities:[
      {
        category: '学术活动',
        remark: '学术狂人',
        select: [
          { name: 'study', value: '学术1', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'study', value: '学术2', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'study', value: '学术3', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'study', value: '学术4', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' }
        ]
      },
      {
        category: '体育活动',
        remark: '体育狂人',
        select: [
          { name: 'sports', value: '体育1', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'sports', value: '体育2', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'sports', value: '体育3', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' }
        ]
      },
      {
        category: 'aaa活动',
        remark: 'aaa狂人',
        select: [
          { name: 'art', value: 'aa1', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'aa2', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'aa3', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'aa4', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'aa5', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' }
        ]
      },
      {
        category: 'bb活动',
        remark: 'bb狂人',
        select: [
          { name: 'art', value: 'bb1', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'bb2', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'bb3', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'bb4', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'bb5', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' }
        ]
      },
      {
        category: 'cc活动',
        remark: 'cc狂人',
        select: [
          { name: 'art', value: 'bb1', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'bb2', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'bb3', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'bb4', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' },
          { name: 'art', value: 'bb5', description: '活动介绍活动介绍活动介绍活动介绍活动介绍' }
        ]
      }
    ],
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      //接收头像和昵称
      avatar: options.avatar,
      nickname: options.nickname,
      //初始化第一页的标题和选项
      categoryTitle: that.data.activities[that.data.page].category,
      choices: that.data.activities[that.data.page].select.slice(),
      //初始化分类数目，当前类得分和各类得分
      categoryCount: that.data.activities.length,
      categoryScore: 0,
      scores: [],
      //将复选框置空
      isChecked: '',
      //初始化按钮文字
      buttonText: '下一页'
    })
    //初始化复选框文本样式
    var checkboxTextStyles = []
    for (var i = 0; i < that.data.choices.length; i++) {
      var tempStyle = 'content'
      checkboxTextStyles.push(tempStyle)
    }
    that.setData({
      checkboxTextStyles: checkboxTextStyles
    })
    //获取头像尺寸以用于截图（确保截图截在中间）
    wx.getImageInfo({
      src: that.data.avatar,
      success: function (res) {
        that.setData({
          avatarW: res.width,
          avatarH: res.height
        })
      }
    })
    //下载背景图
    wx.downloadFile({
      url: that.data.imagePath,
      success: function(res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          imagePath: tempFilePath
        })
      }
    })
  },  

  //改变多选框的值使得改组得分改变，文本样式改变
  checkboxChange: function(e) {
    var that = this
    for (var i = 0; i < that.data.choices.length; i++) {
      var target = 'checkboxTextStyles[' + i + ']'
      that.setData({
        [target]: 'content'
      })
    }
    for (var i = 0; i < e.detail.value.length; i++) {
      var target = 'checkboxTextStyles[' + e.detail.value[i] + ']'
      that.setData({
        [target]: 'content attend'
      })
    }
    that.setData({
      categoryScore: e.detail.value.length
    })
  },

  //下一页按钮
  next:function() {
    var that=this

    //把选择题总分并入数组
    var score = that.data.categoryScore / that.data.activities[that.data.page].select.length * 100
    var dataTarget = 'scores[' + that.data.page + ']'
    that.setData({
      [dataTarget]: score
    })
    
    //页码增加并清空复选框
    that.setData({
      page: that.data.page + 1,
      isChecked:''
    })

    //判断点击按钮之后的操作
    if (that.data.page < that.data.categoryCount) {
      //初始化标题和选项
      that.setData({
        categoryTitle: that.data.activities[that.data.page].category,
        choices: that.data.activities[that.data.page].select.slice(),
        categoryScore: 0
      })
      //初始化复选框文本样式
      var checkboxTextStyles = []
      for (var i = 0; i < that.data.choices.length; i++) {
        var tempStyle = 'content'
        checkboxTextStyles.push(tempStyle)
      }
      that.setData({
        checkboxTextStyles: checkboxTextStyles
      })
      //定位到页首
      wx.pageScrollTo({
        scrollTop: 0,
      })
    } else {
      that.createRadar()
    }

    //判断按钮内容
    if (that.data.page == that.data.categoryCount - 1) {
      that.setData({
        buttonText: '提交'
      })
    }
  },

  //获取最高分项
  getHigest: function () {
    var max = 0
    var maxIndex = -1
    for (var i = 0; i < this.data.categoryCount; i++) {
      if (this.data.scores[i] > max) {
        maxIndex = i
        max = this.data.scores[i]
      }
    }
    if (maxIndex == -1) {
      this.setData({
        remark: "佛系咸鱼"
      })
      return "佛系咸鱼"
    }
    this.setData({
      remark: this.data.activities[maxIndex].remark
    })
    return this.data.activities[maxIndex].remark
  },

  //在图片上画头像和名字
  createInfo: function (canvas) {
    var that = this
    canvas.save()
    //绘制昵称和评语
    var remark = that.data.nickname + '在2018年是一名' + this.getHigest()
    canvas.beginPath()
    canvas.setFontSize(40)
    canvas.setTextAlign('left')
    canvas.fillText(remark, 450, 200)
    //画头像
    var avatar = that.data.avatar
    var avatarW = that.data.avatarW
    var avatarH = that.data.avatarH
    canvas.drawImage(avatar, 111, 95, 205, 205)
    canvas.restore()
  },

  //根据获得的数据，采用canvas方法绘制雷达图
  createRadar: function () {
    wx.showToast({
      title: '正在生成图片',
      icon: 'loading',
      duration: 10000,
      mask: true
    })
    var that = this
    //取得各类标题
    var categories = []
    for (var i = 0; i < that.data.categoryCount; i++) {
      categories[i] = that.data.activities[i].category
    }
    //取得各类得分
    var scores = that.data.scores
    //绑定到canvas
    const canvas = wx.createCanvasContext('radarCanvas')
    //背景图片
    var background = that.data.imagePath
    canvas.drawImage(background, 0, 0, 1920, 1280)
    //绘制头像和名字
    that.createInfo(canvas)
    //属性数量
    var categoryCount = that.data.categoryCount
    const fontsize = 40
    //雷达图  设置线条边框颜色  设置绘图字号
    canvas.setStrokeStyle('black')
    canvas.setFontSize(fontsize)
    //定义平移位置
    const originX = 960
    const originY = 800
    //定义半径
    const radius = 400
    //雷达图环数
    const ringCount = 5
    //定义旋转角
    const rotateAngle = 2 * Math.PI / categoryCount

    //画多边形
    for (var i = 1; i <= ringCount; i++) {
      let currentRadius = radius / ringCount * i
      let pointX = currentRadius * Math.sin(rotateAngle / 2)
      let pointY = currentRadius * Math.cos(rotateAngle / 2)
      canvas.beginPath()
      canvas.moveTo(originX + pointX, originY + pointY)
      //画边
      for (var j = 0; j < categoryCount; j++) {
        let x = pointX * Math.cos(rotateAngle) - pointY * Math.sin(rotateAngle)
        let y = pointY * Math.cos(rotateAngle) + pointX * Math.sin(rotateAngle)
        canvas.lineTo(originX + x, originY + y)
        pointX = x
        pointY = y
      }
      canvas.closePath()
      canvas.stroke()
    }

    //画顶点线
    var pointX = radius * Math.sin(rotateAngle / 2)
    var pointY = radius * Math.cos(rotateAngle / 2)
    for (var i = 0; i < categoryCount; i++) {
      canvas.moveTo(originX, originY)
      let x = pointX * Math.cos(rotateAngle) - pointY * Math.sin(rotateAngle)
      let y = pointY * Math.cos(rotateAngle) + pointX * Math.sin(rotateAngle)
      canvas.lineTo(originX + x, originY + y)
      canvas.closePath()
      canvas.stroke()
      pointX = x
      pointY = y
    }

    //画文本
    pointX = radius * Math.sin(rotateAngle / 2)
    pointY = radius * Math.cos(rotateAngle / 2)
    var angle = 3 * Math.PI / 2 + rotateAngle / 2
    for (var i = 0; i < categoryCount; i++) {
      let x = pointX * Math.cos(rotateAngle) - pointY * Math.sin(rotateAngle)
      let y = pointY * Math.cos(rotateAngle) + pointX * Math.sin(rotateAngle)
      //根据文本位置调整
      if ((angle > 3 * Math.PI / 2 && angle <= 2 * Math.PI) || angle < 1e-8) {
        canvas.fillText(categories[i], originX + pointX, originY + pointY + fontsize)
      } else if (angle > Math.PI && angle <= 3 * Math.PI / 2) {
        canvas.fillText(categories[i], originX + pointX - canvas.measureText(categories[i]).width, originY + pointY + fontsize)
      } else if (angle > Math.PI / 2 && angle <= Math.PI) {
        canvas.fillText(categories[i], originX + pointX - canvas.measureText(categories[i]).width, originY + pointY - fontsize)
      } else {
        canvas.fillText(categories[i], originX + pointX, originY + pointY - fontsize)
      }
      angle = angle - rotateAngle
      pointX = x
      pointY = y
    }
    canvas.closePath()
    canvas.stroke()

    //填充闭环绘制覆盖区域
    pointX = radius * Math.sin(rotateAngle / 2)
    pointY = radius * Math.cos(rotateAngle / 2)
    canvas.beginPath()
    for (var i = 0; i <= categoryCount; i++) {
      let Score = scores[i % categoryCount]
      let x = pointX * Math.cos(rotateAngle) - pointY * Math.sin(rotateAngle)
      let y = pointY * Math.cos(rotateAngle) + pointX * Math.sin(rotateAngle)
      canvas.lineTo(pointX * Score / 100 + originX, pointY * Score / 100 + originY)
      pointX = x
      pointY = y
    }
    canvas.closePath()
    canvas.stroke()
    canvas.setFillStyle("rgba(68, 138, 202, 0.5)")
    canvas.fill()
    canvas.restore()
    canvas.draw()

    //最后将生成好的图片保存到本地，利用setTimeout延迟，等画好图之后再进行下一步动作
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'radarCanvas',
        success: function (res) {
          var tempFilePath = res.tempFilePath
          that.setData({
            imagePath: tempFilePath
          })
          wx.redirectTo({
            url: '../report/report?imagePath=' + that.data.imagePath + '&nickname=' + that.data.nickname + '&remark=' + that.data.remark,
          })
        },
        fail: function (res) {
          wx.showToast({
            title: '图片生成失败',
            icon: 'none',
            duration: 1500
          })
        }
      })
    }, 3000)
  },
})