import { Star } from 'lucide-react';
export function RatingStars({ size = 16 }) { return <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={size} fill="currentColor" aria-hidden />)}</div>; }
