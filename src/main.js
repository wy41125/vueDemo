// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Cell,CellGroup,SwipeCell ,Area ,NavBar, Button,Tabbar, TabbarItem,Swipe, SwipeItem,NoticeBar,Row, Col,Progress,Tab, Tabs } from 'vant';

Vue.use(Cell).use(CellGroup).use(SwipeCell).use(Area).use(NavBar).use(Tabs).use(Tab).use(Button).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(NoticeBar).use(Row).use(Col).use(Progress )
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
