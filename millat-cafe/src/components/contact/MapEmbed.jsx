import { siteConfig } from '../../data/siteConfig';
import { Button } from '../ui/Button';
export function MapEmbed() { return <div><iframe className="map-frame" title="Millat Cafe on Google Maps" src={siteConfig.mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><Button href={siteConfig.directionsUrl} target="_blank" className="mt-4">Open in Google Maps</Button></div>; }
