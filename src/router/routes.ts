import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') },
    ],
  },
  {
    path: '/expenses',
    component: () => import('layouts/ExpensesLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') },
      { path: 'users', component: () => import('pages/UsersPage.vue') },
      { path: 'payment', component: () => import('pages/PaymentPage.vue') },
      { path: 'purchase', component: () => import('pages/PurchasePage.vue') },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
