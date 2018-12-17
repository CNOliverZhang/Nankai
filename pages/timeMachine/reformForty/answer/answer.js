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
      { question: " “大包干，大包干，直来直去不拐弯。保证国家的，留足集体的，剩下都是自己的。”这首歌谣反映的是1978年以来在我国农村逐步实行的_____", selectA: "建立经济特区", selectB: "一国两制", selectC: "土地改革", selectD: "家庭联产承包责任制", answer: "D" },
      { question: "以国有企业改革为重点的城市改革全面展开于_____年", selectA: "1978", selectB: "1985", selectC: "1992", selectD: "2000", answer: "B" },
      { question: "“科学技术是第一生产力”的论断是_____提出的。", selectA: "马克思", selectB: "列宁", selectC: "毛泽东", selectD: "邓小平", answer: "D" },
      { question: "以国有企业改革为重点的城市改革全面展开于_____年", selectA: "1978", selectB: "1985", selectC: "1992", selectD: "2000", answer: "B" },
      { question: "中国人民进入改革开放的起点是_____", selectA: "十一届三中全会", selectB: "十二届三中全会", selectC: "中共八大", selectD: "中共十二大", answer: "A" },
      { question: "以下_____是全国最早实行对外开放的省份之一", selectA: "云南省", selectB: "江苏省", selectC: "贵州省", selectD: "广东省", answer: "D" },
      { question: "以下_____是中国面积最大的经济特区", selectA: "深圳", selectB: "珠海", selectC: "海南", selectD: "上海", answer: "C" },
      { question: "家庭联产承包责任制确立时间是_____年", selectA: "1976", selectB: "1982", selectC: "1986", selectD: "1992", answer: "B" },
      { question: "有计划的商品经济提出_____", selectA: "十一届三中全会", selectB: "十二届三中全会", selectC: "中共十二大", selectD: "中共十三大", answer: "B" },
      { question: "改革开放至2006年以来，国民生产总值上升约_____", selectA: "2倍", selectB: "20倍", selectC: "60倍", selectD: "100倍 ", answer: "C" },
      { question: "中国科学家完成了人类基因组计划_____的基因绘制图", selectA: "0.1%", selectB: "1%", selectC: "2%", selectD: "5%", answer: "B" },
      { question: "神州5号于_____年完成载人航天", selectA: "1998", selectB: "2000", selectC: "2003", selectD: "2005", answer: "C" },
      { question: "我国社会的主要矛盾是_____", selectA: "人民日益增长的物质文化需要同落后的社会生产之间的矛盾", selectB: "人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾", selectC: "人口众多与资源短缺之间的矛盾", selectD: "人口众多与环境恶化之间的矛盾", answer: "B" },
      { question: "对目前我国已取得的成就描述不正确的是_____", selectA: "世界第一大工业国", selectB: "世界第一大货物贸易国", selectC: "世界第一大外汇储备国", selectD: "世界第一大经济体", answer: "D" },
      { question: "邓小平在_____的闭幕会上作题为《解放思想，实事求是，团结一致向前看》的讲话", selectA: "中国共产党第十一届中央委员会第三次全体会议", selectB: "1978年12月的中央工作会议", selectC: "中国共产党第十二次全国代表大会", selectD: "中国共产党第十一次全国代表大会", answer: "B" },
      { question: "上海世博会的主题是_____", selectA: "新的起飞之路", selectB: "海洋——未来的财富", selectC: "城市，让生活更美好", selectD: "人类、自然、技术——一个新世界正在诞生", answer: "C" },
      { question: "2014年2月27日下午，十二届全国人大常委会第七次会议经表决确定中国人民抗日战争胜利纪念日在_____", selectA: "9月3日", selectB: "9月5日", selectC: "9月2日", selectD: "9月6日", answer: "A" },
      { question: "中国开放的大门不会关闭。要以“一带一路”建设为重点，坚持引进来和走出去并重，遵循_____原则", selectA: "共商共建共享", selectB: "互惠互利共赢", selectC: "共商共建共管", selectD: "磋商互通有无", answer: "A" },
      { question: "党的十九大报告指出，拓展对外贸易，培育贸易新业态新模式，推进_____建设", selectA: "贸易强国", selectB: "贸易大国", selectC: "自由贸易试验区", selectD: "自由贸易港", answer: "A" },
      { question: "邓小平在_____重要谈话中开始形成一个中心、两个基本点的思想", selectA: "《坚持四项基本原则》", selectB: "《解放思想，实事求是，团结一致向先看》", selectC: "“南方谈话”", selectD: "中共十界三中全会的发言", answer: "A" },
      { question: "邓小平指出：“坚持社会主义，首先要_____，大大发展生产力，体现社会主义由于资本主义的优点。”", selectA: "摆脱贫穷落后状态", selectB: "对外开放", selectC: "解放思想", selectD: "对内改革", answer: "A" },
      { question: "改革开放建立了_____经济体制", selectA: "公有制市场经济", selectB: "公有制计划经济体制", selectC: "社会主义市场经济", selectD: "私有制市场经济", answer: "C" },
      { question: "社会主义市场经济体制框架初步建立阶段的时间段是_____", selectA: "1978年~1991年", selectB: "1992年~2002年", selectC: "2003年~2011年", selectD: "2012年至今", answer: "B" },
      { question: "_____问题是社会主义建设首先必须把握的基本战略问题", selectA: "经济基础与上层建筑的关系", selectB: "时代主题", selectC: "姓“资”姓“社”", selectD: "阶级关系", answer: "A" },
      { question: "科学发展观的第一要义是_____", selectA: "聚精会神搞建设", selectB: "以人为本", selectC: "发展", selectD: "统筹兼顾", answer: "C" },
      { question: "_____是社会主义意识形态的本质体现", selectA: "社会主义核心价值体系", selectB: "社会主义荣辱观", selectC: "社会主义共同理想", selectD: "社会主义市场经济制度", answer: "A" },
      { question: " 2002年10月，天津市委做出了实施海河两岸综合开发建设，努力把海河建成独具特色的、国际一流的_____、景观带和文化带的战略决策和宏伟目标", selectA: "工业经济带", selectB: "商业服务带", selectC: "农业服务带", selectD: "服务型经济带", answer: "D" },
      { question: "北京奥运会主题口号“同一个世界，同一个梦想”于_____正式发布", selectA: "2005年6月26日", selectB: "2006年6月26日", selectC: "2007年6月26日", selectD: "2008年6月26日", answer: "A" },
      { question: "_____中国商飞公司正式发布首个单通道常规布局150座级大型客机机型代号“COMAC919（C919）”", selectA: "2009年9月26日", selectB: "2009年9月29日", selectC: "2009年6月9日", selectD: "2009年1月6日", answer: "D" },
      { question: "党的十九大报告中提出，要深化_____改革，发展混合所有制经济，培育具有全球竞争力的世界一流企业", selectA: "民营企业", selectB: "国有企业", selectC: "所有制", selectD: "经济体制", answer: "B" },
      { question: "1984年4月，开放的14个港口城市中，有_____个是山东省城市", selectA: "一", selectB: "二", selectC: "三", selectD: "四", answer: "B" },
      { question: "党的十九大报告指出，从现在到2020年，是全面建成小康社会_____", selectA: "决胜期 ", selectB: "交汇期", selectC: "转折期", selectD: "机遇期", answer: "A" },
      { question: "从十九大到二十大，是“两个一百年”奋斗目标的_____", selectA: "历史转折期 ", selectB: "战略决胜期", selectC: "历史交汇期", selectD: "战略机遇期", answer: "C" },
      { question: "党的十九大报告中提出，要以_____为主体构建大中小城市和小城镇协调发展的城镇格局，加快农业转移人口市民化", selectA: "城市群", selectB: "新型城镇", selectC: "大城市", selectD: "中小城市", answer: "A" },
      { question: "_____年中央“一号文件”颁布，指出联产承包制是在党的领导下中国农民的伟大创造，是马克思主义农业合作化理论在中国实践中的新发展", selectA: "1983", selectB: "1984", selectC: "1985", selectD: "1986", answer: "A" },
      { question: "中共十一届三中全会后，经济体制改革逐步展开，在农村推行_____", selectA: "个人联产承包责任制", selectB: "互助合作社", selectC: "家庭联产承包责任制", selectD: "乡镇责任制", answer: "C" },
      { question: "高举中国特色社会主义伟大旗帜是党的第_____次全国代表大会的主题", selectA: "十二", selectB: "十三", selectC: "十六", selectD: "十七", answer: "D" },
      { question: "深化政治体制改革必须坚持正确政治方向，以保证_____为根本，以增强党和国家活力、调动人民积极性为目标", selectA: "依法治国", selectB: "党的领导", selectC: "人民当家做主", selectD: "多党合作", answer: "C" },
      { question: "加快推进社会建设，必须优先发展_____，建设人力资源强国", selectA: "民生", selectB: "科技", selectC: "经济", selectD: "教育", answer: "D" },
      { question: "_____第一次将中国的对外政策概括为“独立自主的和平外交政策”", selectA: "1986年3月《关于第七个五年计划的报告》", selectB: "1981年6月《关于建国以来党的若干历史问题的决议》", selectC: "1993年11月《关于建立社会主义市场经济体制若干问题的决定》", selectD: "1984年10月《关于经济体制改革的决定》", answer: "A" },
      { question: "“一个中心，两个基本点”的基本路线提出是在_____年", selectA: "1985年", selectB: "1986年", selectC: "1987年", selectD: "1988年", answer: "C" },
      { question: "“十五大”报告第一次提出_____是社会主义市场经济的重要组成部分", selectA: "公有制经济", selectB: "非公有制经济", selectC: "个体经济", selectD: "外资经济", answer: "B" },
      { question: "_____是迄今世界上观测能段范围最宽、能量分辨率最优的空间探测器", selectA: "悟空号", selectB: "墨子号", selectC: "嫦娥一号", selectD: "麦哲伦号", answer: "A" },
      { question: "进入新世纪，我国对外开放发展到一个新阶段，其显著特点是_____", selectA: "从注重硬件发展到注重软件", selectB: "兴办经济特区发展到开放沿海港口城市", selectC: "吸收利用外资发展到扩大到国际劳务合作和跨国经营", selectD: "多层次、宽领域、全方位开放的格局已经形成", answer: "D" },
      { question: "中国特色社会主义的基本要求是_____", selectA: "对内改革，对外开放", selectB: "效率优先，兼顾公平", selectC: "人民民主，依法治国", selectD: "科学发展，社会和谐", answer: "D" },
      { question: "下列城市中，_____既是清政府第一批被迫开放的通商口岸，又是我国最早的经济特区城市", selectA: "深圳", selectB: "珠海", selectC: "汕头", selectD: "厦门", answer: "D" },
      { question: "_____年中央“一号文件”颁布，指出联产承包制是在党的领导下中国农民的伟大创造，是马克思主义农业合作化理论在中国实践中的新发展", selectA: "1983", selectB: "1984", selectC: "1985", selectD: "1986", answer: "A" },
      { question: "_____系统论述了社会主义初级阶段理论，全面阐述了党的“一个中心，两个基本点”的基本路线", selectA: "中国共产党第十三次全国代表大会", selectB: " 中国共产党第十二次全国代表大会", selectC: "中国共产党第十一届中央委员会第三次全体会议", selectD: " 中国共产党第十二届中央委员会第三次全体会议", answer: "A" },
      { question: "改革开放新时期最显著的成就是快速发展。从“发展才是硬道理”到_____，再到实现科学发展，党带领中国人民实现了社会生产力的发展和综合国力的跃升", selectA: "发展是党执政兴国的第一要务", selectB: "可持续发展", selectC: "均衡发展", selectD: "全面发展  ", answer: "A" },
      { question: "中国共产党第十七次全国代表大会的主题是：高举中国特色社会主义伟大旗帜，以邓小平理论和“三个代表”重要思想为指导，深入贯彻落实科学发展观，继续解放思想，坚持改革开放，推动科学发展，促进社会和谐，为夺取全面建设_____新胜利而奋斗", selectA: "社会主义社会", selectB: "小康社会", selectC: "新社会", selectD: "共产主义社会", answer: "B" },
      { question: "2005年12月31日上午，渤海银行正式挂牌成立，它的成立创造多项纪录，不仅是我国首家在发起阶段便引入海外股东的商业银行，也是首家总部位于天津的_____银行", selectA: "地区性商业", selectB: "全国性商业", selectC: "城乡一体商业", selectD: "国际性商业", answer: "B" },
      { question: "2016年4月25日，习近平总书记来到安徽省滁州市凤阳县小岗村感慨道：“当年贴着身家性命干的事，变成中国改革的一声惊雷，成为中国改革的标志。”总书记说的“当年贴着身家性命干的事”指的是_____", selectA: "建立深圳等经济特区", selectB: "对农业社会主义改造的完成", selectC: "实行家庭联产承包责任制", selectD: "实施对外开放", answer: "C" },
      { question: "上海迪士尼乐园于2016年6月正式开园，它的建成再次吸引人们把目光投向浦东。在新时期对外开放的过程中，上海浦东新区被誉为_____", selectA: "对外开放的窗口", selectB: "农村改革的排头兵", selectC: "城市改革的试验田", selectD: "扩大开放的窗口", answer: "D" },
      { question: "下列活动属于中国发展社会主义市场经济客观要求的是_____", selectA: "加入世贸组织", selectB: "以经济建设为中心", selectC: "南方谈话", selectD: "开放浦东", answer: "A" },
      { question: "2018年是我国设立经济特区_____周年", selectA: "28", selectB: "38", selectC: "30  ", selectD: "35", answer: "B" },
      { question: "改革开放前期（1979年）试办的经济特区不包括_____", selectA: "深圳", selectB: "厦门", selectC: "上海", selectD: "汕头", answer: "C" },
      { question: "中国目前最大的经济特区是_____", selectA: "海南经济特区", selectB: "深圳经济特区", selectC: "上海经济特区", selectD: "厦门经济特区", answer: "A" },
      { question: "改革开放以来，民生工程大力开展，其中的三峡截流工程是在_____年正式竣工", selectA: "1994", selectB: "1996", selectC: "1997", selectD: "1999", answer: "C" },
      { question: "改革开放以来，中国文体事业蒸蒸日上，_____年是中国体育健儿第一次获得奥运会金牌的年份", selectA: "1980", selectB: "1982", selectC: "1984", selectD: "1986", answer: "C" },
      { question: "党的十九大报告指出，建设_____经济体系是跨越关口的迫切要求和我国发展的战略目标", selectA: "现代化", selectB: "信息化", selectC: "工业化", selectD: "智能化", answer: "A" },
      { question: "经济体制改革必须以完善_____和要素市场化配置为重点，实现产权有效激励、要素自由流动", selectA: "产权制度", selectB: "分配制度", selectC: "交易制度", selectD: "财政制度", answer: "A" },
      { question: "改革开放_____", selectA: "是我国的强国之路", selectB: "是我国的执政之基", selectC: "是我国的立国之本", selectD: "是我国的力量之源", answer: "A" },
      { question: "关于实践是检验真理的唯一标准的讨论，是在老一辈无产阶级革命家的领导和支持下开展起来的。这里的“老一辈无产阶级革命家”的代表人物是_____", selectA: "孙中山", selectB: "毛泽东", selectC: "刘少奇", selectD: "邓小平", answer: "D" },
      { question: "邓小平同志说：“1977年和1978年，中国处于徘徊状态。”其主要原因是_____", selectA: "“两个凡是”居主导地位", selectB: "冤假错案的平反工作迟缓", selectC: "真理标准问题讨论受压制", selectD: "十一届三中全会没有召开", answer: "C" },
      { question: "促成毛泽东和邓小平先后成为党中央领导集体的核心人物的历史会议分别是_____和_____", selectA: "中共一大 遵义会议", selectB: "遵义会议 中共七大", selectC: "中共七大 中共八大", selectD: "遵义会议 十一届三中全会", answer: "D" },
      { question: "1978年以前的小岗村，是全县有名的“吃粮靠返销，用钱靠救济，生产靠贷款”的“三靠村”，每年秋收后几乎家家外出讨饭。1978年后，当地农民咏唱的新生活是“吃不愁，穿不愁，腰里别着十块头，又娶媳妇又盖楼”。导致这种变化因为_____", selectA: "完成了土地改革", selectB: "加入了农业合作社", selectC: "建立了人民公社", selectD: "实行了家庭联产承包责任制", answer: "D" },
      { question: "改革开放后的农村为了进一步提高致富水平、实现现代化而开辟的一条新路是指_____", selectA: "实行包产到户", selectB: "实行人民公社化", selectC: "参加生产合作社", selectD: "发展农村乡镇企业", answer: "A" },
      { question: "我国城市的改革仍然是对内改革的重中之重，我国城市改革全面展开的时间及最早改革的重点是_____", selectA: "1978年国有企业", selectB: "1985年国有企业", selectC: "1985年私有企业", selectD: "1992年私有企业", answer: "B" },
      { question: "农村改革以前，农民生产积极性不高，其原因不包括_____", selectA: "农村人民公社是吃大锅饭", selectB: "农民缺少生产的自主权", selectC: "农民辛苦一年收入却不多", selectD: "农民思想文化素质较低", answer: "D" },
      { question: "下列事件中，能够充分体现广大农民首创精神的事例包括_____", selectA: "遵义会议", selectB: "土地改革", selectC: "十一届三中全会 ", selectD: "小岗村“大包干”", answer: "D" },
      { question: "我国实行改革开放的根本目的是_____", selectA: "引进国外资金和技术", selectB: "解放和发展社会生产力", selectC: "允许个体经济和私营经济发展", selectD: "增加农民的收入", answer: "B" },
      { question: "“两弹一星”显示了中国的科技实力，其中”两弹”是指_____和_____", selectA: "原子弹 氢弹", selectB: "原子弹 导弹", selectC: "导弹 氢弹", selectD: "核弹 氢弹", answer: "D" },
      { question: "美国著名太空学者迪安说：”美国人必须清醒意识到，我们在太空中面对的将不仅仅是白蓝红旗帜（俄罗斯国旗），一条红色巨龙正在太空轨道中升起！”这条”红色巨龙”最有可能是指_____", selectA: "东方红一号卫星", selectB: "神舟五号载人飞船", selectC: "神舟七号载人飞船", selectD: "嫦娥一号绕月卫星", answer: "B" },
      { question: "一个2001年”国家最高科学技术奖”获得者，一位2004年感动中国当选人物，人们形容他”一个人干了两亿人的活”，这是因为他_____", selectA: "研制原子弹爆炸成功", selectB: "研制出“银河一号”巨型计算机", selectC: "培育出杂交水稻", selectD: "推动载人航天事业发展", answer: "C" },
      { question: "《国家中长期科技与技术发展纲要》明确了未来中国科技发展的指导方针与总体目标，提出到_____年要进入创新型国家前列", selectA: "2015", selectB: "2020", selectC: "2025", selectD: "2030", answer: "B" },
      { question: "自主创新，就是从增强国家创新能力出发，加强原始创新、_____和引进消化吸收再创新", selectA: "集成创新", selectB: "科技创新", selectC: "技术创新", selectD: "理论创新", answer: "A" },
      { question: "《我国中长期科学和技术发展规划与纲要》提出到2020年，要将我国全社会研究开发投入占国内生产总值的比重提高到_____", selectA: "2.5%", selectB: "2.5%以上", selectC: "3%", selectD: "3%以上", answer: "C" },
      { question: "《我国中长期科学和技术发展规划与纲要》的若干配套政策规定，国家高新技术产业开发区内新创办的高新技术企业经严格认定后，自获利年度起两年内免征所得税，两年后减按_____的税率征收企业所得税", selectA: "15%", selectB: "20%", selectC: "25%", selectD: "30%", answer: "A" },
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
