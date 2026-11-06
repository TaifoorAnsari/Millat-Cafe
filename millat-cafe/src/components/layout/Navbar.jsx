import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { Coffee, Facebook, Instagram, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { siteConfig } from '../../data/siteConfig';
import { Button } from '../ui/Button';

const links = [['/', 'Home'], ['/menu', 'Menu'], ['/gallery', 'Gallery'], ['/contact', 'Contact']];

function Wordmark({ light = false }) {
  return <div className={`flex items-center gap-2 ${light ? 'text-cream' : 'text-espresso'}`}><span className="grid h-10 w-10 place-items-center rounded-full bg-caramel"><Coffee size={21} aria-hidden /></span><span><b className="block font-display text-2xl leading-5">Millat</b><small className="text-[10px] font-bold tracking-[.28em]">CAFE</small></span></div>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const direction = useScrollDirection();
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 40);
    sync(); window.addEventListener('scroll', sync, { passive: true });
    return () => window.removeEventListener('scroll', sync);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const escape = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', escape);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', escape); };
  }, [open]);
  const overDark = pathname !== '/' && !scrolled;
  return <>
    <m.nav className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? 'border-b border-espresso/10 bg-cream/90 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`} animate={{ y: direction === 'down' && scrolled && !open ? -100 : 0 }} transition={{ duration: .28 }} aria-label="Main navigation">
      <div className="container-site flex h-[78px] items-center justify-between">
        <NavLink to="/" aria-label="Millat Cafe home"><Wordmark light={overDark} /></NavLink>
        <div className={`hidden items-center gap-8 text-sm font-semibold lg:flex ${overDark ? 'text-cream' : ''}`}>{links.map(([to, label]) => <NavLink key={to} to={to} className="relative py-2">{({ isActive }) => <>{label}{isActive && <m.span layoutId="nav-active" className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-caramel" />}</>}</NavLink>)}</div>
        <div className="hidden lg:block"><Button to="/contact">Visit Us</Button></div>
        <button className={`grid h-12 w-12 place-items-center rounded-full border lg:hidden ${overDark ? 'border-cream/30 text-cream' : 'border-espresso/20'}`} onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu"><Menu /></button>
      </div>
    </m.nav>
    <AnimatePresence>{open && <m.div id="mobile-menu" className="fixed inset-0 z-[60] flex flex-col bg-espresso px-5 pb-[calc(24px+env(safe-area-inset-bottom))] pt-5 text-cream" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: .55, ease: [0.22,1,.36,1] }}>
      <div className="flex items-center justify-between"><Wordmark light/><button className="grid h-12 w-12 place-items-center rounded-full border border-cream/25" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
      <div className="my-auto flex flex-col gap-3">{links.map(([to, label], index) => <m.div key={to} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 + index * .08 }}><NavLink to={to} className="font-display text-[clamp(2.5rem,12vw,4.5rem)] leading-tight">{label}</NavLink></m.div>)}</div>
      <div className="border-t border-cream/15 pt-5 text-sm text-cream/70"><p className="mb-3">{siteConfig.address}<br/><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a></p><div className="flex gap-4"><a href={siteConfig.socials.instagram} aria-label="Instagram"><Instagram /></a><a href={siteConfig.socials.facebook} aria-label="Facebook"><Facebook /></a></div></div>
    </m.div>}</AnimatePresence>
  </>;
}
