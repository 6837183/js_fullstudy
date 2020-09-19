<template>
  <div class="detail"  >
      <h1>Computed 计算属性</h1>

      <div class="price" >
          {{totalPrice}}元
      </div>

      <div class="new">
      <ul >
  <li v-for="(item,index) in reverseNews" v-bind:key="index">
    {{ item.title }}---{{item.date}}
  </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            price: 100,
            num: 5,
            news: [
              {title: '及喀什噶实力坑爹高UI工具偶', date: '2020/08/24'},
              {title: '水电费噶如果我OA而给你挠挠步步高', date: '2020/08/25'},
              {title: '科罗娜济南市若GV哪怕是尼日归纳', date: '2020/08/26'},
              {title: '卡视角噶实力坑爹公开案审批', date: '2020/08/27'}
            ]
        }
    },
    computed: {
        totalPrice: function() {
            return this.price * this.num
        },
        reverseNews: function() {
            let news = this.news
            return news.reverse()
        }
    }
}
</script>

<style>

</style>