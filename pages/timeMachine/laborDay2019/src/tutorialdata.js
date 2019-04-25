/* 
  format:
  {
    position:"",
    route:{
      hasroute:true,
      balitai:[
        {
          type:'',
          content:''
        }
      ],
      jinnan:""
    },
    transportation:{
      metro:"",
      bus:"",
      station:"",
    },
    tips:""
  }
*/ 
var data = [
  {
    position:"宿舍床上o(*≧▽≦)ツ┏━┓",
    route:{
      hasroute: false,
      balitai:"",
      jinnan:""
    },
    transportation:{
      metro:"",
      bus:"",
      station:"",
    },
    tips:"书本!打开!\r\n追剧!开始!\r\n游戏!启动!\r\n锦鲤!转发!\r\n考试!稳了!"
  },
  {
    position: "图书馆/公教/宿舍自习室 \r\n 也可以跨校区自学噢嘤嘤嘤",
    route: {
      hasroute: false,
      balitai: "",
      jinnan: ""
    },
    transportation: {
      metro: "",
      bus: "",
      station: "",
    },
    tips: "1.我爱学习,学习使我快乐。\r\n2.久坐之后,不妨站起来走一走休息一下噢"
  },
  {
    position: "天津市和平区",
    route: {
      hasroute:true,
      balitai:[{
          type: 0,
          content:"八里台站"
        },{
          type: 1,
          content: "643路公交车"
        },{
          type: 0,
          content: "长沙路"
        },{
          type: 1,
          content: "步行150m"
        },{
          type: 0,
          content: "到达:五大道"
        },
      ],
      jinnan:[{
          type:0,
          content:"南开大学新校西门"
        },{
          type: 1,
          content: "613路公交车"
        },{
          type: 0,
          content: "华山里"
        },{
          type: 1,
          content: "地铁一号线(刘园方向)"
        },{
          type: 0,
          content: "营口道"
        },{
          type: 1,
          content: "从C3出口出站"
        },{
          type: 1,
          content: "步行500m"
        },{
          type: 0,
          content: "到达:五大道"
        },
      ]
    },
    transportation: {
      metro: "营口道地铁站(1号线,3号线)",
      bus: "长沙路公交站,崇仁里公交站,黄家花园公交站",
      station: "天津站",
    },
    tips: "五大道因曾为是英租界，遗留了众国各式风貌的建筑，现已变成了天津最亮的一道风景线。游览五大道的方式，最特色的莫过于乘坐马车，此外还可乘人力车或电瓶车游览，全程有导游讲解。闲逛或租辆自行车也是非常好的，如行程不是很紧凑，不妨静下心来闲逛一下。"
  },
  {
    position: "天津市和平区",
    route: {
      hasroute: true,
      balitai: [
        {
          type: 0,
          content: "八里台站"
        },
        {
          type: 1,
          content: "643路公交车(中山门和睦道方向)"
        },
        {
          type: 0,
          content: "滨江道(西)站"
        },
        {
          type: 1,
          content: "步行194m"
        },
        {
          type: 0,
          content: "到达:滨江道"
        },
      ],
      jinnan: [
        {
          type: 0,
          content: "南开大学新校西门"
        },
        {
          type: 1,
          content: "612路快线"
        },
        {
          type: 0,
          content: "天塔"
        },
        {
          type: 1,
          content: "步行333m"
        },
        {
          type: 0,
          content: "聂公桥站"
        },
        {
          type: 1,
          content: "643路公交车(中山门和睦道方向)"
        },
        {
          type: 0,
          content: "滨江道(西)站"
        },
        {
          type: 1,
          content: "步行194m"
        },
        {
          type: 0,
          content: "到达:滨江道"
        },
      ]
    },
    transportation: {
      metro: "营口道地铁站(1号线,3号线)",
      bus: "滨江西站，滨江东站",
      station: "天津站",
    },
    tips: "滨江道商业街是天津市最繁华的商业街之一。\r\n所以emmmmm...\r\n逛逛逛!!!吃吃吃!!!"
  },
  {
    position: "天津市南开区水阁大街",
    route: {
      hasroute: true,
      balitai: [
        {
          type: 0,
          content: "八里台站"
        },
        {
          type: 1,
          content: "675路或12路公交车(田园小区方向)"
        },
        {
          type: 0,
          content: "东马路"
        },
        {
          type: 1,
          content: "步行264m"
        },
        {
          type: 0,
          content: "到达:古文化街"
        },
      ],
      jinnan: [
        {
          type: 0,
          content: "南开大学新校西门"
        },
        {
          type: 1,
          content: "612路快线"
        },
        {
          type: 0,
          content: "天塔"
        },
        {
          type: 1,
          content: "675路或12路公交车(田园小区方向)"
        },
        {
          type: 0,
          content: "东马路"
        },
        {
          type: 1,
          content: "步行264m"
        },
        {
          type: 0,
          content: "到达:古文化街"
        },
      ]
    },
    transportation: {
      metro:"",
      bus: "东马路公交站,东北角公交站,北城街公交站",
      station:""
    },
    tips: "古文化街位于天津市南开区，以天后宫为中心，南起水阁大街，北到通北路，是天津著名老字号和手工艺品店的集中地，来津必游地之一。街上有好多天津老字号店铺，民间特色浓郁。有出售景泰蓝、苏绣、漆器的乔香阁；出售土特产的果仁张、皮糖张、崩豆张；民间工艺品店铺“泥人张”，“风筝魏”等。还有不少名胜古迹，其中的天后宫，祭祀保佑出海远航平安的天后娘娘，已有600余年历史。农历3月23日会举行盛会。"
  },
  {
    position: "天津市红桥区永乐桥 ",
    route: {
      hasroute: true,
      balitai: [
        {
          type: 0,
          content: "八里台站"
        },
        {
          type: 1,
          content: "658路公交车"
        },
        {
          type: 0,
          content: "三条石"
        },
        {
          type: 1,
          content: "步行742m"
        },
        {
          type: 0,
          content: "到达:天津之眼"
        },
      ],
      jinnan: [
        {
          type: 0,
          content: "南开大学新校西门"
        },
        {
          type: 1,
          content: "613路"
        },
        {
          type: 0,
          content: "华山里"
        },
        {
          type: 1,
          content: "地铁1号线"
        },
        {
          type: 0,
          content: "小白楼"
        },
        {
          type: 1,
          content: "D出口出站"
        },
        {
          type: 1,
          content: "步行528m"
        },
        {
          type: 0,
          content: "到达:天津之眼"
        },
      ]
    },
    transportation: {
      metro: "",
      bus: "世纪天乐公交站,永乐桥公交站,元纬路公交站",
      station: ""
    },
    tips: "你听过天津之眼的分手魔咒吗?"
  },
  {
    position: "天津市河北区 ",
    route: {
      hasroute: true,
      balitai: [
        {
          type: 0,
          content: "八里台站"
        },
        {
          type: 1,
          content: "8路公交车"
        },
        {
          type: 0,
          content: "意式风情区站"
        },
        {
          type: 1,
          content: "步行142m"
        },
        {
          type: 0,
          content: "到达:意式风情区"
        },
      ],
      jinnan: [
        {
          type: 0,
          content: "南开大学新校西门"
        },
        {
          type: 1,
          content: "612路公交车"
        },
        {
          type: 0,
          content: "金山里"
        },
        {
          type: 1,
          content: "870路公交车"
        },
        {
          type: 0,
          content: "民主道"
        },
        {
          type: 1,
          content: "步行188m"
        },
        {
          type: 0,
          content: "到达:意式风情区"
        },
      ]
    },
    transportation: {
      metro: "建国道地铁站(2号线)",
      bus: "意式风情区公交站,民主道公交站",
      station: "天津站"
    },
    tips: "这里曾经是意大利租界，沿街随意逛逛，看看那红顶的意式建筑，欧式雕塑。这里还有许多名人故居，著名的\"饮冰室\"就在这里。"
  },
  {
    position: "天津市河西区友谊路31号",
    route: {
      hasroute: true,
      balitai: [
        {
          type: 0,
          content: "八里台站"
        },
        {
          type: 1,
          content: "686路公交车"
        },
        {
          type: 0,
          content: "天津博物馆站"
        },
        {
          type: 0,
          content: "到达:天津自然博物馆"
        },
      ],
      jinnan: [
        {
          type: 0,
          content: "南开大学新校北门站"
        },
        {
          type: 1,
          content: "930路公交车"
        },
        {
          type: 0,
          content: "现代职业技术学院南门站"
        },
        {
          type: 1,
          content: "665路公交车"
        },
        {
          type: 0,
          content: "天津博物馆站"
        },
        {
          type: 0,
          content: "到达:天津自然博物馆"
        },
      ]
    },
    transportation: {
      metro: "文化中心地铁站(5号线、6号线)",
      bus: "天津博物馆公交站,宾馆南道公交站",
      station: ""
    },
    tips: "天津自然博物馆与天津博物馆、天津美术馆相连，可以一同游览。"
  },
  {
    position: "天津市滨海新区响螺湾",
    route: {
      hasroute: true,
      balitai: [
        {
          type: 0,
          content: "八里台站"
        },
        {
          type: 1,
          content: "855路公交车"
        },
        {
          type: 0,
          content: "轻化所站"
        },
        {
          type: 1,
          content: "605路公交车"
        },
        {
          type: 0,
          content: "坨地"
        },
        {
          type: 1,
          content: "步行685m"
        },
        {
          type: 0,
          content: "到达:海昌极地海洋馆"
        },
      ],
      jinnan: [
        {
          type: 0,
          content: "南开大学新校北门站"
        },
        {
          type: 1,
          content: "131路公交车"
        },
        {
          type: 0,
          content: "坨地"
        },
        {
          type: 1,
          content: "步行685m"
        },
        {
          type: 0,
          content: "到达:海昌极地海洋馆"
        },
      ]
    },
    transportation: {
      metro: "",
      bus: "海昌极地海洋馆公交站,坨地公交站",
      station: ""
    },
    tips: "你喜欢小企鹅吗,你喜欢大鲸鱼吗,喜欢就来这里吧"
  },
  {
    position: "天津市东丽区东丽湖畔",
    route: {
      hasroute: true,
      balitai: [
        {
          type: 0,
          content: "手表厂站"
        },
        {
          type: 1,
          content: "902路公交车"
        },
        {
          type: 0,
          content: "唐家口站"
        },
        {
          type: 1,
          content: "663路公交车"
        },
        {
          type: 0,
          content: "欢乐谷东站"
        },
        {
          type: 1,
          content: "步行450m"
        },
        {
          type: 0,
          content: "到达:天津欢乐谷"
        },
      ],
      jinnan: [
        {
          type: 0,
          content: "南开大学新校西门"
        },
        {
          type: 1,
          content: "613路公交车"
        },
        {
          type: 0,
          content: "华山里地铁站"
        },
        {
          type: 1,
          content: "地铁一号线"
        },
        {
          type: 0,
          content: "下瓦房站"
        },
        {
          type: 1,
          content: "地铁5号线"
        },
        {
          type: 0,
          content: "靖江路"
        },
        {
          type: 1,
          content: "靖江路A出口出站 "
        },
        {
          type: 1,
          content: "步行450m"
        },
        {
          type: 0,
          content: "益寿里公交站"
        },
        {
          type: 1,
          content: "663路公交车"
        },
        {
          type: 0,
          content: "欢乐谷东站"
        },
        {
          type: 1,
          content: "步行450m"
        },
        {
          type: 0,
          content: "到达:天津欢乐谷"
        },
      ]
    },
    transportation: {
      metro: "",
      bus: "欢乐谷东站",
      station: ""
    },
    tips: "超刺激的过山车!还有超爽的玛雅海滩水公园!你还在等什么呢"
  },
  {
    position: "天津市津南区小站镇",
    route: {
      hasroute: true,
      balitai: [
        {
          type: 0,
          content: "八里台站"
        },
        {
          type: 1,
          content: "95路公交车"
        },
        {
          type: 0,
          content: "棉四宿舍站"
        },
        {
          type: 1,
          content: "152路公交车(首发时间14:30)"
        },
        {
          type: 0,
          content: "米立方公交站"
        },
        {
          type: 1,
          content: "步行290m"
        },
        {
          type: 0,
          content: "到达:米立方海世界"
        },
      ],
      jinnan: [
        {
          type: 0,
          content: "南开大学新校北门"
        },
        {
          type: 1,
          content: "205路公交车"
        },
        {
          type: 0,
          content: "咸水沽一中站"
        },
        {
          type: 1,
          content: "步行240m"
        },
        {
          type: 0,
          content: "全红桥站"
        },
        {
          type: 1,
          content: "652路公交车"
        },
        {
          type: 0,
          content: "米立方站"
        },
        {
          type: 1,
          content: "步行1800m"
        },
        {
          type: 0,
          content: "到达:米立方海世界"
        },
      ]
    },
    transportation: {
      metro: "",
      bus: "米立方站",
      station: ""
    },
    tips: "推荐情侣们鸳鸯戏水"
  },
  {
    position: "天津市蓟州区",
    route: {
      hasroute: true,
      balitai: [
        {
          type: 0,
          content: "科贸大厦站"
        },
        {
          type: 1,
          content: "638路公交车 "
        },
        {
          type: 0,
          content: "天津站"
        },
        {
          type: 1,
          content: "188路公交车(注意发车时间)"
        },
        {
          type: 0,
          content: "蓟州客运站"
        },
        {
          type: 1,
          content: "步行130m"
        },
        {
          type: 0,
          content: "蓟州客运站公交车站"
        },
        {
          type: 1,
          content: "536路"
        },
        {
          type: 0,
          content: "迎宾大街站"
        },
        {
          type: 1,
          content: "旅游专线11路公交车"
        },
        {
          type: 0,
          content: "盘山风景区"
        },
        {
          type: 1,
          content: "步行250m"
        },
        {
          type: 0,
          content: "到达:盘山"
        },
      ],
      jinnan: [
        {
          type: 0,
          content: "南开大学新校西门"
        },
        {
          type: 1,
          content: "612路快线公交车"
        },
        {
          type: 0,
          content: "天塔站"
        },
        {
          type: 1,
          content: "8路/832路公交车"
        },
        {
          type: 0,
          content: "天津站"
        },
        {
          type: 1,
          content: "188路公交车(注意发车时间)"
        },
        {
          type: 0,
          content: "蓟州客运站"
        },
        {
          type: 1,
          content: "步行130m"
        },
        {
          type: 0,
          content: "蓟州客运站公交车站"
        },
        {
          type: 1,
          content: "536路"
        },
        {
          type: 0,
          content: "迎宾大街站"
        },
        {
          type: 1,
          content: "旅游专线11路公交车"
        },
        {
          type: 0,
          content: "盘山风景区"
        },
        {
          type: 1,
          content: "步行250m"
        },
        {
          type: 0,
          content: "到达:盘山"
        },
      ]
    },
    transportation: {
      metro: "",
      bus: "",
      station: "蓟州站,蓟州北站"
    },
    tips: "盘山位于北京东部的天津蓟县（现已升级为蓟州区），享有京东第一山的美誉，乾隆那句“早知有盘山 何必下江南”更是赋予了盘山响亮的名气。"
  },

];

module.exports = {
  data:data
}

