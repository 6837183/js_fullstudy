// component/ratingStar/ratingStar.js
const STAR_ON = "../../assets/imgs/2.png";
const STAR_OFF= "../../assets/imgs/1.png";
const STAR_HALF = "../../assets/imgs/3.png";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      score: {
        type: Number,
       observer:function(newVal,oldVal,path){
        let stars = [STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF]
        if(newVal>0){
          newVal = newVal / 10
          let floor = Math.floor(newVal)
          if(floor != newVal){ //说明有小数
            stars[floor] = STAR_HALF
          }
          for(let i = 0; i<floor; i++){
            stars[i] = STAR_ON
          }
        }
        this.setData({
          stars:stars
        })
       }
      },
      iconSize:{
        type:String,
        value:'26rpx'
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      // list:[
      // ]
      stars: [STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF]

  },
 lifetimes: {
    // attached: function() {
    //     let score = this.data.score
    //     let list = this.data.list
    //     let scoreint = parseInt(score)
    //     for (let i=0;i<scoreint;i++){
    //       list.push('../../assets/imgs/2.png')
    //     }
    //     if(score==scoreint){
    //       for( let j=0;j<5-scoreint;j++)
    //         list.push('../../assets/imgs/1.png')
    //     }else{
          
    //        list.push('../../assets/imgs/3.png')
    //       for(let j=0;j<5-1-score;j++){
    //         list.push('../../assets/imgs/1.png')
    //       }
        
    //     }
    //     this.setData({
    //       list : list
    //     })

        
    // }
 },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
