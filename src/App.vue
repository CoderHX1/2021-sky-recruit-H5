<template>
  <div id="app" :style="bodyHeight">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      bodyHeight: '',
      flag: ''
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  beforeMount () {
    // if (location.href.indexOf("#reloaded") == -1) {
    //   location.href = location.href + "#reloaded";
    //   location.reload('http://192.168.43.126:8083/mainPage#page1');
    // }
  },
  mounted () {
    if (this._isMobile()) {
      console.log("手机端");
      this.$router.replace('/mainPage');
    } else {
      console.log("pc端");
      this.$router.replace('/pc');
    }
    // if (this.flag) {
    //   location.reload('http://192.168.43.126:8083')
    //   this.flag = false
    // }
    //友盟统计添加
    const script = document.createElement("script");
    script.src =
      "https://s4.cnzz.com/z_stat.php?id=1280247231&web_id=1280247231";
    script.language = "JavaScript";
    document.body.appendChild(script);
  },
  watch: {
    $route() {
      if (window._czc) {
        let location = window.location;
        let contentUrl = location.pathname + location.hash;
        // alert(window.location);
        let refererUrl = "/";
        window._czc.push(["_trackPageview", contentUrl, refererUrl]);
      }
    }
  },
  created () {
    // alert(window.location);
    var width = document.documentElement.getBoundingClientRect().width
    if (width / dpr > 540) {
      width = dpr * 540
    }
    var rem = width / 10
    document.documentElement.style.fontSize = rem + 'px'
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
}
html,body{
  width: 100%;
  height: 100%;
  overflow: visible;
  /*font-size: 37.5px;*/
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
