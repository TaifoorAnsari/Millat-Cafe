export function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }) {
  return <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <div className={`eyebrow ${light ? '!text-gold' : ''}`}>{eyebrow}</div>
    <h2 className="mb-4 mt-3 text-balance">{title}</h2>
    {subtitle && <p className={light ? 'text-cream/70' : 'text-muted'}>{subtitle}</p>}
  </div>;
}
