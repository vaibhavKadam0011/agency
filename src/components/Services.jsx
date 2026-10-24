const icons = { zap: 'M13 2L4 14h7l-1 8 9-12h-7z', chat: 'M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', web: 'M3 4h18v12H3zM8 20h8M12 16v4', code: 'M8 7l-5 5 5 5M16 7l5 5-5 5' };
const services = [
  { icon: 'zap', title: 'AI & Workflow Automation', text: 'Automate repetitive work, connect business tools, and build intelligent workflows that give your team more time to focus on meaningful work.', items: ['Business process automation', 'AI-powered workflows', 'Document processing', 'Tool and API integrations'] },
  { icon: 'chat', title: 'AI Chatbots & Agents', text: 'Create useful AI assistants that answer questions, help customers find information, and support business operations.', items: ['Website AI assistants', 'Customer support chatbots', 'Knowledge-base assistants', 'Agentic AI workflows'] },
  { icon: 'web', title: 'Website & Web Application Development', text: 'Build fast, responsive digital experiences that present your brand professionally and make it easier for customers to take action.', items: ['Business websites', 'Landing pages', 'Admin dashboards', 'Web applications'] },
  { icon: 'code', title: 'Custom AI & Software Solutions', text: 'Turn specific business challenges into practical software solutions designed around your requirements.', items: ['Custom software', 'AI-powered applications', 'Data dashboards', 'Third-party API integrations'] },
];
export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-h"><div className="container">
      <header className="sec-head reveal"><p className="eyebrow">WHAT WE DO</p><h2 id="services-h">Digital solutions built around your business.</h2></header>
      <div className="grid-2">
        {services.map((s) => (
          <article key={s.title} className="card service reveal">
            <svg className="icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icons[s.icon]} /></svg>
            <h3>{s.title}</h3><p>{s.text}</p>
            <ul className="checks">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </article>
        ))}
      </div>
    </div></section>
  );
}
