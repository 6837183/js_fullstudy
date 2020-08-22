//index.js
const app = getApp()
const db = wx.cloud.database();
// mysql  table  row fields
// mongodb(js) collection json Document 
const productsCollection = 
  db.collection('products');
Page({
  uploadAvatar(){
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: res => {
        // success
        // console.log(res.tempFilepath);
        for(let file of res.tmpFilePath){
          let currentFileName = 
          Math.floor(Math.random()*1000000).toString()+'.png';
          wx.cloud.uploadFile({
            cloudPath:currentFileName,
            filePath,
            success:res => {
              console.log(res);
            }
          })
        }
      }
    })
  },
  data: {
    page:1,
    products: []
  },
  gotoDetail(event) {
   productsCollection.doc(
     event.currentTarget.dataset.id
     )
     .get() 
     .then(res =>{
       console.log(res);
       this.setData({
         products:res.data
       })
     })
  },
  onLoad() {
    productsCollection
      .get()
      .then(res => {
        // console.log(res);
        this.setData({
          products: res.data
        })
      })
  }
})