import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  // },
  {
    path: '/barrage',
    name: 'barrage',
    component: () => import(/* webpackChunkName: "BarrageManagement" */ '../views/BarrageManagement.vue'),
    children: [
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "User" */ '../components/User.vue'),
      },
      {
        path: '/sensitive',
        name: 'sensitive',
        component: () => import(/* webpackChunkName: "Sensitive" */ '../components/Sensitive.vue'),
      },
      {
        path: '/barrage-lucky-bag',
        name: 'barrage-lucky-bag',
        component: () => import(/* webpackChunkName: "BarrageLuckyBag" */ '../components/BarrageLuckyBag.vue'),
      },
      {
        path: '/random-lucky-bag',
        name: 'random-lucky-bag',
        component: () => import(/* webpackChunkName: "RandomLuckyBag" */ '../components/RandomLuckyBag.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
