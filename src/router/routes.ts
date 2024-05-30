import { RouteRecordRaw } from 'vue-router';
import clientRouter from 'src/modules/client/router/client.router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'common-mainlayout',
    component: () => import(/* webpackChunkName: "common-mainlayout */ '../modules/common/pages/CommonMainLayout.vue'),
    children: [
      //Clients
      ...clientRouter,
    ],
  },
];

export default routes;
