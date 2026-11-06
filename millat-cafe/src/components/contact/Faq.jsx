import { faq } from '../../data/faq';
import { Accordion } from '../ui/Accordion';
export function Faq() { return <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><div className="eyebrow">Good to know</div><h2 className="mb-3 mt-3">Frequently Asked Questions</h2><p className="text-muted">Still curious? Call us and we’ll happily help.</p></div><div className="rounded-card bg-white px-6"><Accordion items={faq}/></div></div>; }
