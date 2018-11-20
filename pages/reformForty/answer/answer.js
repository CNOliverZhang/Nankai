Page({

  data: {
    nickname: '南开人',
    page: 0,
    score: 0,
    imagePath: 'https://image.potatofield.cn/18-11-14/43294796.jpg',
    questionBank: [{ question: "测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "1测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "2测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "3测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "4测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "5测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "6测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "7测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "8测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "9测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "10测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "11测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "12测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "13测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "14测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "15测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "16测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "17测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "18测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "19测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "20测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "21测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "22测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "23测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "24测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "25测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "26测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "27测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "28测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "29测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },
      { question: "30测试例题测试例题测试例题测试例题测试例题测试例题", selectA: "a", selectB: "b", selectC: "c", selectD: "d", answer: "A" },],
    questions: [],
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
    that.selectQuestions()
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

  //随机抽取题目
  selectQuestions: function () {
    var that = this
    var questionRange = that.data.questionBank.length
    var selectedQuestions = []
    var indexes = []
    while (selectedQuestions.length < 10) {
      var rand = Math.floor(Math.random() * questionRange)
      if (indexes.indexOf(rand) == -1) {
        indexes.push(rand)
        selectedQuestions.push(that.data.questionBank[rand])
      }
    }
    that.setData({
      questions: selectedQuestions
    })
  },

  //绘制成绩单
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

  //点击下一题按钮
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

  //跳转到下一题
  nextQuestion: function () {
    var that = this;
    var currentPage = that.data.page;
    var currentScore = that.data.score;

    //判断当前题目是否做对
    if (that.data.currentAnswer == that.data.questions[currentPage].answer) {
      that.setData({
        score: currentScore + 10,
      })
    }

    //不是最后一页
    if (that.data.page < 9) {
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

      if (currentPage == 9) {
        that.setData({
          buttonContent: "交卷"
        })
      }
    } else {
      that.createPoster()
    }
  },
})
