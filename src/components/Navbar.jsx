import { useEffect, useState } from 'react';
import { siteConfig } from '../data/siteConfig.js';
export const Logo = () => (
  <a className="logo" href="#home" aria-label={`${siteConfig.name} home`}>
    <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="currentColor"/><path d="M9 22V10l7 8 7-8v12" fill="none" stroke="#F8F8F5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    <span>{siteConfig.name}</span>
  </a>
);
const links = [['Home', '#home'], ['Services', '#services'], ['Work', '#work'], ['Process', '#process'], ['About', '#about']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); };
  }, []);
  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <button className="nav-toggle" aria-expanded={open} aria-controls="nav-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="nav-menu" className={`nav-menu${open ? ' open' : ''}`} aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>Let’s Talk</a>
        </nav>
      </div>
    </header>
  );
}
