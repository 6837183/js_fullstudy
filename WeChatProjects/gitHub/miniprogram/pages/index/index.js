//index.js
const app = getApp()
const github = require('../../api/github.js')
Page({
  data: {
    trends: [],

  },
  onSearch: function (value) {
    console.log(value, '++++++++++++++');
  },
  onLoad: function () {
    wx.startPullDownRefresh({})
  },
  onPullDownRefresh: function () {
    this.reloadData()
  },
  reloadData: function () {
    // 数据 wx.request collection.get
    // 
    github
      .trendings()
      .then(data => {
        console.log(data);
      })
  }


})
