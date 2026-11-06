import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
export default function App() { return <Suspense fallback={<div className="grid min-h-screen place-items-center bg-cream"><div className="text-center"><div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-caramel border-t-transparent"/><span className="font-display text-2xl">Brewing your page…</span></div></div>}><RouterProvider router={router}/></Suspense>; }
