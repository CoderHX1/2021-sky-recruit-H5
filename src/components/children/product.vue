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
        <div class="item b"></div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'product',
  props:{
    msg:String
  },
  data () {
    return {
      leftFlag:true,
      rightFlag:false,
      aFlag:false,
      bFlag:false,
      transformX:-12,
      transform:{
        transition: 'transform .7s ease',
        transform:'translate(-12%,0)'
      },
      datas:['','','',''],
    };
  },
  methods:{
    getX(){
        return this.transformX;
    },
    tabScroll(e){
      // console.log("e------",e)
    },
    swiperleft(){
      //  console.log(this.transformX)
       if(this.transformX<-12){
         this.transformX=this.transformX+18;
        this.transform.transform='translate('+this.transformX+'%,0)'
      }
    },
    swiperright(){
       if(this.transformX>-65){
        this.transformX=this.transformX-18;
        this.transform.transform='translate('+this.transformX+'%,0)'
      }

    }
  }
};
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
  background: url('~@/assets/img1/background-2 1_1.png') no-repeat center;
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

  background:  url('~@/assets/img1/Component 2.png') no-repeat center;
  background-size: 100%;
  float: right;
  padding-right: 20px;

}
.bottom{
  width: 100%;
  height: 500px;
}
.list{
  width: 400%;
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
  background: url('~@/assets/img1/design.png') no-repeat center;
  background-size: 100%;
}
.red{
  background: url('~@/assets/img1/PM.png') no-repeat center;
  background-size: 100%;
}
.a{
  background: url('~@/assets/img1/product_operation.png') no-repeat center;
  background-size: 100%;
}
.b{
  background: url('~@/assets/img1/technological.png') no-repeat center;
  background-size: 100%;
}
.right{
  transform: translate(-25%,0);
  transition: transform .7s ease;
}
.left{
  transform: translate(0%,0);
  transition: transform .7s ease;
}
</style>
