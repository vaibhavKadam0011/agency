import { useEffect } from 'react';
import { siteConfig } from './data/siteConfig.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import { Statement, Why } from './components/Statement.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    document.title = `${siteConfig.name} | AI Solutions, Automation & Web Development`;
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach((el) => el.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <Navbar />
    <main id="main"><Hero /><Statement /><Services /><Portfolio /><Process /><Why /><About /><FAQ /><Contact /></main>
    <Footer />
  </>);
}
