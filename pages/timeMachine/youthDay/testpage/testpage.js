var postData = require("../src/data.js");
const app = getApp();
var teen = postData.teen;
var progressNum = 0;
var question_index;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: postData.question,
    chioce: postData.answer,
    pagenum: progressNum,
    shareImg: 'https://image.potatofield.cn/youthDay/share.jpg'
  },
  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    let arr = JSON.parse(options.arr)
    that.setData({
      list: arr,
      index: arr[progressNum]
    })
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          window_info:{
            height:res.windowHeight,
            width:res.windowWidth
          }
        })
      },
    })
    wx.downloadFile({
      url: this.data.shareImg,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          shareImg: tempFilePath
        })
      }
    })
  },

  test_a: function () {
    if(this.data.list[progressNum]==0)
    {
     teen[1].weight+=4;

    }
    if (this.data.list[progressNum] == 1) {
      teen[1].weigh += 2;
      teen[6].weigh += 4;
    }
    if (this.data.list[progressNum] == 2) {
      teen[0].weigh += 2;
      teen[3].weigh += 2;
    }
    if (this.data.list[progressNum] == 3) {
      teen[3].weigh += 2;
      teen[0].weigh += 4;
    }
    if (this.data.list[progressNum] == 4) {
      teen[1].weigh += 4;
      teen[6].weigh += 4;
    }
    if (this.data.list[progressNum] == 5) {
      teen[3].weigh += 2;
      teen[1].weigh += 2;
      teen[6].weigh += 2;
    }
    if (this.data.list[progressNum] == 6) {
      teen[1].weigh += 2;
      teen[6].weigh += 4;
    }
    if (this.data.list[progressNum] == 7) {
      teen[3].weigh += 4;
      teen[0].weigh += 2;
    }
    progressNum++;
    if(progressNum<6)
    {var that = this;
    this.setData({
      pagenum:progressNum,
      index: this.data.list[progressNum]
    })}
   else
    {
      progressNum=0;
      teen.sort(function(a,b){return b.weigh-a.weigh});
      var storage = teen[0].name;
      wx.redirectTo({
        url: '../result/result?reslt=' + storage
      })
    }
  },
  test_b: function () {
    if (this.data.list[progressNum] == 0) {
      teen[0].weigh+=2;
      teen[1].weigh+=2;
      teen[3].weigh+=2;
      teen[6].weigh+= 2;
    }
    if (this.data.list[progressNum] == 1) {
      teen[3].weigh += 4;
      teen[0].weigh += 2;
    }
    if (this.data.list[progressNum] == 2) {
      teen[1].weigh += 2;
      teen[5].weigh += 2;
      teen[6].weigh += 4;
    }
    if (this.data.list[progressNum] == 3) {
      teen[1].weigh += 4;
      teen[6].weigh += 2;
    }
    if (this.data.list[progressNum] == 4) {
      teen[5].weigh += 4;
    }
    if (this.data.list[progressNum] == 5) {
      teen[0].weigh += 4;
    }
    if (this.data.list[progressNum] == 6) {
      teen[1].weigh += 2;
      teen[5].weigh += 2;
      teen[6].weigh += 2;
    }
    if (this.data.list[progressNum] == 7) {
    }
    progressNum++;
    if(progressNum<6)
    {var that = this;
    this.setData({
      pagenum: progressNum,
      index: this.data.list[progressNum]
    })}
   else
   {
      progressNum = 0;
      teen.sort(function (a, b) { return b.weigh - a.weigh });
      var storage=teen[0].name;
      wx.redirectTo({
        url: '../result/result?reslt=' + storage
      })
    }
  },
  test_c: function () {
    if (this.data.list[progressNum] == 0) {
      teen[2].weigh += 2;
      teen[4].weigh += 4;
      teen[5].weigh += 2;
    }
    if (this.data.list[progressNum] == 1) {
      teen[5].weigh += 4;
    }
    if (this.data.list[progressNum] == 2) {
      teen[1].weigh += 2;
      teen[2].weigh += 2;
    }
    if (this.data.list[progressNum] == 3) {
      teen[2].weigh += 4;
      teen[4].weigh += 2;
    }
    if (this.data.list[progressNum] == 4) {
      teen[3].weigh += 2;
      teen[5].weigh += 2;
    }
    if (this.data.list[progressNum] == 5) {
      teen[0].weigh += 2;
    }
    if (this.data.list[progressNum] == 6) {
      teen[0].weigh += 2;
      teen[3].weigh += 2;
    }
    if (this.data.list[progressNum] == 7) {
      teen[1].weigh += 2;
      teen[6].weigh += 4;
    }
    progressNum++;
    if(progressNum<6)
   {var that = this;
    this.setData({
      pagenum: progressNum,
      index: this.data.list[progressNum]
    })}
   else {
      progressNum = 0;
      teen.sort(function (a, b) { return b.weigh - a.weigh });
      var storage = teen[0].name;
      wx.redirectTo({
        url: '../result/result?reslt=' + storage
      })
    }
  },
  test_d: function () {
    if (this.data.list[progressNum] == 0) {
      teen[2].weigh += 4;
      teen[4].weigh += 4;
    }
    if (this.data.list[progressNum] == 1) {
      teen[5].weigh += 2;
    }
    if (this.data.list[progressNum] == 2) {
      teen[2].weigh += 4;
      teen[4].weigh += 2;
    }
    if (this.data.list[progressNum] == 3) {
      teen[1].weigh += 2;
      teen[6].weigh += 2;
    }
    if (this.data.list[progressNum] == 4) {
      
    }
    if (this.data.list[progressNum] == 5) {
      teen[2].weigh += 4;
      teen[4].weigh += 2;
    }
    if (this.data.list[progressNum] == 6) {
      teen[5].weigh += 2;
    }
    if (this.data.list[progressNum] == 7) {
      teen[6].weigh += 2;
    }
    progressNum++;
    if (progressNum < 6) {
      var that = this;
      this.setData({
        pagenum: progressNum,
        index: this.data.list[progressNum]
      })
    }
    else {
      progressNum = 0;
      teen.sort(function (a, b) { return b.weigh - a.weigh });
      var storage = teen[0].name;
      wx.redirectTo({
        url: '../result/result?reslt='+ storage,
      })
    }
  },
})