import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
export const router = createBrowserRouter([{ element: <SiteLayout/>, children: [{ path: '/', element: <Home/> }, { path: '/menu', element: <Menu/> }, { path: '/gallery', element: <Gallery/> }, { path: '/contact', element: <Contact/> }, { path: '*', element: <NotFound/> }] }]);
