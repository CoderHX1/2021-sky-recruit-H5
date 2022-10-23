import Vue from 'vue'
import Router from 'vue-router'
import pc from '../components/pc'
import mainPage from '../components/mainPage'
import testQuestions from '../components/children/testQuestions'
import signUp from '../components/children/signUp'
import testResult from '../components/children/testResult'


import VueFullPage from 'vue-fullpage.js';

Vue.use(VueFullPage);
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/mainPage'
    },
    {
      path: '/pc',
      name: 'pc',
      component: pc
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/testQuestions',
      name: 'testQuestions',
      component: testQuestions
    },
    {
      path: '/testResult',
      name: 'testResult',
      component: testResult
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    }
  ]
})
