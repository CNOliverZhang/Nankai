Page({

  data: {
    nickname: '南开人',
    page: 0,
    score: 0,
    imagePath: 'https://image.potatofield.cn/18-11-14/43294796.jpg',
    questions: [{ question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" },
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" }, 
      { question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d" },],
    answers: ["A", "B", "A", "D", "B", "A", "D", "A", "B", "C", "A", "B", "A", "D", "B", "A", "D", "A", "B", "C"],
    buttonContent: "下一题",
    currentQuestion: "",
    currentSelectA: "",
    currentSelectB: "",
    currentSelectC: "",
    currentSelectD: "",
    currentAnswer: ""
  },

  onLoad: function (options) {
    var that = this
    wx.downloadFile({
      url: that.data.imagePath,
      success: function (res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          imagePath: tempFilePath
        })
      }
    })
    that.setData({
      nickname: options.nickname,
      currentQuestion: that.data.questions[0].question,
      currentSelectA: that.data.questions[0].selectA,
      currentSelectB: that.data.questions[0].selectB,
      currentSelectC: that.data.questions[0].selectC,
      currentSelectD: that.data.questions[0].selectD
    })
  },

  createPoster: function () {
    wx.showToast({
      title: '正在阅卷中',
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
    var name = '亲爱的' + that.data.nickname + '同学：';
    context.setFontSize(60);
    context.setFillStyle('#ffffff');
    context.setTextAlign('left');
    context.fillText(name, 120, 340);
    context.stroke();
    //绘制分数
    var score = that.data.score;
    context.setTextAlign('center');
    context.fillText(score, 240, 560);
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
            title: '出问题了',
            icon: 'none',
            duration: 1500
          })
        }
      });
    }, 3000);
  },

  //改变选项时进行传值
  radioChange: function (e) {
    this.setData({
      currentAnswer: e.detail.value
    })
  },

  //下一题
  bindNextQuestion: function () {
    var that = this;
    //判断是否未填写
    if (that.data.currentAnswer == '') {
      wx.showModal({
        title: '提示',
        content: '确认跳过本题？',
        success: function (res) {
          if (res.confirm) {
            that.nextQuestion()
          }
        }
      })
    } else {
      that.nextQuestion()
    }
  },

  nextQuestion: function () {
    var that = this;
    var currentPage = that.data.page;
    var currentScore = that.data.score;

    //判断当前题目是否做对
    if (that.data.currentAnswer == that.data.answers[currentPage]) {
      that.setData({
        score: currentScore + 5,
      })
    }

    //不是最后一页
    if (that.data.page < 19) {
      //清空当前选框
      that.setData({
        checked: "",
        currentAnswer: "",
      })

      //页数自增
      currentPage++;
      that.setData({
        page: currentPage
      })

      that.setData({
        currentQuestion: that.data.questions[currentPage].question,
        currentSelectA: that.data.questions[currentPage].selectA,
        currentSelectB: that.data.questions[currentPage].selectB,
        currentSelectC: that.data.questions[currentPage].selectC,
        currentSelectD: that.data.questions[currentPage].selectD
      });

      if (currentPage == 19) {
        that.setData({
          buttonContent: "交卷"
        })
      }
    } else {
      that.createPoster()
    }
  },
})
