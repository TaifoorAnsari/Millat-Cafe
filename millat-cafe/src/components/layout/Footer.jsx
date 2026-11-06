import { useState } from 'react';
import { Facebook, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { Toast } from '../ui/Toast';

export function Footer() {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState('');
  const subscribe = (e) => { e.preventDefault(); if (!/^\S+@\S+\.\S+$/.test(email)) return setToast('Please enter a valid email'); setToast('You’re on the Millat list!'); setEmail(''); setTimeout(() => setToast(''), 2600); };
  return <footer className="bg-espresso text-cream">
    <div className="border-b border-cream/10 py-8"><div className="container-site grid gap-5 md:grid-cols-[1fr_auto] md:items-center"><div><h3 className="mb-1">A little joy, delivered.</h3><p className="mb-0 text-sm text-cream/60">Seasonal sips, cafe news and sweet surprises.</p></div><form className="flex max-w-lg gap-2" onSubmit={subscribe}><label className="sr-only" htmlFor="newsletter">Email</label><input id="newsletter" className="min-w-0 flex-1 rounded-full border border-cream/20 bg-cream/10 px-5 text-base text-cream placeholder:text-cream/40" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address"/><button className="btn btn-primary shrink-0" type="submit">Join us</button></form></div></div>
    <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4"><div><div className="mb-5 font-display text-4xl">Millat Cafe</div><p className="max-w-xs text-sm text-cream/60">Handcrafted drinks, comforting bakes and a warm corner made for lingering.</p><div className="mt-5 flex gap-4"><a href={siteConfig.socials.instagram} aria-label="Instagram"><Instagram /></a><a href={siteConfig.socials.facebook} aria-label="Facebook"><Facebook /></a><a href={`https://wa.me/${siteConfig.whatsapp}`} aria-label="WhatsApp"><MessageCircle /></a><a href={siteConfig.socials.maps} aria-label="Google Maps"><MapPin /></a></div></div><div><h3 className="font-sans text-base">Quick links</h3><div className="mt-4 grid gap-2 text-sm text-cream/65"><Link to="/">Home</Link><Link to="/menu">Menu</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact</Link></div></div><div><h3 className="font-sans text-base">Opening hours</h3><div className="mt-4 grid gap-2 text-sm text-cream/65"><p>Sun–Thu: 8 AM–11 PM</p><p>Fri–Sat: 8 AM–11:30 PM</p><p>Open every day</p></div></div><div><h3 className="font-sans text-base">Find us</h3><div className="mt-4 text-sm text-cream/65"><p>{siteConfig.address}</p><a className="block" href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div></div>
    <div className="border-t border-cream/10 py-5"><div className="container-site text-xs text-cream/45">© {new Date().getFullYear()} Millat Cafe. All rights reserved.</div></div><Toast message={toast}/>
  </footer>;
}
