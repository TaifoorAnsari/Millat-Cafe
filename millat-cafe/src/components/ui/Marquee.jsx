const words = ['ESPRESSO', 'LATTE', 'CAPPUCCINO', 'MOCHA', 'COLD BREW', 'CHAI', 'BROWNIE', 'CHEESECAKE'];
export function Marquee() {
  const row = words.map((word) => <span key={word}>{word}<b> ✦ </b></span>);
  return <div className="marquee" aria-label={words.join(', ')}><div className="marquee-track"><div className="marquee-item">{row}</div><div className="marquee-item" aria-hidden>{row}</div></div></div>;
}
