//index.js
const app = getApp()
const db= wx.cloud.database()
const projects = db.collection('projects')




Page({
  data: {
    title:'',
    images:[]
  },
  changeTitle(event){
    console.log(event.detail);
    this.setData({
      title:event.detail
    })
  },
  upload() {
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: (res) =>{
        // success
        // 1. 本地地址
        // 2. 云端
        // 3. this.data.images []
        const images = [];
        let idx = 0;

        const tempFilePaths = res.tempFilePaths;
        for(let filePath of tempFilePaths) {
          let tmpFileName = (+ new Date() + Math.floor(
            Math.random()*1000)).toString() + '.png'
            wx.cloud.uploadFile({
              cloudPath:tmpFileName,
              filePath:filePath,
              fail: error =>{
                  idx++;
              },
              success: (res)=>{
                // success
                idx++;
                images.push(res.fileID)
                if( idx == tempFilePaths.length){
                  console.log('图片上传完毕');
                  this.setData({
                    images:images
                  })
                }
              },

            })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  createProject(){
    // promise 异常

    projects.add({
      data:{
        title:this.data.title,
        images:this.data.images
      }
    })
    .then(res=>{
      wx.showToast({
        title:'上传成功',
        icon:'success'
      })
    })
    .catch(error=>{
      wx.showToast({
        title:'发布项目失败',
        icon:'error'
      })
    })
  }
})

