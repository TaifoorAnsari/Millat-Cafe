import { Coffee } from 'lucide-react';
import { Button } from '../ui/Button';
export function EmptyState({ onClear }) { return <div className="col-span-full rounded-card bg-white px-6 py-16 text-center"><Coffee className="mx-auto mb-4 text-caramel" size={48}/><h2 className="mb-2 text-3xl">No items found</h2><p className="mb-6 text-muted">Try a different name or clear your filters.</p><Button onClick={onClear}>Clear filters</Button></div>; }
