<template>
<div class="content">
  <div class="top">
    <div class="up"></div>
    <div class="down"></div>
  </div>
  <div class="middle"></div>
  <div class="bottom"></div>
</div>
</template>

<script>
export default {
  name: 'manage'
}
</script>

<style scoped>
.section {
  position: relative;
  text-align: center;
}
body {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
.content{
  width: 100vw;
  height: 100vh;
  background: url('~@/assets/img1/introduce.png') no-repeat center;
  background-size: 100%;
  z-index: 9999;
}
.top{
  width: 100%;
  height: 297px;
  padding-top: 4px;
}
.up{
  background: url('~@/assets/img1/Frame 104.png') no-repeat center;
  background-size: 100%;
  width: 100%;
  height: 135px;
}
.down{
  background: url('~@/assets/img1/Frame 132.png') no-repeat center;
  background-size: 100%;
  width: 100%;
  height: 162px;
}
.middle{
  background: url('~@/assets/img1/Frame 106.png') no-repeat center;
  background-size: 100%;
  width: 100%;
  height: 187px;
}
.bottom{
  background: url('~@/assets/img1/Frame 107.png') no-repeat center;
  background-size: 100%;
  width: 100%;
  height: 182px;
}
</style>
