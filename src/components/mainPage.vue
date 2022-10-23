<template>
  <div class="container">
    <full-page :options="options" ref="fullpage">
      <div class="section">
        <div class="box">
          <HomePage ref="HomePage"></HomePage>
        </div>
      </div>
      <div class="section">
        <div class="box1">
          <SuneBrief ref="SuneBrief"></SuneBrief>
        </div>
      </div>
      <template>
        <div class="section">
          <v-touch
            v-on:swipeleft="swiperleft_a"
            v-on:swiperight="swiperright_a"
          >
            <div class="box2">
              <manage ref="manage"></manage>
            </div>
          </v-touch>
        </div>
      </template>
      <template>
        <div class="section">
          <v-touch
            v-on:swipeleft="swiperleft_b"
            v-on:swiperight="swiperright_b"
          >
            <div class="box3">
              <product ref="product"></product>
            </div>
          </v-touch>
        </div>
      </template>
      <template>
        <div class="section">
          <v-touch
            v-on:swipeleft="swiperleft_c"
            v-on:swiperight="swiperright_c"
          >
            <div class="box4">
              <media ref="media"></media>
            </div>
          </v-touch>
        </div>
      </template>
<!--      <div class="section" id="signUp">-->
<!--        <div class="box5">-->
<!--          <signUp ref="signUp2" :successClear="successClear" :stopMove="stopMove" :Move="Move"></signUp>-->
<!--        </div>-->
<!--      </div>-->

    </full-page>
    <img
      src="../assets/Frame.png"
      alt=""
      class="arrow"
      id="bottomArrow"
      @click="next"
      :style="show"
    />
<!--    <div id="test">-->
<!--      <testQuestions-->
<!--        ref="testQuestions"-->
<!--        @toResult="toResult"-->
<!--        :style="testQShow"-->
<!--        style="width: 375px; height: 1624px"-->
<!--      ></testQuestions>-->
<!--      <testResult-->
<!--        ref="testResult"-->
<!--        @toSignUp="toSignUp"-->
<!--        style="width: 375px; height: 812px"-->
<!--      ></testResult>-->
<!--    </div>-->
  </div>
</template>

<!--<script src="https://cdn.bootcss.com/fullPage.js/2.9.5/vendors/scrolloverflow.min.js"></script>-->
<script>
import SuneBrief from "./children/SuneBrief";
import manage from "./children/manage";
import product from "./children/product";
import media from "./children/media";
import signUp from "./children/signUp";
import testQuestions from "./children/testQuestions";
import testResult from "./children/testResult";
import HomePage from "./children/HomePage.vue";



