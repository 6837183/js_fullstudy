// 数据库的数据，拿到js，js，渲染到HTML

  //云数据库初始化
  const db = wx.cloud.database().collection('Group')

const app = getApp()

Page({
  data: {
    groupList:[] 
  },
  
  onShow: function() {
    const self = this
    wx.cloud.callFunction({
      name: 'getGroup',
      success(res) {
        console.log(res)
        self.setData({
          groupList: res.result.data
        })
      }
    })
  }
})