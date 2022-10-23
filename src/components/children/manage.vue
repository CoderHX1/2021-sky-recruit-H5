<template>
<div class="productId">
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
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'manage',
  props:{
    msg:String
  },
  data () {
    return {
      leftFlag:true,
      rightFlag:false,
      transformX:-5,
      transform:{
        transition: 'transform .7s ease',
        transform:'translate(-5%,0)'
      },
      datas:['',''],
    };
  },
  methods:{
    tabScroll(e){
      // console.log("e------",e)
    },
    swiperleft(){
        if(this.transformX<-5){
        this.transformX=this.transformX+37.3;
        this.transform.transform='translate('+this.transformX+'%,0)'
      }
    },
    swiperright(){
      if(this.transformX>-42.3){
        this.transformX=this.transformX-37.3;
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
  background: url('~@/assets/img1/background-3 1.png') no-repeat center;
  background-size: 100%;
}
.top{
  width: 100%;
  height: 114px;
  padding-top: 4px;
}
.box{
  width: 100%;
  height: 114px;
  background:  url('~@/assets/img1/Frame 109.png') no-repeat center;
  background-size: 100%;

}
.bottom{
  width: 100%;
  height: 500px;
}
.list{
  width: 200%;
  height: 454px;
  padding-top: 21px;
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
  background: url('~@/assets/img1/administrative.png') no-repeat center;
  background-size: 100%;
}
.box_a{
  width: 16px;
  height: 414px;
  background: url('~@/assets/img1/Rectangle 148_1.jpg') no-repeat center;
  background-size: 100%;
}
.red{
  background: url('~@/assets/img1/layout.png') no-repeat center;
  background-size: 100%;
}
.right{
  transform: translate(-43%,0);
  transition: transform .7s ease;
}
.left{
  transform: translate(-5%,0);
  transition: transform .7s ease;
}
</style>
