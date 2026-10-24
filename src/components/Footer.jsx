import { siteConfig } from '../data/siteConfig.js';
import { Logo } from './Navbar.jsx';
const ext = (label, url) => url ? <a href={url} target="_blank" rel="noopener noreferrer">{label}</a> : <span className="muted-link" title="Add this URL in siteConfig.js">{label}</span>;
export default function Footer() {
  return (
    <footer className="footer"><div className="container footer-grid">
      <div><Logo /><p>Practical AI, automation and software for growing businesses.</p></div>
      <nav aria-label="Footer"><h4>Navigate</h4>{[['Home', '#home'], ['Services', '#services'], ['Work', '#work'], ['Process', '#process'], ['About', '#about'], ['FAQ', '#faq']].map(([l, h]) => <a key={h} href={h}>{l}</a>)}</nav>
      <nav aria-label="Services"><h4>Services</h4>{siteConfig.services.slice(0, 4).map((s) => <a key={s} href="#services">{s}</a>)}</nav>
      <div><h4>Connect</h4><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{ext('LinkedIn', siteConfig.links.linkedin)}{ext('Instagram', siteConfig.links.instagram)}</div>
    </div>
    <div className="container footer-base"><span>© {new Date().getFullYear()} {siteConfig.name}</span>{ext('Privacy Policy', siteConfig.links.privacy)}</div></footer>
  );
}
