import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

// eslint-disable-next-line no-undef
const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

//挂z载路由导航守卫
router.beforeEach((to, from, next) => {
  //to代表将要访问的路径
  //from代表从哪个路径跳转而来
  //next表示放行，是一个函数，两种方式（1）next():直接放行（2）next('/login')：强制跳转

  if(to.path === '/login') return next();
  const tokenStr =  window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

export default router