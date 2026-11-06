import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
export function FloatingCTA() { return <a className="fixed bottom-[calc(18px+env(safe-area-inset-bottom))] right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-caramel text-espresso shadow-warm md:hidden" href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Message Millat Cafe on WhatsApp"><span className="absolute inset-0 -z-10 animate-ping rounded-full bg-caramel/35"/><MessageCircle aria-hidden /></a>; }
