Page({

  data: {
    nickname: '南开人',
    page: 0,
    score: 0,
    imagePath: 'https://image.potatofield.cn/18-11-14/43294796.jpg',
    questionBank: [
      { question: "增强金融服务实体经济能力，提高直接融资比重，促进多层次资本市场健康发展，需要深化_____改革", selectA: "金融体制", selectB: "经济体制", selectC: "财税体制", selectD: "资本市场", answer: "A" },
      { question: "加快完善社会主义市场经济体制，要完善促进消费的体制机制，增强消费对经济发展的_____作用", selectA: "指导性", selectB: "关键性", selectC: "基础性", selectD: "主导性", answer: "C" },
      { question: "必须把提高_____质量作为主攻方向，显著增强我国经济质量优势", selectA: "经济发展", selectB: "产业体系", selectC: "民生经济", selectD: "供给体系", answer: "D" },
      { question: "中国特色社会主义进入新时代，我国社会主要矛盾已经转化为人民日益增长的_____需要和不平衡不充分的发展之间的矛盾", selectA: "物质文化", selectB: "精神文化", selectC: "美好生活", selectD: "物质生活", answer: "C" },
      { question: "1978年5月11日，_____发表文章《实践是检验真理的唯一标准》，引发真理标准问题的大讨论，成为解放思想的先声", selectA: "《光明日报》", selectB: "《人民日报》", selectC: "《中国日报》", selectD: "《中国青年报》", answer: "A" },
      { question: "党的_____确立了解放思想、实事求是的思想路线，作出把党和国家工作重心转移到经济建设上来、实行改革开放的历史性决策", selectA: "十一届三中全会", selectB: "十二大", selectC: "十三大", selectD: "十四大", answer: "A" },
      { question: "_____年9月5日，邓小平在会见捷克斯洛伐克总统胡萨克时，提出了“科学技术是第一生产力”的著名论断", selectA: "1987", selectB: "1988", selectC: "1989", selectD: "1990", answer: "B" },
      { question: "1984年4月，我国新开放了_____个港口城市？", selectA: "10", selectB: "11", selectC: "13", selectD: "14", answer: "D" },
      { question: "社会主义民主政治的本质特征是_____", selectA: "人民当家作主", selectB: "党的领导", selectC: "依法治国", selectD: "政治协商", answer: "A" },
      { question: "党的十九大报告指出，创新是引领发展的第一动力，是建设现代化经济体系的_____支撑", selectA: "有力", selectB: "战略", selectC: "保障", selectD: "科技", answer: "B" },
      { question: "改革开放的开始，是小岗村_____户农民率先采用生产责任制？", selectA: "16", selectB: "17", selectC: "18", selectD: "19", answer: "C" },
      { question: "_____年12月18日至22日，党的十一届三中全会在北京举行？", selectA: "1977", selectB: "1979", selectC: "1978", selectD: "1920", answer: "C" },
      { question: "下面四个城市中，_____不是中国率先设立的四个经济特区之一", selectA: "广州", selectB: "厦门", selectC: "珠海", selectD: "汕头", answer: "A" },
      { question: "我国的改革开放首先从_____开始", selectA: "沿海", selectB: "内陆", selectC: "农村", selectD: "城市", answer: "A" },
      { question: "_____年，中国进入全面深化改革新时期", selectA: "2017", selectB: "2009", selectC: "2011", selectD: "2013", answer: "D" },
      { question: "1999年我国提出了_____战略", selectA: "人才强国", selectB: "科教兴国", selectC: "振兴东北老工业基地", selectD: "西部大开发", answer: "D" },
      { question: "中国的对外开放形成了_____的格局", selectA: "沿海经济开发区——经济特区——沿海开放城市——内地", selectB: "沿海经济开发区——沿海开放城市——经济特区——内地", selectC: "沿海开放城市——经济特区——沿海经济开放区——内地", selectD: "经济特区——沿海开放城市——沿海经济开放区——内地", answer: "D" },
      { question: "改革开放的总设计师是_____", selectA: "邓小平", selectB: "周恩来", selectC: "毛泽东", selectD: "刘少奇", answer: "C" },
      { question: "十一届三中全会决定把全党工作的重点转移到_____上", selectA: "经济建设", selectB: "党的建设", selectC: "社会主义现代化建设", selectD: "国家经济体制建设", answer: "C" },
      { question: "1979年7月15日，中共中央、国务院批转广东省委、福建省委关于对外经济活动实行特殊政策和灵活措施的报告，决定试办经济特区，以下不是此次报告设计试办经济特区的地点是_____", selectA: "深圳", selectB: "珠海", selectC: "汕头", selectD: "海南", answer: "D" },
      { question: "1997年“十五大”报告第一次提出“_____是社会主义市场经济的重要组成部分”", selectA: "公有制经济", selectB: "非公有制经济", selectC: "市场经济", selectD: "计划经济", answer: "B" },
      { question: "2001年11月11日，在卡塔尔多哈举行的_____第四届部长级会议通过了中国加入该组织的法律文件，它标志着经过15年的艰苦努力，中国的对外开放进入了一个新阶段。", selectA: "上海合作组织", selectB: "亚太经济合作组织", selectC: "世界贸易组织", selectD: "联合国", answer: "C" },
      { question: "邓小平说：“一个党，一个国家，一个民族，如果一切从本本出发，思想僵化，迷信盛行，那就不能前进，它的生机就停止了，就要亡党亡国。”由此反映出的邓小平思想是_____", selectA: "实行家庭联产承包责任制", selectB: "建立社会主义市场经济体制", selectC: "提出要以经济建设为中心", selectD: "倡导解放思想，实事求是", answer: "D" },
      { question: "1985年起，我国开始以国有企业改革为重点的城市改革，1992年后国有企业改革加快了步伐，大中企业向建立现代企业制度迈进。促使其改革步伐加快的主要因素是_____", selectA: "十一届三中全会的召开", selectB: "公司制、股份制的推行", selectC: "提出建立社会主义市场经济体制", selectD: "确立以公有制为主的多种所有制经济", answer: "C" },
      { question: " “大包干,大包干,直来直去不拐弯。保证国家的,留足集体的,剩下都是自己的。”这首歌谣反映的是1978年以来在我国农村逐步实行的_____", selectA: "建立经济特区", selectB: "一国两制", selectC: "土地改革", selectD: "家庭联产承包责任制", answer: "D" },
      { question: "以国有企业改革为重点的城市改革全面展开于_____年", selectA: "1978", selectB: "1985", selectC: "1992", selectD: "2000", answer: "B" },
      { question: "“科学技术是第一生产力”的论断是_____提出的。", selectA: "马克思", selectB: "列宁", selectC: "毛泽东", selectD: "邓小平", answer: "D" },
    ],
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

  //绘制成绩单并跳转下一页
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
            url: '../poster/poster?nickname=' + that.data.nickname + '&imagePath=' + that.data.imagePath,
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
