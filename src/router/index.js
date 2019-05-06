import Vue from 'vue'
import Router from 'vue-router'
import Main from "@/components/Main"
import Index from "@/components/Pages/Index/Index.vue"
import Jade from "@/components/Pages/Jade/Jade.vue"
import Lottery from "@/components/Pages/Lottery/Lottery.vue"
import My from "@/components/Pages/My/My.vue"

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
    {
      path:'/setting',
      name:'Setting',
      component:resolve => {
        require(['@/components/Pages/Setting/Setting.vue'], resolve);
      },
    },
    {
      path:'/changePassword',
      name:'ChangePassword',
      component:resolve => {
        require(['@/components/Pages/My/ChangePassword.vue'], resolve);
      },
    },
    {
      path:'/realName',
      name:'RealName',
      component:resolve => {
        require(['@/components/Pages/My/RealName.vue'], resolve);
      },
    },
    {
      path:'/sign',
      name:'Sign',
      component:resolve => {
        require(['@/components/Pages/My/Sign.vue'], resolve);
      },
    },
    {
      path:'/register',
      name:'Register',
      component:resolve => {
        require(['@/components/Pages/My/Register.vue'], resolve);
      },
    },
    {
      path:'/passwordBack',
      name:'PasswordBack',
      component:resolve => {
        require(['@/components/Pages/My/PasswordBack.vue'], resolve);
      },
    },
    {
      path:'/newPassword',
      name:'NewPassword',
      component:resolve => {
        require(['@/components/Pages/My/NewPassword.vue'], resolve);
      },
    },
    {
      path:'/addressList',
      name:'AddressList',
      component:resolve => {
        require(['@/components/Pages/My/AddressList.vue'], resolve);
      },
    },
    {
      path:'/newAddress',
      name:'NewAddress',
      component:resolve => {
        require(['@/components/Pages/My/NewAddress.vue'], resolve);
      },
    },
    {
      path:'/collection',
      name:'Collection',
      component:resolve => {
        require(['@/components/Pages/My/Collection.vue'], resolve);
      },
    },
  ]
})
