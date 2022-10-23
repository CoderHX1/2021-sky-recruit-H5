<template>
  <div>
    <div class="test-question">
      <div class="header">
        <div class="line1">
          <div class="line1-f">
            <span>不正经</span>
            <div class="word-bottom">
              <div class="aside"></div>
              <div class="item" v-for="index of 5" :key="index"></div>
              <div class="aside"></div>
            </div>
          </div>

          <span class="line1-s">的</span>
          <span class="line1-t">部门</span>
        </div>

        <div class="line2">
          <div class="line2word">
            <span>小</span>
            <span>测</span>
            <span>试 </span>
          </div>
          <div class="word-bottom-s">
            <div class="aside"></div>
            <div class="item" v-for="index of 8" :key="index"></div>
            <div class="aside"></div>
          </div>
        </div>

        <div class="icon">
          <img src="../../assets/img3/Vector.png" />
        </div>
      </div>

      <div class="section">
        <div class="position-ctrl">
          <div
            class="question-box"
            v-for="(item, index) in questionTable"
            :key="index"
          >
            <div class="question">
              <span>问题{{ item.id }}:</span>
              <span>{{ item.question }}</span>
            </div>
            <div class="option">
              <button
                class="btn-yes"
                :class="{ active: index == questionTable[index].current }"
                @click="btn1(index, item.id)"
              >
                yes
              </button>
              <div class="mid-line"></div>
              <button
                class="btn-no"
                :class="{ active: index - 0.5 == questionTable[index].current }"
                @click="btn2(index, item.id)"
              >
                no
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <span @click="toResult">提交测试信息

        </span>
        <p :class="{ tip: tip == 1, notip: tip == 0 }">有题目未完成</p>
      </div>
    </div>
    <confirm ref="myConfirm" @userBehavior="userBehaviorFun"></confirm>
  </div>
</template>

