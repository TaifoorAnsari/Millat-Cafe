import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/ui/PageHeader';
import { ContactCards } from '../components/contact/ContactCards';
import { ContactForm } from '../components/contact/ContactForm';
import { HoursCard } from '../components/contact/HoursCard';
import { MapEmbed } from '../components/contact/MapEmbed';
import { Faq } from '../components/contact/Faq';
import { siteConfig } from '../data/siteConfig';
import { PageTransition } from '../components/layout/PageTransition';
export default function Contact() { return <PageTransition><Helmet><title>Visit & Contact | Millat Cafe</title><meta name="description" content="Find Millat Cafe, see opening hours, call, WhatsApp or send our team a message."/></Helmet><PageHeader title="Visit & Contact" subtitle="Drop in for your favourite cup, plan a celebration or simply say hello."/><section className="section-pad"><div className="container-site"><ContactCards/><div className="mt-16 grid items-start gap-6 lg:grid-cols-[1.2fr_.8fr]"><ContactForm/><HoursCard/></div><div className="mt-16 grid items-center gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><div className="eyebrow">Find your way</div><h2 className="mb-4 mt-3">Just Around the Corner</h2><p className="text-muted">Save the route, bring someone you like, and let the aroma guide you the rest of the way.</p><div className="mt-6 flex gap-3"><a className="grid h-12 w-12 place-items-center rounded-full bg-espresso text-cream" href={siteConfig.socials.instagram} aria-label="Instagram"><Instagram/></a><a className="grid h-12 w-12 place-items-center rounded-full bg-espresso text-cream" href={siteConfig.socials.facebook} aria-label="Facebook"><Facebook/></a><a className="grid h-12 w-12 place-items-center rounded-full bg-espresso text-cream" href={`https://wa.me/${siteConfig.whatsapp}`} aria-label="WhatsApp"><MessageCircle/></a></div></div><MapEmbed/></div><div className="mt-20"><Faq/></div></div></section></PageTransition>; }
