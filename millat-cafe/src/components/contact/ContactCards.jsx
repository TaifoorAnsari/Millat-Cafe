import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
const cards = [
  [MapPin, 'Visit us', siteConfig.address, siteConfig.directionsUrl], [Phone, 'Call us', siteConfig.phone, `tel:${siteConfig.phoneHref}`], [Mail, 'Email us', siteConfig.email, `mailto:${siteConfig.email}`], [MessageCircle, 'WhatsApp', 'Message our team', `https://wa.me/${siteConfig.whatsapp}`],
];
export function ContactCards() { return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{cards.map(([Icon, title, copy, href]) => <a className="card-lift rounded-card bg-white p-6" href={href} key={title} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-caramel/20 text-mocha"><Icon/></span><h3 className="mb-1 font-sans text-lg font-bold tracking-normal">{title}</h3><p className="mb-0 text-sm text-muted">{copy}</p></a>)}</div>; }
