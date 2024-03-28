import { lazy } from 'react';

// Lazy imports
const HomePage = lazy(() => import('@/modules/home/home'));
const NotFoundPage = lazy(() => import('@/modules/not-found/not-found'));

export const ROUTES = {
  home: {
    path: '/',
    name: 'HOME',
    content: <HomePage />,
  },
  error: {
    path: '*',
    name: 'ERROR',
    content: <NotFoundPage />,
  },
};
