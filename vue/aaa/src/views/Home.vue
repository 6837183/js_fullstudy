<template>
  <div class="home">
    <Pic1></Pic1>
    <Pic2></Pic2>
    <Pic3></Pic3>
    <div class="pic4" @click="changeView">
      <img src="../assets/1-4.png" alt />
    </div>
  </div>
</template>

<script>
import Pic1 from "@/components/Pic1";
import Pic2 from "@/components/Pic2";
import Pic3 from "@/components/Pic3";

export default {
  name: "Home",
  components: {
    Pic1,
    Pic2,
    Pic3
  },
  methods: {
    changeView() {
      this.$router.push({ path: "/aaa" });
    }
  }
};
</script>
<style >
.home {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
}
.pic1 img {
  width: 100%;
  height: 100%;
}
.pic2 {
  box-sizing: border-box;
  position: absolute;
  top: 80px;
  left: 20px;
}
.pic2 img {
  width: 90%;
  height: 90%;
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
.pic4 {
  box-sizing: border-box;
  position: absolute;
  top: 380px;
  left: 140px;
}
.pic4 img {
  width: 60%;
  height: 60%;
}
</style>
