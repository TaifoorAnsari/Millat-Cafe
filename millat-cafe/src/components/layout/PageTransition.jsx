import { m } from 'framer-motion';
export function PageTransition({ children }) { return <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .45, ease: [0.22,1,.36,1] }}>{children}</m.div>; }
