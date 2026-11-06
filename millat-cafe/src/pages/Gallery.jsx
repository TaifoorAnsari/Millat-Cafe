import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/ui/PageHeader';
import { GalleryFilters } from '../components/gallery/GalleryFilters';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { LightboxWrapper } from '../components/gallery/LightboxWrapper';
import { gallery } from '../data/gallery';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
export default function Gallery() { const [filter, setFilter] = useState('All'); const [visible, setVisible] = useState(12); const [index, setIndex] = useState(null); const items = useMemo(() => gallery.filter((item) => filter === 'All' || item.category === filter), [filter]); const shown = items.slice(0, visible); return <PageTransition><Helmet><title>Gallery | Millat Cafe</title><meta name="description" content="Step inside Millat Cafe through moments of coffee, food, ambience and celebration."/></Helmet><PageHeader title="Gallery" subtitle="A glimpse of the cups, plates and people that make Millat feel like home."/><section className="section-pad"><div className="container-site"><GalleryFilters active={filter} onChange={(value) => { setFilter(value); setVisible(12); }}/><div className="mt-8"><GalleryGrid items={shown} onOpen={setIndex}/></div>{shown.length < items.length && <div className="mt-8 text-center"><Button onClick={() => setVisible((v) => v + 6)}>Load more</Button></div>}</div></section><LightboxWrapper items={shown} index={index} setIndex={setIndex} onClose={() => setIndex(null)}/></PageTransition>; }
