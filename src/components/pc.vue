<template>
  <div id="pc-code">
    <div class="pc-img">
      <img :src="pcCode" onclick="return false" style="
    max-width: 300px;
">
    </div>
    <div class="pc-text" id="pc-text">
      <h4>请使用手机扫描二维码进行访问~</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "pc",
  data () {
    return {
      pcCode: require('../assets/QR.png')
    }
  }
}
</script>

<style scoped>
#pc-code {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background:white;
  color: #fff;
}

#pc-code .pc-img {
  max-width: 300px;
  /*opacity: 0;*/
  animation: mymove 0.5s forwards;
  animation-delay: 0.5s;
}

#pc-code .pc-text {
  margin-top: 3vh;
  /* font-size: 1.5rem; */
  /*opacity: 0;*/
  animation: mymove 0.5s forwards;
  animation-delay: 0.5s;
}

.pc-text>h4{
  font-size: 2.5vh;
  color: #475c7c;
}
</style>
