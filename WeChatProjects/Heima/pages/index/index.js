//Page Object
const app = getApp()
Page({
  changeMenu:
  function (e){
    console.log(e)
    this.setData({
      idname:e.currentTarget.id ,

    })
    console.log(this.data.idname);
  
    
  },
  data: {
    idname:'quanbu',
   
    category:[
      {name:'全部', id:'quanbu'},
      {name:'夏日', id:'xiari'},
      {name:'感谢', id:'ganxie'},
      {name:'生日', id:'shengri'},
      {name:'加油', id:'jiayou'},
      {name:'挚爱', id:'zhiai'},
      {name:'萌系', id:'mengxi'},
      {name:'咖啡', id:'kafei'},
    ],
    
        detail:[
        { id:'quanbu',
          banner:'../../img/pcd1.png',
          desc:'人鱼控  星礼卡',
          money:'￥100',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd2.png',
          desc:'拿铁  电子礼品卷一张',
          money:'￥32',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd3.png',
          desc:'百香果桃桃茶云乌龙  电子饮品劵1张',
          money:'￥38',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd4.png',
          desc:'你是我的小淘气  星礼卡',
          money:'￥50',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd5.png',
          desc:'Highfive  星礼卡',
          money:'￥199',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd6.png',
          desc:'焦糖玛奇朵  电子饮品券1张',
          money:'￥36',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd7.png',
          desc:'火龙果番石榴茶云乌龙  电子饮品券一张',
          money:'￥38',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd8.png',
          desc:'生日快乐  星礼卡',
          money:'￥100',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd9.png',
          desc:'干杯  星礼卡',
          money:'￥288',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd10.png',
          desc:'拿铁  电子饮品券5张',
          money:'￥160',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd11.png',
          desc:'THANK YOU  星礼卡',
          money:'￥100',
          icon:'../../img/preicon.png'     
        },
        { id:'quanbu',
          banner:'../../img/pcd12.png',
          desc:'听你哒  星礼卡',
          money:'￥199',
          icon:'../../img/preicon.png'     
        },
        { id:'xiari',
        banner:'../../img/pcd1.png',
        desc:'人鱼控  星礼卡',
        money:'￥100',
          icon:'../../img/preicon.png'     
        },
        { id:'xiari',
          banner:'../../img/pcd2.png',
          desc:'拿铁  电子礼品卷一张',
          money:'￥32',
          icon:'../../img/preicon.png'     
        },
        { id:'xiari',
          banner:'../../img/pcd3.png',
          desc:'百香果桃桃茶云乌龙  电子饮品劵1张',
          money:'￥38',
          icon:'../../img/preicon.png'     
        },
        { id:'xiari',
          banner:'../../img/pcd4.png',
          desc:'你是我的小淘气  星礼卡',
          money:'￥50',
          icon:'../../img/preicon.png'     
        },
      
      { id:'ganxie',
        banner:'../../img/pcd3.png',
        desc:'百香果桃桃茶云乌龙  电子饮品劵1张',
        money:'￥38',
        icon:'../../img/preicon.png'     
      },
      { id:'ganxie',
        banner:'../../img/pcd4.png',
        desc:'你是我的小淘气  星礼卡',
        money:'￥50',
        icon:'../../img/preicon.png'     
      },
      { id:'ganxie',
        banner:'../../img/pcd5.png',
        desc:'Highfive  星礼卡',
        money:'￥199',
        icon:'../../img/preicon.png'     
      },
      { id:'ganxie',
        banner:'../../img/pcd6.png',
        desc:'焦糖玛奇朵  电子饮品券1张',
        money:'￥36',
        icon:'../../img/preicon.png'     
      },
      { id:'shengri',
        banner:'../../img/pcd9.png',
        desc:'干杯  星礼卡',
        money:'￥288',
        icon:'../../img/preicon.png'     
      },
      { id:'shengri',
        banner:'../../img/pcd10.png',
        desc:'拿铁  电子饮品券5张',
        money:'￥160',
        icon:'../../img/preicon.png'     
      },
      { id:'shengri',
        banner:'../../img/pcd11.png',
        desc:'THANK YOU  星礼卡',
        money:'￥100',
        icon:'../../img/preicon.png'     
      },
      { id:'shengri',
        banner:'../../img/pcd12.png',
        desc:'听你哒  星礼卡',
        money:'￥199',
        icon:'../../img/preicon.png'     
      },
      { id:'jiayou',
      banner:'../../img/pcd3.png',
      desc:'百香果桃桃茶云乌龙  电子饮品劵1张',
      money:'￥38',
      icon:'../../img/preicon.png'     
      },
      { id:'jiayou',
        banner:'../../img/pcd4.png',
        desc:'你是我的小淘气  星礼卡',
        money:'￥50',
        icon:'../../img/preicon.png'     
      },
      { id:'jiayou',
        banner:'../../img/pcd5.png',
        desc:'Highfive  星礼卡',
        money:'￥199',
        icon:'../../img/preicon.png'     
      },
      { id:'jiayou',
        banner:'../../img/pcd6.png',
        desc:'焦糖玛奇朵  电子饮品券1张',
        money:'￥36',
        icon:'../../img/preicon.png'     
      },
      { id:'zhiai',
      banner:'../../img/pcd10.png',
      desc:'拿铁  电子饮品券5张',
      money:'￥160',
      icon:'../../img/preicon.png'     
      },
      { id:'zhiai',
        banner:'../../img/pcd11.png',
        desc:'THANK YOU  星礼卡',
        money:'￥100',
        icon:'../../img/preicon.png'     
      },
      { id:'zhiai',
        banner:'../../img/pcd12.png',
        desc:'听你哒  星礼卡',
        money:'￥199',
        icon:'../../img/preicon.png'     
      },
      { id:'zhiai',
      banner:'../../img/pcd3.png',
      desc:'百香果桃桃茶云乌龙  电子饮品劵1张',
      money:'￥38',
      icon:'../../img/preicon.png'     
      },
      { id:'mengxi',
        banner:'../../img/pcd11.png',
        desc:'THANK YOU  星礼卡',
        money:'￥100',
        icon:'../../img/preicon.png'     
      },
      { id:'mengxi',
        banner:'../../img/pcd12.png',
        desc:'听你哒  星礼卡',
        money:'￥199',
        icon:'../../img/preicon.png'     
      },
      { id:'mengxi',
      banner:'../../img/pcd3.png',
      desc:'百香果桃桃茶云乌龙  电子饮品劵1张',
      money:'￥38',
      icon:'../../img/preicon.png'     
      },
      { id:'mengxi',
        banner:'../../img/pcd4.png',
        desc:'你是我的小淘气  星礼卡',
        money:'￥50',
        icon:'../../img/preicon.png'     
      },
      { id:'kafei',
      banner:'../../img/pcd12.png',
      desc:'听你哒  星礼卡',
      money:'￥199',
      icon:'../../img/preicon.png'     
      },
      { id:'kafei',
      banner:'../../img/pcd3.png',
      desc:'百香果桃桃茶云乌龙  电子饮品劵1张',
      money:'￥38',
      icon:'../../img/preicon.png'     
      },
      { id:'kafei',
        banner:'../../img/pcd11.png',
        desc:'THANK YOU  星礼卡',
        money:'￥100',
        icon:'../../img/preicon.png'     
      },
      { id:'kafei',
        banner:'../../img/pcd12.png',
        desc:'听你哒  星礼卡',
        money:'￥199',
        icon:'../../img/preicon.png'     
      },
      ],
  
    imgUrls:[
      '/icons/b1.jpg',
      '/icons/b2.jpg',
      '/icons/b3.jpg'
    ],
    duration:800,
    interval:3000,
    recommends:[
      {image:'/icons/20.webp',title:'十点抢卷'},
      {image:'/icons/21.jpg',title:'好物特卖'},
      {image:'/icons/22.webp',title:'内购福利'},
      {image:'/icons/23.webp',title:'初秋上新'},

    ],
    titles: ["流行", "新款", "精选"],
    currentIndex: 0
  },
  //options(Object)
    itemClick(e) {
      console.log(11111);
      // 1.设置最新的index
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })

      // 2.发出时间
      // const data = {index: this.data.currentIndex}
      // this.triggerEvent("tabclick", data, {})
    },
    // setCurrentIndex(index) {
    //   console.log(index)
    //   this.setData({
    //     currentIndex: index
    //   })
    // },
  onLoad: function(options){
  
  },

  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});