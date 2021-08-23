import { lazy } from 'react';
import { initModules } from '../../../../router';


export default {
  path: '/products',
  exact: false,
  isPrivate: true,
  component: lazy(async () => {
    await initModules([
      { key: 'products', path: 'Product' },
      { key: 'feeds', path: 'Feed' },
    ]);
    return import('.');
  }),
};

export const childRoutes = [
  {
    path: '/products/create',
    exact: true,
    isPrivate: true,
    component: lazy(async () => {
      // await initModule('Product', 'products');
      return import('./createProduct');
    }),
  }
];
