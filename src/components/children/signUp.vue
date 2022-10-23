<template>
  <div class="signUp" @click="unShow">
    <div class="signUp1">
      <div class="top" ref="top" id="top">
        <div class="title" id="title">
          <span class="doc1"></span>
          <span class="titleText">报名信息填写</span>
          <span class="doc2"></span>
          <!--        <img src="../../assets/img2/Component 39.jpg" alt="">-->
        </div>
        <div class="head">
          <div class="girl" @click.stop="girl">
            <img :src="girlHead" alt="" />
          </div>
          <div class="boy" @click.stop="boy">
            <img :src="boyHead" alt="" />
          </div>
        </div>
      </div>
      <div class="toTest" @click.stop="toTest">
        <img src="../../assets/img2/toTest.jpg" alt="" />
      </div>
      <div class="mainP">
        <form action="">
          <div class="input" style="margin-top: 20px">
            <span class="text">姓名：</span>
            <input class="info" type="text" v-model="username" />
          </div>
          <div class="input">
            <span class="text">手机号：</span>
            <input
              class="info"
              type="text"
              v-model="number"
              oninput="value=value.replace(/[^\d]/g,'')"
            />
          </div>
          <div class="input">
            <span class="text">QQ：</span>
            <input
              class="info"
              type="text"
              v-model="qq"
              oninput="value=value.replace(/[^\d]/g,'')"
            />
          </div>
          <div class="input">
            <span class="text">学院：</span>
            <input class="info" type="text" v-model="xy" />
          </div>
          <div class="input">
            <span class="text">专业：</span>
            <input class="info" type="text" v-model="mj" />
          </div>
          <div class="zyText">
            <span>志愿填写</span>
          </div>
          <div class="zy">
            <div class="department" :style="selectShow" id="department">
              <p @click="changeZy">产品经理组</p>
              <p @click="changeZy">产品运营部</p>
              <p @click="changeZy">多媒体事业部</p>
              <p @click="changeZy">技术开发部</p>
              <p @click="changeZy">企划公关部</p>
              <p @click="changeZy">设计部</p>
              <p @click="changeZy">新闻通讯社</p>
              <p @click="changeZy">新媒体运营部</p>
              <p @click="changeZy">行政人事部</p>
            </div>
            <div class="input">
              <span class="text">第一志愿：</span>
              <div class="select" @click="selectActive('1')">
                <input
                  type="text"
                  v-model="zy1"
                  disabled
                  style="background-color: rgba(0, 0, 0, 0)"
                />
                <div class="label">
                  <img src="../../assets/img2/rectangle.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="input">
              <span class="text">第二志愿：</span>
              <div class="select" @click="selectActive('2')">
                <input
                  type="text"
                  v-model="zy2"
                  disabled
                  style="background-color: rgba(0, 0, 0, 0)"
                />
                <div class="label">
                  <img src="../../assets/img2/rectangle.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="input">
              <span class="text">第三志愿：</span>
              <div class="select" @click="selectActive('3')">
                <input
                  type="text"
                  v-model="zy3"
                  disabled
                  style="background-color: rgba(0, 0, 0, 0)"
                />
                <div class="label">
                  <img src="../../assets/img2/rectangle.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!--    <div style="height: 812px;">-->
    <!--      <signUp2></signUp2>-->
    <!--    </div>-->
    <div class="container" @focusout="tipShow = 'display: none'">
      <div class="title">
        <p style="font-size: 18px; line-height: 24px; color: #000000">
          为什么想要加入部门？
        </p>
        <p style="font-size: 12px; line-height: 16px; color: #000000">
          （选填且不超过200字）
        </p>
      </div>
      <div class="introduction">
        <textarea
          style="outline: none"
          name=""
          id="t1"
          cols="30"
          rows="10"
          placeholder="尽情发挥！可以提高面试成功率哦！"
          v-model="selfIntro"
          @keyup="check"
        ></textarea>
      </div>
      <div class="submit">
        <button @click.stop="submit">提交信息</button>
        <!--        <div class="tip" :style="tipShow">-->
        <!--          <span style="font-size: 18px;line-height: 24px;color: #A29F9F;">{{tip}}</span>-->
        <!--          <span>-->
        <!--          <img :src="tipImg" alt="">-->
        <!--          </span>-->
        <!--        </div>-->
      </div>
      <!--      <img src="../../assets/img2/Frame1.png" alt="" class="arrow" id="bottomArrow" @click="toUp" :style="arrowShow">-->
    </div>
    <!--    <div style="width: 100%;height: 812px;background-color: rgba(87,86,86,0.7)">-->
    <div class="confirm" :style="confirmShow" @touchmove.prevent>
      <button class="closeButton" @click.stop="close"></button>
      <div id="submitConfirm">
        <div class="tip">
          <span style="color: rgba(255, 27, 27, 0.6); font-size: 14px"
            >tips</span
          >
          <span style="font-size: 14px; line-height: 24px; color: #616060"
            >: {{ tip }}</span
          >
          <!--          <span>-->
          <!--          <img :src="tipImg" alt="">-->
          <!--          </span>-->
        </div>
        <div style="display: flex; margin: 0 auto; flex-wrap: wrap">
          <div
            id="sex"
            class="confirmInfo"
            :style="sexShow"
            style="background: rgba(0, 0, 0, 0)"
          >
            <div
              class="girl"
              @click.stop="girl"
              style="width: 49px; height: 49px"
            >
              <img :src="girlHead" alt="" style="width: 49px; height: 49px" />
            </div>
            <div
              class="boy"
              @click.stop="boy"
              style="width: 49px; height: 49px"
            >
              <img :src="boyHead" alt="" style="width: 49px; height: 49px" />
            </div>
          </div>
          <div class="confirmInfo" style="margin-top: 20px" :style="nameShow">
            <span class="text">姓名：</span>
            <input class="infos" type="text" v-model="username" />
          </div>
          <div class="confirmInfo" :style="qqShow">
            <span class="text">QQ：</span>
            <input
              class="infos"
              type="text"
              v-model="qq"
              oninput="value=value.replace(/[^\d]/g,'')"
            />
          </div>
          <div class="confirmInfo" :style="telShow">
            <span class="text">手机号：</span>
            <input
              class="infos"
              type="text"
              v-model="number"
              oninput="value=value.replace(/[^\d]/g,'')"
            />
          </div>
          <div class="confirmInfo" :style="xyShow">
            <span class="text">学院：</span>
            <input class="infos" type="text" v-model="xy" />
          </div>
          <div class="confirmInfo" :style="mjShow">
            <span class="text">专业：</span>
            <input class="infos" type="text" v-model="mj" />
          </div>
          <div class="confirmInfo" :style="zyShow">
            <span class="text">志愿：</span>
            <select
              name="zy"
              id=""
              v-model="zy1"
              class="infos"
              style="text-align: center"
            >
              <option value="产品经理组">产品经理组</option>
              <option value="产品运营部">产品运营部</option>
              <option value="多媒体事业部">多媒体事业部</option>
              <option value="技术开发部">技术开发部</option>
              <option value="企划公关部">企划公关部</option>
              <option value="设计部">设计部</option>
              <option value="新闻通讯社">新闻通讯社</option>
              <option value="新媒体运营部">新媒体运营部</option>
              <option value="行政人事部">行政人事部</option>
            </select>
          </div>
          <button
            @click.stop="submit"
            class="confirmButton"
            :style="submitButton"
          >
            提交信息
          </button>
          <button @click.stop="close" class="confirmButton" :style="confirm">
            确定
          </button>
        </div>
      </div>
    </div>
    <!--    </div>-->
    <!--    <button @click="toTest">跳转到测试题</button>-->
    <confirm ref="myConfirm" @userBehavior="userBehaviorFun"></confirm>
  </div>
