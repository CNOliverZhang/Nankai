Page({

  data: {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    index: 0,
  },

  onLoad: function (options) {
    this.setData({
      mode: options.mode,
      start: Number(options.start),
      end: Number(options.end)
    })
  },

  //改变人数
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },

  //下一页
  next: function () {
    if (this.data.mode=='single') {
      var str_one = '抽签次数'
    } else {
      var str_one = '抽奖人数'
    }
    if (this.data.array[this.data.index] > this.data.end - this.data.start + 1) {
      wx.showModal({
        title: '数量过多',
        content: str_one + '不能超过指定范围内的号码总数',
        showCancel: false
      })
    } else {
      var now = new Date();
      var year = String(now.getFullYear());
      var month = String(now.getMonth() + 1);
      var day = String(now.getDate());
      var hour = String(now.getHours());
      var minute = String(now.getMinutes());
      if (minute.length < 2) {
        minute = '0' + minute
      }
      var second = String(now.getSeconds());
      if (second.length < 2) {
        second = '0' + second
      }
      var time = year + '年' + month + '月' + day + '日' + hour + ':' + minute + ':' + second;
      this.setData({
        number: this.data.array[this.data.index],
        time: time
      })
      var result = []
      while (result.length < this.data.number) {
        var rand = Math.floor(Math.random() * (this.data.end - this.data.start + 1)) + this.data.start
        if (result.indexOf(rand) == -1) {
          result.push(rand)
        }
      }
      wx.redirectTo({
        url: '../result/result?mode=' + this.data.mode + '&start=' + this.data.start + '&end=' + this.data.end + '&time=' + this.data.time + '&result=' + JSON.stringify(result)
      })
    }
  },
})