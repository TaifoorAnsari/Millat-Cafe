import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, m } from 'framer-motion';

export function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return <div className="divide-y divide-espresso/15">{items.map((item, i) => <div key={item.q}>
    <button className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left font-semibold" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{item.q}<ChevronDown className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} size={20} /></button>
    <AnimatePresence initial={false}>{open === i && <m.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="pb-5 pr-8 text-muted">{item.a}</p></m.div>}</AnimatePresence>
  </div>)}</div>;
}