</template>

<script>
import axios from "axios";
import confirm from "./confirm2.vue";

export default {
  name: "signUp",
  components: {
    confirm,
  },
  props: {},
  mounted() {
    (this.sex = this.$store.state.info.sex),
      (this.username = this.$store.state.info.username),
      (this.qq = this.$store.state.info.qq),
      (this.number = this.$store.state.info.number),
      (this.xy = this.$store.state.info.xy),
      (this.mj = this.$store.state.info.mj),
      (this.zy1 = this.$store.state.info.zy1),
      (this.zy2 = this.$store.state.info.zy2),
      (this.zy3 = this.$store.state.info.zy3);
    if (this.sex == "男") {
      this.boy();
    }
    if (this.sex == "女") {
      this.girl();
    }
  },
  watch: {},
  data() {
    return {
      sex: "",
      username: "",
      qq: "",
      number: "",
      xy: "",
      mj: "",
      zy1: "",
      zy2: "",
      zy3: "",
      st: "",
      selectShow: "",
      // userInfo: {},
      // boyHead: '../../assets/img2/boyHead.jpg',
      boyHead: require("../../assets/img2/boyHead.jpg"),
      girlHead: require("../../assets/img2/girlHead.jpg"),
      tip: "",
      // tipImg: require('../../assets/img2/wrong.png'),
      tipShow: "display: none",
      arrowShow: "display: none",
      selfIntro: "",
      // sexBoy: '',
      // sexgirl: '',
      sexShow: "display: none",
      nameShow: "display: none",
      telShow: "display: none",
      qqShow: "display: none",
      xyShow: "display: none",
      mjShow: "display: none",
      zyShow: "display: none",
      confirmShow: "display: none",
      submitButton: "",
      confirm: "display: none",
    };
  },
  methods: {
    close() {
      document.getElementsByClassName("confirm")[0].style.opacity = "0";
      // document.getElementsByClassName('fp-scroller')[0].style.display = ''
      let that = this;
      setTimeout(function () {
        that.confirmShow = "display: none";
        that.tip = "信息未填写完整！";
        }, 350);
      if (this.Move) {
        this.Move();
      }
    },
    //  性别选择
    // sexSelect (str) {
    //   this.sex = str
    //   if (str === '男') {
    //     this.sexBoy = 'background: #FEDF82'
    //     this.sexgirl = ''
    //   } else {
    //     this.sexgirl = 'background: #FEDF82'
    //     this.sexBoy = ''
    //   }
    // },
    //  当点击测试图片时，跳转到测试页面
    toTest() {
      // let flag = 'display:none'
      // this.$emit('toTest', flag)
      this.$uweb.trackEvent("测试题", "访问测试题页面次数");
      const infos = {
        sex: this.sex,
        username: this.username,
        qq: this.qq,
        number: this.number,
        xy: this.xy,
        mj: this.mj,
        zy1: this.zy1,
        zy2: this.zy2,
        zy3: this.zy3,
      };

      this.$store.commit("copy", infos);
      this.$router.push("/testQuestions");
    },
    //  头像的变换
    girl() {
      this.sex = "女";
      this.girlHead = require("../../assets/img2/girlActive.jpg");
      this.boyHead = require("../../assets/img2/boyHead.jpg");
      console.log(this.sex);
    },
    boy() {
      this.sex = "男";
      this.boyHead = require("../../assets/img2/boyActive.jpg");
      this.girlHead = require("../../assets/img2/girlHead.jpg");
      console.log(this.sex);
    },
    //  当点击志愿部分时，部门选择框弹出
    selectActive(str) {
      // console.log(str);
      // e.stopPropagation()
      document.getElementById("department").style.opacity = 1;
      this.selectShow = "display: block";
      this.st = str;
      // console.log('12')
    },
    //  将用户选择的部门名称绑定给相应的变量
    changeZy(e) {
      let that = this;
      console.log(this.st);
      if (this.st === "1") {
        this.zy1 = e.target.innerHTML;
        if (this.zy1 == this.zy2 || this.zy1 == this.zy3) {
          this.zy1 = "";
          this.$refs.myConfirm.show("", {
            titleText: "请勿重复选择",
          });
        }
      } else if (this.st === "2") {
        this.zy2 = e.target.innerHTML;
        if (this.zy2 == this.zy1 || this.zy2 == this.zy3) {
          this.zy2 = "";
          this.$refs.myConfirm.show("", {
            titleText: "请勿重复选择",
          });
        }
      } else {
        this.zy3 = e.target.innerHTML;
        if (this.zy3 == this.zy2 || this.zy3 == this.zy1) {
          this.zy3 = "";
          this.$refs.myConfirm.show("", {
            titleText: "请勿重复选择",
          });
        }
      }
      document.getElementById("department").style.opacity = 0;
      setTimeout(function () {
        that.selectShow = "";
      }, 350);
      console.log(e.target.innerHTML);
    },
    unShow(e) {
      let that = this;
      //console.log(e.target.localName);
      let str = e.target.localName;
      str = str.toString();
      // console.log(str);
      // console.log(str.substr(1, 5));
      if (str !== "input" && this.selectShow !== "") {
        // console.log('hhh');
        // console.log(this.selectShow);
        document.getElementById("department").style.opacity = 0;
        setTimeout(function () {
          that.selectShow = "";
          // console.log(1);
        }, 350);
      }
    },
    check() {
      let t1 = document.getElementById("t1");
      let regC = /[^ -~]+/g;
      let regE = /\D+/g;
      let str = t1.value;

      if (regC.test(str)) {
        t1.value = t1.value.substr(0, 200);
      }

      if (regE.test(str)) {
        t1.value = t1.value.substr(0, 400);
      }
    },
    //停止页面滚动
    // stopMove(){
    //   let m = function(e){e.preventDefault();};
    //   document.body.style.overflow='hidden';
    //   document.addEventListener("touchmove",m,{ passive:false });//禁止页面滑动
    // },
    // //开启页面滚动
    // Move(){
    //   let m =function(e){e.preventDefault();};
    //   document.body.style.overflow='';//出现滚动条
    //   document.removeEventListener("touchmove",m,{ passive:true });
    // },
    submit() {
      document.getElementsByClassName("confirm")[0].style.opacity = "1";
      //console.log(this.confirmShow);
      if (
        this.sex !== "" &&
        this.username !== "" &&
        this.qq !== "" &&
        this.number.length === 11 &&
        this.xy !== "" &&
        this.mj !== "" &&
        (this.zy1 !== "" || this.zy2 !== "" || this.zy3 !== "")
      ) {
        // this.tipImg = require('../../assets/img2/right.jpg')

        this.sendInfo();
        // this.tip = '提交成功'
        // console.log(this.tip)
      } else {
        this.tip = "信息未填写完整！"
        this.confirmShow = "";
      }
      if (this.sex === "") {
        this.tipShow = "";
        this.sexShow = "";
      }
      if (this.username === "") {
        this.tipShow = "";
        this.nameShow = "";
      }
      if (this.qq === "") {
        this.tipShow = "";
        this.qqShow = "";
      }
      if (this.number === "") {
        this.tipShow = "";
        this.telShow = "";
      }
      if (this.number.length !== 11) {
        this.tipShow = "";
        this.telShow = "";
      }
      if (this.xy === "") {
        this.tipShow = "";
        this.xyShow = "";
      }
      if (this.mj === "") {
        this.tipShow = "";
        this.mjShow = "";
      }
      if (this.zy1 === "" && this.zy2 === "" && this.zy3 === "") {
        this.tipShow = "";
        this.zyShow = "";
      }
      // this.confirmShow = "";
      // this.tipShow = ''
      // document.getElementsByClassName('signUp')[0].style.backgroundColor = 'rgba(87,87,87,0.5)'
    },
    // toTop () {
    //   let that = this
    //   console.log(1)
    //   // this.$nextTick(() => {
    //   console.log(2)
    //   setTimeout(function () {
    //     document.getElementById('top').scrollIntoView({
    //       behavior: 'smooth', // 平滑过渡
    //       block: 'start' // 上边框与视窗顶部平齐。默认值
    //     })
    //   }, 100)
    //   // })
    // },
    sendInfo() {
      this.$uweb.trackEvent("报名信息填写", "提交成功次数");
      let that = this;
      axios
        .post("https://zx.tsky31.cn/api/insert", {
          username: that.username,
          sex: that.sex,
          number: that.number,
          qq: that.qq,
          xy: that.xy,
          mj: that.mj,
          zy1: that.zy1,
          state1: 1,
          zy2: that.zy2,
          state2: 1,
          zy3: that.zy1,
          state3: 1,
          jieshao: that.selfIntro,
        })
        .then(
          function (res) {
            console.log(res);
            if (res.data.code === 3) {
              that.tip = "请勿重复报名！";
              that.confirmShow = "";
              // that.tipImg = require('../../assets/img2/right.png')
            } else {
              that.tip = "提交成功！";
              that.sClear()
              that.confirmShow = "";
              // that.tipImg = require('../../assets/img2/right.png')
            }

            that.selfIntro = "";
            that.tipShow = "";
            that.sexShow =
              that.nameShow =
              that.telShow =
              that.qqShow =
              that.xyShow =
              that.mjShow =
              that.zyShow =
                "display: none";
            that.submitButton = "display: none";
            that.confirm = "";
            // that.close()
          },
          //提交出错
          function (err) {
            console.log(err);
            that.tip = "报名失败!";
          }
        );
    },
    //  报名成功时，清除报名页面的信息
    sClear() {
      this.sex = "";
      this.username = "";
      this.qq = "";
      this.number = "";
      this.xy = "";
      this.mj = "";
      this.zy1 = "";
      this.zy2 = "";
      this.zy3 = "";
      this.boyHead = require("../../assets/img2/boyHead.jpg");
      this.girlHead = require("../../assets/img2/girlHead.jpg");
    },
  },
};
</script>

