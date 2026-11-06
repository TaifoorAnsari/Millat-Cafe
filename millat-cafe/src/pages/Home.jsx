import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/siteConfig';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/ui/Marquee';
import { AboutStory } from '../components/home/AboutStory';
import { SignaturePicks } from '../components/home/SignaturePicks';
import { WhyMillat } from '../components/home/WhyMillat';
import { RoastBand } from '../components/home/RoastBand';
import { Testimonials } from '../components/home/Testimonials';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { HoursLocation } from '../components/home/HoursLocation';
import { CtaBanner } from '../components/home/CtaBanner';
import { PageTransition } from '../components/layout/PageTransition';
export default function Home() { const jsonLd = { '@context': 'https://schema.org', '@type': 'CafeOrCoffeeShop', name: siteConfig.name, address: siteConfig.address, telephone: siteConfig.phone, email: siteConfig.email, servesCuisine: ['Coffee', 'Bakery', 'Cafe'], priceRange: '₹₹', openingHours: ['Mo-Th 08:00-23:00', 'Fr-Sa 08:00-23:30', 'Su 08:00-23:00'] }; return <PageTransition><Helmet><title>{siteConfig.seo.title}</title><meta name="description" content={siteConfig.seo.description}/><meta property="og:title" content={siteConfig.seo.title}/><meta property="og:description" content={siteConfig.seo.description}/><meta property="og:image" content={siteConfig.seo.image}/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json">{JSON.stringify(jsonLd)}</script></Helmet><Hero/><Marquee/><AboutStory/><SignaturePicks/><WhyMillat/><RoastBand/><Testimonials/><GalleryPreview/><HoursLocation/><CtaBanner/></PageTransition>; }
