import Vue from 'vue'
import Router from 'vue-router'
import Home from "pages/home/home"
import Index from "pages/index/index"
import Read from "pages/read/read"
import Listen from "pages/listen/listen"
import One from "pages/one/one"
import Err from "pages/error/error"
Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/',
     redirect:"home",
     component:Home
    },
    {
      path:'/home',
      redirect:"/home/index",
      name:"index",
      component:Index
    },
    {
    	path:"/home",
    	component:Home,
        name:"home",
        children:[
        {   
            path:"index",
            component:Index
        },
        {
          path:'read',
          component:Read
        },
        {
          path:"listen",
          component:Listen
        },
        {
          path:"one",
          component:One
        },
        {
          path:"error",
          component:Err
        }
        ]
    }

  ]
})
