import { Helmet } from 'react-helmet-async';
import { Coffee } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PageTransition } from '../components/layout/PageTransition';
export default function NotFound() { return <PageTransition><Helmet><title>Page Not Found | Millat Cafe</title></Helmet><section className="grid min-h-[85svh] place-items-center px-5 pb-20 pt-32 text-center"><div><div className="relative mx-auto mb-7 grid h-36 w-36 place-items-center rounded-full bg-blush"><Coffee size={64} className="text-mocha"/><span className="absolute -bottom-2 -right-8 h-8 w-24 rotate-6 rounded-[50%] bg-mocha/20"/></div><div className="eyebrow">404 · A small spill</div><h1 className="mb-4 mt-3">This cup is empty.</h1><p className="mx-auto mb-7 max-w-md text-muted">The page you were looking for has wandered off. Let’s get you back to something delicious.</p><Button to="/">Back to Home</Button></div></section></PageTransition>; }
