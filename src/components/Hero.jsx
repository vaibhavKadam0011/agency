const sources = ['Emails', 'Forms', 'Spreadsheets'];
const outcomes = ['Faster replies', 'Less manual work', 'Clear insights'];
const Flow = () => (
  <svg className="flow" viewBox="0 0 520 380" role="img" aria-label="Diagram: business data from emails, forms and spreadsheets flows through an AI engine into faster replies, less manual work and clear insights.">
    {sources.map((t, i) => { const y = 70 + 110 * i; return (<g key={t}>
      <rect x="6" y={y - 28} width="132" height="56" rx="10" className="n-box" />
      <text x="72" y={y + 5} textAnchor="middle" className="n-text">{t}</text>
      <path d={`M138 ${y} C 175 ${y}, 165 190, 202 190`} className="n-line dash" /></g>); })}
    <rect x="202" y="118" width="116" height="144" rx="14" className="n-engine" />
    <circle cx="260" cy="168" r="14" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="260" cy="168" r="4" fill="#fff" />
    <text x="260" y="222" textAnchor="middle" className="n-engine-text">AI Engine</text>
    {outcomes.map((t, i) => { const y = 70 + 110 * i; return (<g key={t}>
      <path d={`M318 190 C 355 190, 345 ${y}, 382 ${y}`} className="n-line dash" />
      <rect x="382" y={y - 28} width="132" height="56" rx="10" className="n-box n-out" />
      <text x="448" y={y + 5} textAnchor="middle" className="n-text">{t}</text></g>); })}
  </svg>
);
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">AI SOLUTIONS · DIGITAL PRODUCTS · AUTOMATION</p>
          <h1>Building smarter digital experiences for ambitious businesses.</h1>
          <p className="lead">We design and build websites, AI-powered solutions, and intelligent workflows that help businesses simplify operations, serve customers better, and scale with confidence.</p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#contact">Discuss Your Project</a>
            <a className="btn btn-ghost" href="#work">Explore Our Work</a>
          </div>
          <ul className="indicators">{['AI & Automation', 'Web Development', 'Custom Software'].map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <div className="hero-visual"><Flow /></div>
      </div>
    </section>
  );
}
