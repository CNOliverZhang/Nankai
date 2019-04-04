Page({

  data: {
    celebrities: [
      {
        name: '周恩来',
        description: '南开大学第一届校友，中华人民共和国开国总理，杰出的政治家和外交家。党和国家的好领袖，人民的好公仆。',
      },
      {
        name: '张伯苓',
        description: '中国现代职业教育家，南开大学创建人，第一任校长。西方戏剧以及奥运会的最早倡导者，被誉为“中国奥运第一人”。',
      },
      {
        name: '严修',
        description: '中国近代著名教育家和学者，与张伯苓合作创办南开大学。是革新封建教育以及推进教育现代化的先驱。',
      },
      {
        name: '杨石先',
        description: '南开大学原校长，有机化学巨擘。有机农药研究的先驱者，为解决我国粮食虫害做出了不可磨灭的贡献。',
      },
      {
        name: '母国光',
        description: '南开大学原校长，著名教育家、光学家。中国早期从事光学、应用光学、光学仪器研究工作的学术带头人。',
      },
      {
        name: '张锡祜',
        description: '张伯苓第四子，抗日烈士。九一八事变后，毅然弃学离家，投军报国。驾机对日作战途中坠毁，壮烈殉国。',
      },
      {
        name: '郭永怀',
        description: '中国科学院力学研究所副所长，参与了两弹一星的设计。因坠机牺牲，牺牲时用身体护住绝密资料。',
      },
      {
        name: '于方舟',
        description: '五四运动的杰出领导者之一，天津党组织的创始人之一。领导了冀东第二次玉田暴动，被捕后英勇就义。',
      },
      {
        name: '马骏',
        description: '天津第一批共产党员，后赴东北组织反帝爱国运动，是东北党组织的创始人之一。由于叛徒出卖被捕牺牲。',
      },
      {
        name: '陈镜湖',
        description: '天津共产主义青年团的主要创始人，中国共产党早期党员。参加察哈尔省抗日同盟军的筹备工作途中遇袭牺牲。',
      },
      {
        name: '何懋勋',
        description: '在鲁西北抗日根据地参加抗日救亡工作，任青年抗日挺进大队参谋长。遭日伪军大部队突袭，英勇牺牲。',
      },
      {
        name: '倪民有',
        description: '西南联大时响应国民政府号召志愿从军，抗战胜利后复学，无锡解放后再次投笔从戎。因匪徒突袭英勇牺牲。',
      },
      {
        name: '陈省身',
        description: '20世纪最伟大数学家之一，现代微分几何之父，南开数学研究所的创始人。致力于推进中国数学的发展。',
      },
      {
        name: '吴大猷',
        description: '著名物理学家，被誉为中国物理学之父。曾在西南联大教授古典力学，培养了杨振宁、李政道等物理学巨擘。',
      },
      {
        name: '穆旦',
        description: '著名爱国诗人和翻译家，九叶诗派成员之一。曾参加中国远征军，随军赴缅甸战场。被誉为现代诗歌第一人。',
      },
      {
        name: '曹禺',
        description: '著名现代话剧剧作家和戏剧教育家。他的话剧戏剧标志中国话剧艺术渐趋成熟，被誉为“中国的莎士比亚”。',
      },
    ],
  },

  choose: function (e) {
    let that = this
    that.setData({
      name: e.target.id
    })
    wx.navigateTo({
      url: '../poster/poster?name=' + that.data.name,
    })
  }
})