<style scoped>
/*html,body{*/
/*  overflow: visible;*/
/*}*/
.signUp {
  width: 100%;
  /*min-height: 2000px;*/
}
.signUp1 {
  width: 100%;
  height: 21.65rem;
  position: relative;
  background: linear-gradient(179.98deg, #fedd7d 0.02%, #fdfbea 67.02%);
}
.toTest {
  position: absolute;
  width: 209px;
  height: 37px;
  left: 165px;
  top: 212px;
  z-index: 10;
}
.toTest > img {
  width: 209px;
  height: 37px;
}
.top {
  width: 375px;
  height: 210px;
}
.mainP {
  width: 100%;
  height: 15.63rem;
  /*padding: 41px 45px;*/
  /*padding-left: 45px;*/
  /*padding-top: 41px;*/
  position: absolute;
  bottom: 0;
  background-color: #ffffff;
  border-radius: 12px 12px 0px 0px;
}
.title {
  position: relative;
  width: 6.77rem;
  height: 2.03rem;
  margin: 0 auto;
  padding-top: 70px;
  /*left: 1.66rem;*/
  /*top: 1.79rem;*/
  /*background: url("../../assets/img2/Component 39_2.jpg") center center no-repeat;*/
  /*background-size: contain;*/
}
.title > span {
  display: inline-block;
}
.doc1 {
  height: 0.19rem;
  width: 0.19rem;
  left: 0.85rem;
  top: 0.51rem;
  background-color: #000000;
  border-radius: 0.09rem;
}
.doc2 {
  height: 0.19rem;
  width: 0.19rem;
  left: 6.35rem;
  top: 0.51rem;
  background-color: #000000;
  border-radius: 0.09rem;
}
.titleText {
  font-family: Microsoft JhengHei UI;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  border-bottom: 0.11rem solid rgba(0, 0, 0, 0.5);
}
.head {
  display: flex;
  justify-content: space-between;
  width: 247px;
  margin: 40px auto;
}
.girl {
  position: relative;
  width: 64px;
  height: 64px;
  display: inline-block;
  /*left: 63px;*/
  /*top: 143px;*/
  /*border: 3px dashed darkgrey;*/
  /*padding: 8.73px;*/
  /*border-radius: 32px;*/
}
.boy {
  position: relative;
  height: 64px;
  width: 64px;
  display: inline-block;
  /*left: 246px;*/
  /*top: 143px;*/
}
.girl > img {
  width: 64px;
  height: 64px;
  border-radius: 32px;
}
.boy > img {
  width: 64px;
  height: 64px;
  border-radius: 32px;
}
.text {
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /*vertical-align: bottom;*/
  line-height: 40px;
  color: #000000;
  position: absolute;
  left: 40px;
}
.info {
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  border: none;
  width: 234px;
  height: 35px;
  /*vertical-align: bottom;*/
  font-size: 14px;
  /*line-height: 42px;*/
  text-align: center;
  border-bottom: 1px solid #dcdcdc;
  position: absolute;
  right: 45px;
  /*border-bottom: 2px solid black;*/
}
.zy {
  position: relative;
  margin-top: 25px;
}
.zy input {
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  border: none;
  width: 200px;
  height: 20px;
  z-index: 0;
  margin: 0 auto;
  text-align: center;
  /*border-bottom: none;*/
}
.zy .select {
  position: relative;
  display: inline-block;
  width: 224px;
  height: 35px;
  left: 45px;
  text-align: center;
  z-index: 9;
  border-bottom: 1px solid #dcdcdc;
  /*cursor: pointer;*/
}
.select > input {
  width: 224px;
  height: 35px;
}
.input {
  width: 100%;
  position: relative;
  margin: 5px 0;
  height: 35px;
}
.department {
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(72, 78, 78, 0.3);
  border-radius: 10px;
  /*color: azure;*/
  width: 150px;
  text-align: left;
  display: none;
  position: absolute;
  z-index: 9999;
  right: 20px;
  bottom: 15px;
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;
  pointer-events: auto;
}
.department > p {
  text-indent: 10px;
  /*cursor: none;*/
}
.zyText {
  width: 100%;
  margin: 30px 0 0 0;
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */
  text-align: center;
  color: #000000;
}
.label {
  /*width: 12px;*/
  /*height: 18px;*/
  display: inline-block;
  position: absolute;
  z-index: 999;
  right: 10px;
  bottom: 0;
  cursor: pointer;
  pointer-events: none;
  /*background: #FEDE80;*/
  /*transform: rotate(-90deg);*/
}
.label > img {
  width: 12px;
  height: 18px;
}
.container {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #ffffff;
  margin-top: -150px;
  /*margin-bottom: 100px;*/
  padding-bottom: 100px;
}
.title {
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  position: relative;
  width: 100%;
  height: 30px;
  /*margin: 61px auto;*/
  margin-bottom: 15px;
  padding-top: 61px;
  /*top: 61px;*/
  /*left: 101px;*/
}
textarea {
  width: 270px;
  border: none;
  text-indent: 2em;
  line-height: 49px;
  background: url("../../assets/img2/line.png") repeat;
  overflow: auto;
}

.submit {
  /*position: absolute;*/
  /*height: 39px;*/
  width: 250px;
  margin: 0 auto;
  /*left: 100px;*/
  /*top: 436px;*/
}
.submit > button {
  height: 39px;
  width: 139px;
  border: none;
  border-radius: 20px;
  background: #fedf82;
}
.tip {
  margin: 20px auto;
  padding-top: 20px;
  width: 250px;
  text-align: center;
}
.confirm {
  /*-webkit-transform: translateZ(0);*/
  /*transform: none;*/
  /*position: absolute;*/
  position: fixed;
  top: 100px;
  left: 75px;
  width: 229px;
  z-index: 99999;
  transition: all ease-in-out 1s;
}
#submitConfirm {
  width: 229px;
  /*height: 284px;*/
  /*opacity: 1;*/
  background: #ffefbf;
  border-radius: 12px;
  box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.25);
}
.confirmInfo {
  width: 176px;
  height: 30px;
  opacity: 1;
  background: #ffffff;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
  /*vertical-align: bottom;*/
  line-height: 40px;
  color: #000000;
  margin: 5px auto;
  /*position: absolute;*/
  /*left: 40px;*/
}
.confirmInfo > span {
  display: inline-block;
}
.confirmInfo > .text {
  /*width: 36px;*/
  height: 30px;
  line-height: 30px;
  opacity: 1;
  /*background: rgba(0,0,0,0.60);*/
  font-size: 12px;
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  font-weight: 400;
  text-align: LEFT;
  color: rgba(0, 0, 0, 0.6);
}
.confirmInfo > .infos {
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  /*width: 150px;*/
  /*height: 35px;*/
  /*margin-left: 30px;*/
  /*border-radius: 20px;*/
  /*vertical-align: bottom;*/
  font-size: 12px;
  /*line-height: 42px;*/
  text-align: center;
  /*border-bottom: 1px solid #DCDCDC;*/
  /*position: absolute;*/
  /*right: 45px;*/
}
select {
  width: auto;
  padding: 0 20%;
  margin: 0;
}

option {
  text-align: center;
}
.confirmButton {
  height: 39px;
  width: 139px;
  border: none;
  border-radius: 20px;
  background: #fedf82;
  /*margin-bottom: 20px;*/
  margin: 20px auto;
}
.closeButton {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 25px;
  background: url("../../assets/img2/wrong.png") center center no-repeat #ffefc1;
}
</style>
