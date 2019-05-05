import Vue from 'vue'
import Router from 'vue-router'
import Main from "@/components/Main"
import Index from "@/components/Pages/Index"
import Jade from "@/components/Pages/Jade"
import Lottery from "@/components/Pages/Lottery"
import My from "@/components/Pages/My"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {path: '',name: 'Index',component: Index},
        {path: '/jade',name: 'Jade',component: Jade},
        {path: '/lottery',name: 'Lottery',component: Lottery},
        {path: '/my',name: 'My',component: My},
      ]
    },
  ]
})
