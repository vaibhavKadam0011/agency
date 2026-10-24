import { useState } from 'react';
const faqs = [
  ['What services do you offer?', 'We offer AI and workflow automation, AI chatbots and agents, website and web application development, and custom software built around your requirements.'],
  ['Can you build a custom AI solution for my business?', 'Yes. We start with the problem you want to solve, then recommend the simplest AI approach that fits your data, tools and budget.'],
  ['Can you integrate AI into an existing website or workflow?', 'Yes. Many projects add AI features, such as an assistant or document processing, to systems you already use through APIs and integrations.'],
  ['How does a project typically begin?', 'With a conversation. Share what you want to build, improve or automate, and we will discuss goals, constraints and a sensible scope before any work starts.'],
  ['How much does a project cost?', 'Pricing depends on scope, integrations, complexity and requirements. After an initial discussion we can give a clear estimate for the agreed scope.'],
  ['Do you provide ongoing support?', 'Yes. We can support launches and continue improving the solution afterwards. The level of support is agreed with you per project.'],
];
export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section alt" aria-labelledby="faq-h"><div className="container narrow">
      <header className="sec-head reveal"><p className="eyebrow">FAQ</p><h2 id="faq-h">Questions, answered.</h2></header>
      <div className="faq">{faqs.map(([q, a], i) => (
        <div key={q} className="faq-item">
          <h3><button id={`faq-b${i}`} aria-expanded={open === i} aria-controls={`faq-p${i}`} onClick={() => setOpen(open === i ? -1 : i)}>{q}<span aria-hidden="true">{open === i ? '−' : '+'}</span></button></h3>
          <div id={`faq-p${i}`} role="region" aria-labelledby={`faq-b${i}`} hidden={open !== i}><p>{a}</p></div>
        </div>))}</div>
    </div></section>
  );
}
