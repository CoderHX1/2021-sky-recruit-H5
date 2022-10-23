<template>
<div class="HomePage">
  <div class="content" id="homePage">
    <div class="top">
    </div>
    <div class="middle">
      <div class="box">
      </div>
    </div>
    <div class="bottom">
      <div class="skip" id="skip" @click="skips()">
        <!-- <router-link :to="{ path: '/cute'}" replace>cccccc</router-link> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomePage',

  data () {
    return {
      clientHeight: document.documentElement.clientHeight
    }
  },
  mounted () {
    // this.clientHeight += 'px';
    document.getElementById('homePage').style.height = this.clientHeight + 'px'
    console.log(this.clientHeight);
  },
  methods:{
    skips(){
      console.log(this.$parent.$parent);
      //this.$parent.$parent.moveto(2);
      this.$parent.$parent.next();
      this.$parent.$parent.next();
    //首页实现跳转到部门介绍
    /* const returnEle = document.querySelector("#productId");
        if (!!returnEle) {
          returnEle.scrollIntoView(true);
        }
        document.querySelector("counter1").scrollIntoView(true);*/

    }
  }
}
</script>


<style scoped>
/* .HomePage{
  background: linear-gradient(179.98deg, #FEDD7D 0.02%, #FDFBEA 67.02%);
} */
.content{
  width: 100vw;
  /*height: 100%;*/
  background: url('~@/assets/img1/index.jpg') no-repeat center;
  background-size: 100%;
  position: relative;
  /*z-index: 999;*/

}
.top{
  width: 100%;
  height: 189px;
  padding-top: 43px;
  background: url('~@/assets/img1/Frame 103.png') no-repeat center;
  background-size: 100%;
}
.middle{
  height: 420px;
  width: 100%;
}
.box{
  width: 313px;
  height: 281px;
  position: absolute;
  margin-top: 119px;
  padding-left: 45px;
  bottom: 4.5rem;
  background: url('~@/assets/img1/butterfly.png')no-repeat center;
  background-size: 100%;

}
.bottom{
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 3.5rem;
}
.skip{
  width: 100px;
  height: 27px;
  float: right;
  background: url('~@/assets/img1/Frame 65.png') no-repeat center;
  background-size: 100%;
}
</style>
