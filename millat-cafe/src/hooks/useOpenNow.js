import { siteConfig } from '../data/siteConfig';

export function useOpenNow() {
  const now = new Date();
  const day = now.getDay();
  const schedule = siteConfig.hours[day];
  const current = now.getHours() * 60 + now.getMinutes();
  const [oh, om] = schedule.open.split(':').map(Number);
  const [ch, cm] = schedule.close.split(':').map(Number);
  return { isOpen: current >= oh * 60 + om && current < ch * 60 + cm, today: day, schedule };
}