export default {
  name: "mainPage",
  components: {
    SuneBrief: SuneBrief,
    manage: manage,
    product: product,
    media: media,
    signUp: signUp,
    testQuestions: testQuestions,
    testResult: testResult,
    HomePage: HomePage,
  },
  data () {
    return {
      options: {
        afterLoad (anchorLink, index) {
          if (index.index === 4) {
            // console.log(5);
            // console.log(this.show);
            document.getElementById('bottomArrow').style.display = 'none'
          } else {
            document.getElementById('bottomArrow').style.display = ''
          }
        },
        scrollBar: false,
        menu: "#menu",
        anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
        animateAnchor: false,
        scrollingSpeed: 1200,
        // tochuSensitivity: 50,
        // scrollOverflow: true,
        scrollOverflowOptions: {
          mouseWheel: true,
          click: true,
          tap: true
        },
        touchSensitivity: 15,
        // mouseWheel: true,
        // click: true,
        // tap: true
        // autoScrolling: false,
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
        // sectionsColor: [
        //   '#41b883',
        //   '#ff5f45',
        //   '#0798ec',
        //   '#fec401',
        //   '#1bcee6',
        //   '#ee1a59',
        //   '#2c3e4f',
        //   '#ba5be9',
        //   '#b4b8ab'
        // ]
      },
      show: "display:fixed",
      clientHeight: document.documentElement.clientHeight
    };
  },
  mounted () {
    // console.log(this.options.scrollOverflow)
    // document.getElementsByTagName('html')[0].style.overflow = ''
    var n = navigator.userAgent

    if (n.indexOf('iPhone') <= -1) {

      window.onresize = () => {

        if (this.clientHeight > document.documentElement.clientHeight) {

          // 隐藏按钮
          // this.show = 'display: none;animation-play-state: paused;'
          // this.isShow = true
        } else {
          // 显示按钮
          // this.show = 'animation-play-state: paused;'
          // this.isShow = false
          document.getElementById('title').scrollIntoView()
          document.body.scrollTop = document.documentElement.scrollTop = 0
        }

      }
    }
  },
  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },
    moveto(index) {
      // 向下滚动一页
      this.$refs.fullpage.api.moveTo("", index);
    },
    //  当报名信息提交成功时，通过此方法清除输入框的信息（子组件signUp2调用）
    successClear () {
      // console.log(12345)
      this.$refs.signUp2.sex = "";
      this.$refs.signUp2.username = "";
      this.$refs.signUp2.qq = "";
      this.$refs.signUp2.number = "";
      this.$refs.signUp2.xy = "";
      this.$refs.signUp2.mj = "";
      this.$refs.signUp2.zy1 = "";
      this.$refs.signUp2.zy2 = "";
      this.$refs.signUp2.zy3 = "";
      this.$refs.signUp2.boyHead = require("../assets/img2/boyHead.jpg");
      this.$refs.signUp2.girlHead = require("../assets/img2/girlHead.jpg");
    },
    //  实现跳转到测试题页面
    // toTestQuestions(val) {
    //   this.fullPageShow = val;
    //   this.active = "";
    //   this.show = "display:none";
    // },
    //  实现跳转到测试结果页面
    // toResult(val) {
    //   this.testQShow = val;
    // },
    // toSignUp(val1, val2) {
    //   this.testRShow = val1;
    //   // this.active = val2
    //   this.fullPageShow = "";
    //   this.testQShow = "";
    // },
    // up() {
    //   // 向上滚动一页
    //   this.$refs.fullpage.api.moveSectionUp();
    // },
    //部门介绍的左右滑动
    swiperleft_a() {
      this.$refs.manage.swiperright();
    },
    swiperright_a() {
      this.$refs.manage.swiperleft();
    },
    swiperleft_b() {
      // console.log("swiperleft_b")
      this.$refs.product.swiperright();
    },
    swiperright_b() {
      // console.log("swiperleft_b")
      this.$refs.product.swiperleft();
    },
    swiperleft_c() {
      this.$refs.media.swiperright();
    },
    swiperright_c() {
      this.$refs.media.swiperleft();
    },
  },
};
</script>

<style scoped>
.arrow {
  width: 28px;
  height: 28px;
  margin: 0 auto;
  position: fixed;
  bottom: 5px;
  /*z-index: 999;*/
  transform: translate(-50%, 0%);
  /*position: fixed;*/
  max-width: 70px;
  /*width: 8.3%;*/
  z-index: 10;
  top: 88%;
  left: 50%;
  cursor: pointer;
  animation: bottomMove 2s linear;
  animation-iteration-count: infinite;
  /* Safari and Chrome */
  -webkit-animation: bottomMove 2s linear;
  -webkit-animation-iteration-count: infinite;
}
/*当在个人介绍页面时，箭头消失*/
.unShow {
  display: none;
}
/*向下箭头动画*/
@keyframes bottomMove {
  0% {
    top: 95%;
  }
  25% {
    top: 93%;
  }
  50% {
    top: 90%;
  }
  75% {
    top: 93%;
  }
  100% {
    top: 95%;
  }
}

@-moz-keyframes bottomMove {
  0% {
    top: 95%;
  }
  25% {
    top: 93%;
  }
  50% {
    top: 90%;
  }
  75% {
    top: 93%;
  }
  100% {
    top: 95%;
  }
}

@-webkit-keyframes bottomMove {
  0% {
    top: 95%;
  }
  25% {
    top: 93%;
  }
  50% {
    top: 90%;
  }
  75% {
    top: 93%;
  }
  100% {
    top: 95%;
  }
}
#test {
  width: 100%;
  height: 100%;
}
#test > testQuestions,
testResult {
  width: 100%;
  height: 100%;
}
</style>
