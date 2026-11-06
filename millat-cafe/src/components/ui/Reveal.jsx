import { m, useReducedMotion } from 'framer-motion';

export function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion();
  return <m.div className={className} initial={{ opacity: 0, y: reduce ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: reduce ? .2 : .7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</m.div>;
}
