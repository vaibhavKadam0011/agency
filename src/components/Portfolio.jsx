import { useState } from 'react';
import { projects } from '../data/projects.js';
import ProjectModal from './ProjectModal.jsx';

const ChatMock = () => (
  <div className="mock chat">
    <div className="mock-bar"><b>Support Assistant</b><i>● Online</i></div>
    <p className="bubble user">What is your returns policy?</p>
    <p className="bubble bot">Items can be returned within the period stated in your policy document. Want the steps?</p>
    <div className="sources"><span>Source: Returns policy</span><span>Source: FAQ</span></div>
    <div className="chips"><span>Track my order</span><span>Delivery times</span><span>Talk to a person</span></div>
  </div>
);
const SiteMock = () => (
  <div className="mock site">
    <div className="mock-bar"><u /><u /><u /><em>yourbusiness.example</em></div>
    <div className="site-hero"><s className="l1" /><s className="l2" /><s className="l3" /><span className="fake-btn">Get in touch</span></div>
    <div className="site-cards"><s /><s /><s /></div>
    <div className="site-cta">Book a free consultation</div>
  </div>
);
const DashMock = () => (
  <div className="mock dash">
    <div className="metrics">{[['Open requests', '24'], ['Automated', '68%'], ['Avg. response', '2h']].map(([k, v]) => (<div key={k}><small>{k}</small><b>{v}</b></div>))}</div>
    <div className="dash-row">
      <svg viewBox="0 0 200 80" aria-hidden="true"><polyline points="0,64 30,52 60,58 90,38 120,44 150,24 200,12" fill="none" stroke="#3157D5" strokeWidth="2.5" strokeLinejoin="round" /><line x1="0" y1="78" x2="200" y2="78" stroke="#E7E7E3" /></svg>
      <ul className="feed"><li><i className="ok" />Invoice batch processed</li><li><i className="wait" />Lead follow-up queued</li><li><i className="ok" />Report generated</li></ul>
    </div>
    <small className="sample">Sample data</small>
  </div>
);
const previews = { chat: ChatMock, site: SiteMock, dash: DashMock };

export default function Portfolio() {
  const [active, setActive] = useState(null);
  return (
    <section id="work" className="section alt" aria-labelledby="work-h"><div className="container">
      <header className="sec-head reveal"><p className="eyebrow">SELECTED WORK</p><h2 id="work-h">Ideas turned into working products.</h2></header>
      <div className="grid-3">
        {projects.map((p) => { const Preview = previews[p.preview]; return (
          <article key={p.id} className="card project reveal">
            <div className="preview" role="img" aria-label={`Mockup preview of ${p.title}`}><Preview /></div>
            <div className="project-body">
              <div className="meta"><span>{p.category}</span><span className="badge">Concept Project</span></div>
              <h3>{p.title}</h3><p>{p.description}</p>
              <button className="btn btn-ghost" onClick={() => setActive(p)} aria-haspopup="dialog">View Project</button>
            </div>
          </article>); })}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div></section>
  );
}
