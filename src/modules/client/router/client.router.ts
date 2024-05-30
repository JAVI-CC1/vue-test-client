import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'list-clients',
    component: () => import(/* webpackChunkName: "list-clients" */ '../pages/ClientList.vue'),
  },
];

export default routes;
