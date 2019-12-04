import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../components/MainPage"
import SelectCR from "../components/SelectCR"
import FlowerInfo from "../components/FlowerInfo"
import SelectArea from "../components/SelectArea";
import Payment from "../components/Payment";
import PaymentLoading from "../components/PaymentLoading";
import Finish from "../components/Finish";
import SelectSector from "../components/SelectSector";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/selectCR',
    name: 'Cselecting',
    component: SelectCR
  },
  {
    path: '/FlowerInfo',
    name: 'flowerInfo',
    component: FlowerInfo
  },
  {
    path: '/SelectArea',
    name: 'selectArea',
    component: SelectArea
  },
  {
    path: '/Payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/PaymentLoading',
    name: 'paymentLoading',
    component: PaymentLoading
  },
  {
    path: '/Finish',
    name: 'finish',
    component: Finish
  },
  {
    path: '/SelectSector',
    name: 'selectsector',
    component: SelectSector
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
