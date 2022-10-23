<template>
<div class="content">
  <div class="top">
    <div class="box"></div>
  </div>
  <div class="bottom">
    <div class="list" :style="transform" id="tablist" @scroll="tabScroll">
        <div
          class="item skyblue"
        >
        </div>
        <div
          class="item red"
        >
        </div>
        <div class="item a"></div>
      </div>
  </div>
  <div style="width: 100%;height: 40px;margin: 0 auto;position: fixed;bottom: 20px">
    <button @click="toSignUp" class="toSignUp">点击报名</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'media',
  props:{
    msg:String
  },
  data () {
    return {
      leftFlag:true,
      rightFlag:false,
      aFlag:false,
      transformX:-12,
      transform:{
        transition: 'transform .7s ease',
        transform:'translate(-12%,0)'
      },
      datas:['','',''],
    };
  },
  methods:{
    toSignUp () {
      this.$uweb.trackEvent("点击报名","次数");
      this.$router.push('/signUp')
    },
    tabScroll(e){
      // console.log("e------",e)
    },
    swiperleft(){
      //  console.log(this.transformX)
       if(this.transformX<-12){
         this.transformX=this.transformX+23.6;
        this.transform.transform='translate('+this.transformX+'%,0)'
      }
    },
    swiperright(){
       if(this.transformX>-56){
        this.transformX=this.transformX-23.6;
        this.transform.transform='translate('+this.transformX+'%,0)'
      }
    }
  }
};
</script>

<style scoped>
.toSignUp{
  width: 150px;
  height: 40px;
  border-radius: 20px;
  font-size: 18px;
  /*opacity: 1;*/
  background: #fedf82;
  box-shadow: 2px 3px 6px 0px rgba(0,0,0,0.25);
}
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
  background: url('~@/assets/img1/background-1 1.png') no-repeat center;
  background-size: 100%;
}
.top{
  width: 100%;
  height: 114px;
  padding-top: 4px;
}
.box{
  width: 180px;
  height: 114px;
  background:  url('~@/assets/img1/Component 2 (1).png') no-repeat center;
  background-size: 100%;
  float: right;
  padding-right: 20px;
}
.bottom{
  width: 100%;
  height: 500px;
}
.list{
  width: 300%;
  height: 454px;
  padding-top: 21px;
  padding-left: 50px;
  overflow-x: scroll;
  white-space: nowrap;
}
.item{
  display: inline-block;
  height: 454px;
  width: 275px;
  box-sizing: content-box;
  line-height: 454px;
}
.skyblue{
  background: url('~@/assets/img1/newsletter.png') no-repeat center;
  background-size: 100%;

}
.red{
  background: url('~@/assets/img1/new_media.png') no-repeat center;
  background-size: 100%;

}
.a{
  background: url('~@/assets/img1/multimedia.png') no-repeat center;
  background-size: 100%;
}
.right{
  transform: translate(-33%,0);
  transition: transform .7s ease;
}
.left{
  transform: translate(0%,0);
  transition: transform .7s ease;
}
</style>
