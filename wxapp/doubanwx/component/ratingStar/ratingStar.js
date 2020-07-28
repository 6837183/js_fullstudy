// component/ratingStar/ratingStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      score: {
        type: Number,
        value: 0
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      list:[

      ]
  },
 lifetimes: {
    attached: function() {
        let score = this.data.score
        let list = this.data.list
        let scoreint = parseInt(score)
        for (let i=0;i<scoreint;i++){
          list.push('../../assets/imgs/2.png')
        }
        if(score==scoreint){
          for( let j=0;j<5-scoreint;j++)
            list.push('../../assets/imgs/1.png')
        }else{
          
           list.push('../../assets/imgs/3.png')
          for(let j=0;j<5-1-score;j++){
            list.push('../../assets/imgs/1.png')
          }
        
        }
        this.setData({
          list : list
        })

        
    }
 },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
