<template>
  <div class="container">
      
    <Pic1></Pic1> 
    <Pic3></Pic3>
    <div class="pic5">
      <img src="../assets/2-1.png" alt />
    </div>
    <div class="pic6">
      <img src="../assets/2-2.png" alt />
    </div>
     <div class="Question">
         <span>题目{{itemNum}}</span>
         <ul>
             <li  v-for="(item,index) in itemDetail[itemNum-1].topic_answer" 
        :key="index">{{item.answer_name}}</li>
         </ul>
      
    </div>
    
    
  </div>
</template>

<script>
import Pic1 from "@/components/Pic1";
import Pic3 from "@/components/Pic3";
 import { mapState } from "vuex";
export default {
  components: {
    Pic1,
    Pic3,
   
  },
  computed:
       mapState([
             "itemNum",
             'itemDetail'
        ])
        
     
  
};
</script>

<style>
.container {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
}
.pic3 {
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  left: 280px;
}
.pic3 img {
  width: 70%;
  height: 80%;
}
.pic5{
    position: absolute;
    top: 100px;
    left: 30px;
}
.pic5 img{
    width: 90%;
    height: 90%;
}
.pic6 {
    position: absolute;
    top: 380px;
    left: 140px;
}
.pic6 img {
    width: 60%;
    height: 60%;
}
.Question{
    position: absolute;
    top: 150px;
    left: 80px;
    color: aliceblue;
}
.Question ul{
    list-style: none;
}
</style>