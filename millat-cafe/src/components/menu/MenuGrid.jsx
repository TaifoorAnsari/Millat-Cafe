import { AnimatePresence } from 'framer-motion';
import { MenuCard } from './MenuCard';
import { EmptyState } from './EmptyState';
export function MenuGrid({ items, onOpen, onAdd, onClear }) { return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><AnimatePresence mode="popLayout">{items.length ? items.map((item) => <MenuCard key={item.id} item={item} onOpen={onOpen} onAdd={onAdd}/>) : <EmptyState onClear={onClear}/>}</AnimatePresence></div>; }
