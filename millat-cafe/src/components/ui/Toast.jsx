import { AnimatePresence, m } from 'framer-motion';
export function Toast({ message }) { return <AnimatePresence>{message && <m.div className="toast" role="status" initial={{ opacity: 0, y: 14, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: 10, x: '-50%' }}>{message}</m.div>}</AnimatePresence>; }
