const principles = [
  ['Business-first thinking', 'Every decision starts from your goals, customers and daily operations.'],
  ['Practical AI implementation', 'AI is used where it saves time or improves service, not for show.'],
  ['Clear communication', 'Plain language, clear scope and regular updates throughout.'],
  ['Maintainable engineering', 'Clean, documented code that your team or ours can extend later.'],
];
export const Statement = () => (
  <section className="section statement"><div className="container narrow reveal">
    <h2 className="big">Technology should solve real problems. Not create more of them.</h2>
    <p className="lead">We combine thoughtful product design, reliable engineering, and practical AI to create solutions built around the way your business works.</p>
  </div></section>
);
export const Why = () => (
  <section id="why" className="section dark" aria-labelledby="why-h"><div className="container">
    <div className="why-head reveal">
      <h2 id="why-h">Good technology starts with understanding the problem.</h2>
      <p>We focus on building technology that serves a clear purpose, fits your workflow, and can evolve as your business grows.</p>
    </div>
    <ul className="principles">{principles.map(([t, d]) => (<li key={t} className="reveal"><h3>{t}</h3><p>{d}</p></li>))}</ul>
  </div></section>
);