<script>
import axios from "axios";
import bus from "../../assets/js/eventBus";
import confirm from "./confirm.vue";
export default {
  name: "testQuestions",
  components: {
    confirm,
  },
  data() {
    return {
      content: "",
      tip: 0,
      flag: 0,
      question: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      config: {
        titleText: "",
      },
      questionTable: [
        {
          id: 1,
          question: "你善于驾驭工具或机器吗？",
          current: "1",
        },
        {
          id: 2,
          question: "你喜欢与人交流和互动的工作吗？",
          current: "",
        },
        {
          id: 3,
          question: "你乐意阅读技术性内容吗？",
          current: "",
        },
        {
          id: 4,
          question: "你做事时会很注重细节吗？",
          current: "",
        },
        {
          id: 5,
          question: "你总是有很多奇思妙想吗？",
          current: "",
        },
        {
          id: 6,
          question: "你经常主动与别人分享自己的想法吗？",
          current: "",
        },
        {
          id: 7,
          question: "你更喜欢从无到有做出自己的成果吗？",
          current: "",
        },
        {
          id: 8,
          question: "你享受承担组织性质的工作吗？",
          current: "",
        },
        {
          id: 9,
          question: "你追求科技突破多于关心人文议题吗？",
          current: "",
        },
        {
          id: 10,
          question: "你更希望自己在台前而非幕后吗？",
          current: "",
        },
      ],
      clear: [
        {
          jishu: 0,
          chanjing: 0,
          duomei: 0,
        },
        {
          qihua: 0,
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
          chanyun: 0,
          xingzheng: 0,
        },
        {
          jishu: 0,
          chanjing: 0,
          sheji: 0,
        },
        {
          xingzheng: 0,
          chanjing: 0,
          sheji: 0,
          qihua: 0,
        },
        {
          chanjing: 0,
          sheji: 0,
          chanyun: 0,
          qihua: 0,
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
          jishu: 0,
        },
        {
          jishu: 0,
          chanjing: 0,
          sheji: 0,
          qihua: 0,
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
        },
        {
          jishu: 0,
          chanjing: 0,
          sheji: 0,
          qihua: 0,
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
        },
        {
          qihua: 0,
          chanjing: 0,
          xingzheng: 0,
          chanyun: 0,
        },
        {
          jishu: 0,
          chanjing: 0,
          chanyun: 0,
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
        },
        {
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
          qihua: 0,
        },
      ],
      score: [
        {
          jishu: 0,
          chanjing: 0,
          duomei: 0,
        },
        {
          qihua: 0,
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
          chanyun: 0,
          xingzheng: 0,
        },
        {
          jishu: 0,
          chanjing: 0,
          sheji: 0,
        },
        {
          xingzheng: 0,
          chanjing: 0,
          sheji: 0,
          qihua: 0,
        },
        {
          chanjing: 0,
          sheji: 0,
          chanyun: 0,
          qihua: 0,
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
          jishu: 0,
        },
        {
          jishu: 0,
          chanjing: 0,
          sheji: 0,
          qihua: 0,
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
        },
        {
          jishu: 0,
          chanjing: 0,
          sheji: 0,
          qihua: 0,
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
        },
        {
          qihua: 0,
          chanjing: 0,
          xingzheng: 0,
          chanyun: 0,
        },
        {
          jishu: 0,
          chanjing: 0,
          chanyun: 0,
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
        },
        {
          duomei: 0,
          xinmeiti: 0,
          tongxun: 0,
          qihua: 0,
        },
      ],
      calc: [
        {
          jishu: 10,
          chanjing: 10,
          duomei: 5,
        },
        {
          qihua: 15,
          duomei: 10,
          xinmeiti: 10,
          tongxun: 10,
          chanyun: 5,
          xingzheng: 25,
        },
        {
          jishu: 10,
          chanjing: 10,
          sheji: 5,
        },
        {
          xingzheng: 10,
          chanjing: 10,
          sheji: 10,
          qihua: 5,
        },
        {
          chanjing: 15,
          sheji: 15,
          chanyun: 15,
          qihua: 10,
          duomei: 10,
          xinmeiti: 10,
          tongxun: 10,
          jishu: 5,
        },
        {
          jishu: 15,
          chanjing: 10,
          sheji: 10,
          qihua: 10,
          duomei: 10,
          xinmeiti: 10,
          tongxun: 10,
        },
        {
          jishu: 20,
          sheji: 20,
          qihua: 15,
          duomei: 15,
          xinmeiti: 15,
          tongxun: 15,
        },
        {
          qihua: 20,
          chanjing: 15,
          xingzheng: 15,
          chanyun: 15,
        },
        {
          jishu: 20,
          chanjing: 15,
          chanyun: 15,
          duomei: 10,
          xinmeiti: 10,
          tongxun: 10,
        },
        {
          duomei: 15,
          xinmeiti: 15,
          tongxun: 15,
          qihua: 15,
        },
      ],
      total: {
        chanjing: 0,
        sheji: 0,
        jishu: 0,
        chanyun: 0,
        xingzheng: 0,
        qihua: 0,
        tongxun: 0,
        xinmeiti: 0,
        duomei: 0,
      },
    };
  },
  // 监听,当路由发生变化的时候执行
  methods: {
    toResult() {
      let flag = 1;
      for (let i = 0; i < 10; i++) {
        if (this.question[i] == 0) {
          flag = 0;
        }
      }
      if (flag == 1) {
        this.$router.push("/testResult");
      } else {
        this.tip = 1;
      }

      this.$uweb.trackEvent("测试题", "提交测试信息次数");
      //console.log(this.$router.options.routes);
      this.total.chanjing =
        this.score[0].chanjing +
        this.score[2].chanjing +
        this.score[3].chanjing +
        this.score[4].chanjing +
        this.score[5].chanjing +
        this.score[7].chanjing +
        this.score[8].chanjing;

      this.total.sheji =
        this.score[2].sheji +
        this.score[3].sheji +
        this.score[4].sheji +
        this.score[5].sheji +
        this.score[6].sheji;

      this.total.jishu =
        this.score[0].jishu +
        this.score[2].jishu +
        this.score[4].jishu +
        this.score[5].jishu +
        this.score[6].jishu +
        this.score[8].jishu;

      this.total.chanyun =
        this.score[1].chanyun +
        this.score[4].chanyun +
        this.score[7].chanyun +
        this.score[8].chanyun;

      this.total.xingzheng =
        this.score[1].xingzheng +
        this.score[3].xingzheng +
        this.score[7].xingzheng;

      this.total.qihua =
        this.score[1].qihua +
        this.score[3].qihua +
        this.score[4].qihua +
        this.score[5].qihua +
        this.score[6].qihua +
        this.score[7].qihua +
        this.score[9].qihua;

      this.total.tongxun =
        this.score[1].tongxun +
        this.score[4].tongxun +
        this.score[5].tongxun +
        this.score[6].tongxun +
        this.score[8].tongxun +
        this.score[9].tongxun;

      this.total.xinmeiti =
        this.score[1].xinmeiti +
        this.score[4].xinmeiti +
        this.score[5].xinmeiti +
        this.score[6].xinmeiti +
        this.score[8].xinmeiti +
        this.score[9].xinmeiti;

      this.total.duomei =
        this.score[0].duomei +
        this.score[1].duomei +
        this.score[4].duomei +
        this.score[5].duomei +
        this.score[6].duomei +
        this.score[8].duomei +
        this.score[9].duomei;
      let that = this;
      axios.post("https://zx.tsky31.cn/api/sort", this.total).then((res) => {
        //console.log(res.data);
        //that.response = res.data;
        bus.$emit("sendBybus", res.data);
      });
      //console.log(this.total);
    },
    btn1(index, num) {
      //console.log(index);
      this.tip = 0;
      this.questionTable[index].current = index;

      this.score[index] = this.calc[index];
      this.question[num - 1] = num;
      //console.log(this.score)
    },
    btn2(index, num) {
      //console.log(index);
      this.tip = 0;
      this.questionTable[index].current = index - 0.5;

      this.score[index] = this.clear[index];

      this.question[num - 1] = num;
      // console.log(this.score)
    },
    userBehaviorFun(type) {
      if (type == "clickConfirm") {
        this.flag = 1;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/signUp") {
      this.$refs.myConfirm.show(this.content, this.config);
      setTimeout(() => {
        if (this.flag) {
          next();
        } else {
          next(false);
        }
      }, 1500);
    } else {
      next();
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.test-question {
  position: relative;
}
.header {
  width: 375px;
  width: 100%;
  height: 186px;
  background: rgba(58, 99, 158, 0.8);
  position: absolute;
  left: 0px;
  top: 0px;
  color: rgba(255, 255, 255, 0.8);
}
.section {
  width: 375px;
  width: 100%;
  min-height: 2000px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px 12px 0px 0px;
  position: absolute;
  left: 0px;
  top: 175px;
}
.section-pt {
  height: 15px;
  z-index: 1;
  width: 100%;
  background-color: black;
}
.footer {
  position: absolute;
  width: 302px;
  line-height: 50px;
  height: 50px;
  left: 0;
  right: 0;
  margin: auto;
  top: 2050px;

  background: #fedf82;
  border-radius: 33px;
}
.question-box {
  width: 332px;
  height: 153px;
  margin-top: 5px;
  margin: 5px auto 0 auto;
  background: #f1f7ff;
  box-shadow: inset -1px 1px 8px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding-top: 25px;
  font-family: Microsoft YaHei;
  font-size: 18px;
  line-height: 24px;
}
.header span {
  display: inline-block;
  font-family: Microsoft YaHei UI;
}
.header .icon {
  position: absolute;
  width: 36px;
  height: 36px;
  right: 15px;
  bottom: 20px;
}
.word-bottom {
  width: 130px;
  height: 5px;
  display: flex;
  position: absolute;
  left: -6px;
}
.item {
  width: 14px;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0 5px;
}
.aside {
  width: 7px;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0 5px;
}
.word-bottom-s {
  width: 190px;
  height: 5px;
  display: flex;
}
.line1 .line1-f {
  margin-top: 42px;
  font-size: 40px;
  display: inline-block;
  position: relative;
}
.line1 .line1-s {
  margin-top: 50px;
  font-size: 30px;
}
.line1 .line1-t {
  margin-top: 36px;
  font-size: 50px;
}
.line2 {
  margin: 0 auto;
  width: 189px;
}
.line2word {
  font-size: 40px;
  margin: 0 auto;
  width: 160px;
  display: flex;
  justify-content: space-between;
}
.question {
  width: 266px;
  height: 64px;
  margin: 0 auto;
  text-align: left;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  font-size: 20px;
  line-height: 26px;

  color: #000000;
}
.question span {
  color: #3a639e;
}
.option {
  width: 266px;
  height: 56px;
  margin: 0 auto;
  position: relative;
}
.mid-line {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.4);
  height: 35px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.btn-yes {
  width: 84px;
  height: 29.75px;
  background: #e3e7f8;
  border-radius: 12px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: none;
}
.btn-no {
  width: 84px;
  height: 29.75px;
  background: #e3e7f8;
  border-radius: 12px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: none;
}
.active {
  background: rgba(254, 223, 130, 1);
}
.footer span {
  font-size: 18px;
}
.position-ctrl {
  margin-top: 25px;
}
.tip {
  color: red;
  -webkit-animation: cssAnimation 1.5s forwards;
  animation: cssAnimation 1.5s forwards;
}
@keyframes cssAnimation{
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes cssAnimation{
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.notip {
  display: none;
}
</style>
