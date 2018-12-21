Page({

  data: {
    page: 0,
    imagePath: "https://image.potatofield.cn/18-12-18/18499258.jpg",
    activities:[
      {
        category: '艺术演出及竞赛',
        instruction: '2018年的南开园里举办了下列艺术演出和竞赛，快来看一看你参加或是欣赏了其中哪些~',
        remark: '铁杆艺术迷',
        select: [
          { name: 'art', value: '五月的鲜花合唱比赛', description: '营造健康活跃的校园文化氛围，展现南开学子积极向上的精神风貌。' },
          { name: 'art', value: 'A叔动漫钢琴演奏会', description: '丰富南开学子课余生活，增进对动漫改编钢琴曲的了解，开阔眼界。' },
          { name: 'art', value: '第二十届翔宇话剧节', description: '献上有态度有思想的话剧表演，丰富南开学生的精神生活。' },
          { name: 'art', value: '《杨石先》话剧演出', description: '重现南开历史，传承南开精神的大型原创学生话剧《杨石先》。' },
          { name: 'art', value: '南开大学第二十七届十大歌手大赛', description: '佳音南寻，玖玖为期。歌声袅袅，唱响九九南开。' },
          { name: 'art', value: '翔宇剧社《伤心者》公演', description: '翔宇话剧节演出活动，丰富同学们的精神生活。' },
          { name: 'art', value: '南开大学第二届中文配音大赛', description: '丰富校园生活，让大家发现配音之美，提高学生综合素质。' },
          { name: 'art', value: '南开大学第十五届中文演讲大赛', description: '给你一个舞台，在南开园中发掘你的声音。' },
          { name: 'art', value: '辩论与口才协会新生赛决赛', description: '培养学生辩论能力与思辨头脑，发掘优秀辩论人才。' },
          { name: 'art', value: '南开大学2018新生军训演讲比赛', description: '“爱国·励志·求真·力行”，从大学第一课开始站上自己的舞台。' },

        ]
      },
      {
        category: '体育和舞蹈',
        instruction: '在这一年里你参加了哪些体育赛事和舞蹈演出呢？是观众也可以勾选哦~',
        remark: '体艺狂人',
        select: [
          { name: 'sport', value: '2018年南开大学运动会', description: '南开园一年一度的体育盛会，是南开人活力自信的君子之风和“公能日新”的精神品格的体现。' },
          { name: 'sport', value: '南开大学第二届期末体育课展演', description: '展现南开体育课教学成果和同学们的强健体魄。' },
          { name: 'sport', value: '“一鹭陪伴”公益足球课 ', description: '足球名将张鹭走进南开，进行足球公益课，延续足球热血，培养后一代足球小将。' },
          { name: 'sport', value: '南开大学校长杯足球赛和篮球赛', description: '有利于调节学生的精神状态，同时促进学生全面发展，促进院系团结。' },
          { name: 'sport', value: '世界杯竞猜大赛', description: '提高南开学子对国际体育赛事的关注度，增加大学生活趣味性。' },
          { name: 'sport', value: '第三十一届“校长杯”乒乓球比赛', description: '掀起“国球”乒乓在南开的浪潮，展现南开学子的体育风采。' },
          { name: 'sport', value: '第四届“一二·九”运动会', description: '丰富课外活动的同时，激发研究生同学的民族责任感和历史使命感。' },
          { name: 'sport', value: '冰火舞蹈团15周年专场演出', description: '传承社团精神，为南开学子提供高质量视听享受。' },
          { name: 'sport', value: '花郎跆拳道协会20周年专场表演', description: '纪念花郎跆拳道协会20周年，丰富同学的课余生活。' },
          { name: 'sport', value: 'Fashion街舞社11周年专场演出', description: '回顾总结一年社团活动结果，丰富学生课余生活。' },
        ]
      },
      {
        category: '公益与志愿服务',
        instruction: '看看你参加了下列哪些志愿服务活动或公益项目，然后自豪地为自己勾选上吧~',
        remark: '公益达人',
        select: [
          { name: 'volunteer', value: '理科田径场办公室志愿工作', description: '帮助同学借球和登记，必要时临时顶替管理员的工作。' },
          { name: 'volunteer', value: '南开医院志愿活动', description: '负责志愿引导服务工作，为不熟悉医院环境的病人指引方向，为患者提供温情关怀 。' },
          { name: 'volunteer', value: '天津市五校数学文化节志愿活动', description: '布置会场，引领参会专家到会议室休息，引领其他四校同学到会场就坐。' },
          { name: 'volunteer', value: '“垃圾投进趣”环保宿舍活动', description: '培养宿舍内的垃圾分类，分类后放到固定位置方便保洁阿姨整理。' },
          { name: 'volunteer', value: '泥人张美术馆志愿活动', description: '担任参观引导或讲解工作，弘扬传统文化。' },
          { name: 'volunteer', value: '脑瘫患者家教志愿活动', description: '关爱弱势群体，帮助脑瘫患者解决一些生活中的难题。' },
          { name: 'volunteer', value: '消防队军考辅导志愿活动', description: '为消防战士讲解军考模拟题，帮助他们熟悉军考题型，查漏补缺，对他们的薄弱知识点加强讲解。' },
          { name: 'volunteer', value: '“尊老敬老，法护夕阳”敬老院志愿普法活动', description: '介绍近年来社会中出现的针对老年人的诈骗、侵权等违法犯罪案例，并详述相关的防范诈骗措施及维护自身合法权利的方法途径。' },
          { name: 'volunteer', value: '“孝亲尊长，传扬家风”津南区实验小学主题志愿者活动', description: '了解家风建设，做优良家风和中华传统美德的传播者和传承人，让家国情怀深深扎根在自己的心中。' },
          { name: 'volunteer', value: '探访鹤寿养老院老人活动', description: '给予老人关怀，传承优良家风，做好向善青年。' },
          { name: 'volunteer', value: '津南图书馆图书整理工作', description: '帮助整理图书，承担社会责任，展现大学生的良好精神风貌。' },
          { name: 'volunteer', value: '海岸线清理志愿工作', description: '帮助捡拾海岸垃圾，保护生态环境，了解海洋垃圾和海洋相关的知识。' },
          { name: 'volunteer', value: '天津市文化中心志愿活动', description: '为天津市民、在津学子和来津游客提供优质高效的服务。' },
          { name: 'volunteer', value: '“衣路相随”旧衣物回收活动', description: '捐赠闲置衣物，节约资源，回报社会。' },
        ]
      },
      {
        category: '社会实践',
        instruction: '过去的一年里你有没有走出校园,体验社会呢？在下列活动中勾选出你参与过的吧~',
        remark: '南开精神践行者',
        select: [
          { name: 'practice', value: '“能源之美”走进中石化集团，探访中国石油化工产业升级之路', description: '通过实践理解学习中国石油产业现况，体验科技与智能结合的石油产业升级之路。' },
          { name: 'practice', value: '2018年南开大学“西部计划”宣传活动', description: '增进对西部基层建设的了解，为西部计划西藏专项活动宣讲会进行宣传。' },
          { name: 'practice', value: '职业发展中心模拟招聘活动', description: '帮助南开学子提前了解职场的招聘流程，助力结业。' },
          { name: 'practice', value: '国际组织实习训练营', description: '鼓励南开学子增进对国际组织的了解，积累实习经验。' },
          { name: 'practice', value: '津南区图书馆母亲节主题美育活动', description: '教育参观者体会母亲的不易，介绍母亲节的来历，激发对母亲的感激之情。' },
          { name: 'practice', value: '“家道之行也”实践活动', description: '在食堂随机采访路过的同学关于家风的问题，到河东区红星路浩海小区进行义诊和陪老人聊天。' },
          { name: 'practice', value: '美丽中国梦想导师活动', description: '关注偏远地区教育，帮助同学增强社会责任感和爱心。' },
          { name: 'practice', value: '南开大学红十字会急救培训', description: '提高同学们的急救能力，培养技能。' },
          { name: 'practice', value: '“做雷锋精神的种子”主题实践活动', description: '传承雷锋精神、弘扬道德风尚。' },
        ]
      },
      {
        category: '科技创新和人文交流',
        instruction: '围绕学术展开的各类竞赛和交流活动你参与了多少呢？快把它们勾选出来吧~',
        remark: '学术积极分子',
        select: [
          { name: 'academic', value: '天津市2018年五校数学文化节', description: '实现学习学术资源的共建共享，激发创新精神，打造天津市高校的数学文化盛宴，提升五校数学学科的人才培养合力。' },
          { name: 'academic', value: '南开大学第三届“梦想+”创新创业大赛', description: '提升学生科研创新能力，鼓励学生积极参与创新创业实践。' },
          { name: 'academic', value: '“助力乡村振兴”全国大学生创新创业论坛', description: '进一步加强交流，提高学生乡村振兴水平。' },
          { name: 'academic', value: '高校区块链大赛系列活动之校园巡讲', description: '方便老师和同学们了解区块链技术及其应用。' },
          { name: 'academic', value: '南开大学“科技体验日”', description: '邀请同学们感受科技魅力，体验科技互动。' },
          { name: 'academic', value: '创新创业文化节“走进诺贝尔奖”系列讲座', description: '深入解读2018诺贝尔奖，增强同学们的科学兴趣和素养。' },
          { name: 'academic', value: '南开大学药学院开放日', description: '带领同学走进药学世界，体验药学的丰富多彩。' },
          { name: 'academic', value: '“第十一届KAB名人堂——聆听创业教母的真知灼见”分享会', description: '“创业教母”王利芬为南开学生带来创业经验分享。' },
          { name: 'academic', value: '第八届“南开读书节”系列活动之文化讲座——数学之美', description: '感悟数学之美，展现一个奇妙的数学世界。' },
          { name: 'academic', value: '南开大学博物馆开放月馆长讲座', description: '旨在展示博物馆魅力，传播博物馆文化。' },
          { name: 'academic', value: '罗锟、张赢老师影视音乐创作理念分享会', description: '为同学分享创作影视音乐的理念与感悟，以及关于人生与梦想的独到见解。' },
          { name: 'academic', value: '“音乐里的故事——用西方音乐语言讲述《梁祝》、《嘎达梅林》”主题分享讲座', description: '提高同学们的音乐素养，培养丰富兴趣。' },
          { name: 'academic', value: '《保险与幸福人生》校友沙龙', description: '向同学们解读和诠释保险的功能和作用，解读个人和家庭如何做好保险相关的经济安排和健康、养老管理等方面的规划。' }
        ]
      },
      {
        category: '传统文化',
        instruction: '看看下面列出的传统文化活动，把你参与过的或是欣赏过的勾选出来吧~',
        remark: '传统文化继承人',
        select: [
          { name: 'tradition', value: '南开民乐团华夏采风民族管弦音乐会', description: '展现中国传统乐器魅力，回顾华夏奋进历史，再现中华民族伟大精神。' },
          { name: 'tradition', value: '校园传承版《牡丹亭》专场演出', description: '传统昆曲表演，弘扬民族文化，为叶嘉莹先生祝寿。' },
          { name: 'tradition', value: '“青春国粹喜相逢”京剧专场演出', description: '引领同学走进京剧艺术的绚丽世界。' },
          { name: 'tradition', value: '国乐相声协会相声剧《复仇者联盟N》演出', description: '用学生喜闻乐见的方式推广传统相声剧。' },
          { name: 'tradition', value: '丝韵悠扬专场演出', description: '引领同学感受葫芦丝音乐艺术之美。' },
          { name: 'tradition', value: '“悠游百载，喃南汉韵”传统文化节', description: '以“弘扬优秀传统文化，喜迎南开百年”为宗旨，让传统文化进校园。' },
          { name: 'tradition', value: '第十五届瑚琏琴社古琴音乐会', description: '再现古琴艺术魅力，弘扬中国传统艺术美学精神。' },
          { name: 'tradition', value: '药学院中药文化艺术节', description: '旨在带给同学们对中药全新的认识以及独特的体验，展示中华文化魅力和当代中国活力。' },
          { name: 'tradition', value: '南开大学第二届“梨园春会”', description: '体验学府文化，感受传统文化魅力。' },
        ]
      },
      {
        category: '思想政治教育',
        instruction: '这一年的你有没有在思想上为自己充充电呢？看看下面的活动你参加了多少吧~',
        remark: '社会主义接班人',
        select: [
          { name: 'ideology', value: '杰出校友周恩来诞辰120周年纪念活动', description: '缅怀伟人风范，传承恩来精神。' },
          { name: 'ideology', value: '南开大学学习共青团十八大精神学生骨干学习会', description: '在相互学习中增进同窗感情，加深对共青团十八大精神的认识，提高思想境界。' },
          { name: 'ideology', value: '纪念何炳林院士诞辰100周年大会', description: '纪念何炳林院士诞辰100周年，深切缅怀他为我国科学事业和南开发展作出的杰出贡献。' },
          { name: 'ideology', value: '微课直播新生入学教育', description: '面向2018级新生、在校生、学生家长、校友及社会各界人士，进行校史教育网络直播。' },
          { name: 'ideology', value: '纪念“一二·九”爱国运动八十三周年宣传路演', description: '使同学了解“一二·九”的峥嵘历史，勿忘国耻，吾辈自强。' },
          { name: 'ideology', value: '纪念郭永怀逝世50周年讲座', description: '“百年南开大讲坛”系列活动之一，大家共同追忆、回顾了郭永怀先生“一心为公、爱国奉献”的一生。' },
          { name: 'ideology', value: '“个人理想与国家”讲座', description: '“百年南开大讲坛”系列活动之一，罗援少将以亲身经历讲述如何将个人理想与国家理想辩证统一。' },
          { name: 'ideology', value: '学习共青团十八大精神学生骨干座谈会', description: '各学生组织骨干深入学习团十八大精神，通过分享和讨论深刻体会和感悟团十八大精神。' },
        ]
      },
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
      instruction: that.data.activities[that.data.page].instruction,
      //初始化分类数目，当前类得分和各类得分
      categoryCount: that.data.activities.length,
      categoryScore: 0,
      scores: [],
      //将复选框置空
      isChecked: '',
      //初始化按钮文字
      buttonText: '下一页'
    })
    //初始化复选框样式
    var checkboxTextStyles = []
    var checkboxHolderStyles = []
    for (var i = 0; i < that.data.choices.length; i++) {
      var tempTextStyle = 'content'
      var tempHolderStyle = 'activity'
      checkboxTextStyles.push(tempTextStyle)
      checkboxHolderStyles.push(tempHolderStyle)
    }
    that.setData({
      checkboxTextStyles: checkboxTextStyles,
      checkboxHolderStyles: checkboxHolderStyles
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

  //改变多选框的值使得改组得分改变，复选框样式改变
  checkboxChange: function(e) {
    var that = this
    for (var i = 0; i < that.data.choices.length; i++) {
      var targetText = 'checkboxTextStyles[' + i + ']'
      var targetHolder = 'checkboxHolderStyles[' + i + ']'
      that.setData({
        [targetText]: 'content',
        [targetHolder]: 'activity'
      })
    }
    for (var i = 0; i < e.detail.value.length; i++) {
      var targetText = 'checkboxTextStyles[' + e.detail.value[i] + ']'
      var targetHolder = 'checkboxHolderStyles[' + e.detail.value[i] + ']'
      that.setData({
        [targetText]: 'content attend',
        [targetHolder]: 'activity checked'
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
    var score = that.data.categoryScore / that.data.activities[that.data.page].select.length
    score = Math.sqrt(score) * 100
    var dataTarget = 'scores[' + that.data.page + ']'
    that.setData({
      [dataTarget]: score
    })
    
    //页码增加
    that.setData({
      page: that.data.page + 1,
    })

    //判断点击按钮之后的操作
    if (that.data.page < that.data.categoryCount) {
      //初始化标题和选项
      that.setData({
        isChecked: '',
        categoryTitle: that.data.activities[that.data.page].category,
        choices: that.data.activities[that.data.page].select.slice(),
        instruction: that.data.activities[that.data.page].instruction,
        categoryScore: 0
      })
      //初始化复选框样式
      var checkboxTextStyles = []
      var checkboxHolderStyles = []
      for (var i = 0; i < that.data.choices.length; i++) {
        var tempTextStyle = 'content'
        var tempHolderStyle = 'activity'
        checkboxTextStyles.push(tempTextStyle)
        checkboxHolderStyles.push(tempHolderStyle)
      }
      that.setData({
        checkboxTextStyles: checkboxTextStyles,
        checkboxHolderStyles: checkboxHolderStyles
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
        remark: "佛系咸鱼",
        category: "啥活动都没参加"
      })
      return "佛系咸鱼"
    }
    this.setData({
      remark: this.data.activities[maxIndex].remark,
      category: "参加的" + this.data.activities[maxIndex].category + "活动最多"
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
    const fontsize = 30
    //雷达图  设置线条边框颜色  设置绘图字号
    canvas.setStrokeStyle('black')
    canvas.setFontSize(fontsize)
    //定义平移位置
    const originX = 960
    const originY = 720
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
            url: '../report/report?imagePath=' + that.data.imagePath + '&nickname=' + that.data.nickname + '&category=' + that.data.category + '&remark=' + that.data.remark,
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