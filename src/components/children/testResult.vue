<template>
  <div>
    <div class="test-question">
      <div class="header">
        <div class="line">
          <div class="line1"><span>不正经的部门小测试</span></div>
          <div class="line2"><span>测试结果</span></div>
          <div class="line3"><span>（仅供参考）</span></div>
        </div>
      </div>

      <div class="section">
        <div class="result-box">
          <div>你适合的三翼部门是</div>
          <div class="ph-inner1">
            <span>{{ result.data[0] }}</span>
            <img :src="result.pic[0]" alt="" />
          </div>
          <div>你的潜质包括但不限于</div>
          <ul>
            <li>{{ result.else[0] }}</li>
            <li>{{ result.else[1] }}</li>
            <li>{{ result.else[2] }}</li>
            <li>{{ result.else[3] }}</li>
          </ul>
          <div class="other">同样适合你的部门还有</div>
          <div class="ph-inner2">
            <span>{{ result.data[1] }}</span>
            <img :src="result.pic[1]" alt="" />
          </div>
          <div class="ph-inner2">
            <span>{{ result.data[2] }}</span>
            <img :src="result.pic[2]" alt="" />
          </div>
        </div>
      </div>

      <div class="footer" @click="toSignUp">
        <span>返回报名</span>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../assets/js/eventBus";

export default {
  name: "testResult",

  data() {
    return {
      result: {
        data: ["", "", ""],
        else: ["", "", "", ""],
        pic: ["", "", ""],
      },
    };
  },
  mounted() {
    bus.$on("sendBybus", (res) => {
      this.result = res;
    });
  },
  methods: {
    toSignUp() {
      //document.documentElement.setAttribute("style", "overflow:hidden");
      //document.body.setAttribute("style", "overflow:hidden");
      let val1 = "display:none";
      // let val2 = 'active'
      this.$emit("toSignUp", val1);
      this.$router.push("/mainPage#page6");
      this.$uweb.trackEvent("测试题","返回报名次数");
      //console.log(this.$root)
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

.test-question {
  position: relative;
}
.header {
  width: 375px;
  width: 100%;
  height: 186px;
  background: rgba(58, 99, 158, 0.8);
  margin: 0 auto;
}
.section {
  width: 375px;
  width: 100%;
  height: 500px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px 12px 0px 0px;
  position: relative;
  top: -11.5px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.footer {
  position: absolute;
  width: 302px;
  line-height: 50px;
  height: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;

  background: #fedf82;
  border-radius: 33px;
}
.footer span {
  font-size: 18px;
}
.header .line {
  position: relative;
  top: 72px;
  color: rgba(255, 255, 255, 0.9);
}
.header .line1 {
  font-family: Microsoft YaHei;
  font-size: 24px;
}
.header .line2 {
  font-family: Microsoft YaHei;
  font-size: 30px;
}
.header .line3 {
  font-family: Microsoft YaHei;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}
.result-box {
  width: 280px;
  height: 534px;
  margin: 0 auto;
  text-align: left;
  padding-top: 37px;
  font-family: Source Han Sans CN;
}
.result-box div {
  font-size: 18px;
}
.result-box li {
  font-size: 14px;
}
.ph-inner1 {
  width: 100%;
  height: 72px;
  margin-bottom: 19px;
}
.ph-inner1 span {
  display: inline-block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 36px;
}
.ph-inner1 img {
  position: absolute;
  width: 72px;
  right: 10px;
}
.result-box ul li {
  margin-top: 9px;
}
.result-box .other {
  margin-top: 43px;
}
.result-box .ph-inner2 {
  height: 50px;
  width: 100%;
  margin-bottom: 11px;
}
.result-box .ph-inner2 span {
  display: inline-block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  border-bottom: black 2px solid;
}
.result-box .ph-inner2 img {
  width: 50px;
  position: absolute;
  right: 80px;
}
</style>
