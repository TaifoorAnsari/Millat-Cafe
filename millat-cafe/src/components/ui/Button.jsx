import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export function Button({ to, href, variant = 'primary', children, className = '', arrow = true, ...props }) {
  const classes = cn('btn', variant === 'primary' ? 'btn-primary' : 'btn-secondary', className);
  const content = <>{children}{arrow && <ArrowRight className="btn-arrow" size={18} aria-hidden />}</>;
  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>;
  if (href) return <a className={classes} href={href} {...props}>{content}</a>;
  return <button className={classes} {...props}>{content}</button>;
}
