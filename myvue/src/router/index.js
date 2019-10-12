import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import LoadPage from '../Pages/LoadPage'
import UserPage from '../Pages/UserPage'
import MusicsPage from '../Pages/MusicsPage'
import MvPage from '../Pages/MvPage'
import PaihangPage from '../Pages/PaihangPage'
import SingerPage from '../Pages/SingerPage'
import ShopPage from '../pages/ShopPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import aaaaa from  "../pages/aaaaa"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: aaaaa
    },
    {
      path: '/load',
      component: LoadPage
    },
    {
      path: '/user',
      component: UserPage
    },
    {
      path: '/singer',
      component: SingerPage
    },
    {
      path: '/musics',
      component: MusicsPage
    },
    {
      path: '/mvs',
      component: MvPage
    },
    {
      path: '/paihang',
      component: PaihangPage
    },
    {
      path: '/shop',
      component: ShopPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/:id',
      component: HomePage
    },
    {
      path: '/load/:room',
      component: LoadPage
    },
  ]
})
