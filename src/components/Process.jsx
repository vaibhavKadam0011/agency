const steps = [
  ['Discover', 'We understand your business, current challenges, goals, and requirements.'],
  ['Define', 'We identify the right solution, prioritize features, and agree on a clear scope.'],
  ['Build', 'We design, develop, test, and refine the solution through an iterative process.'],
  ['Launch & Improve', 'We help prepare the solution for launch and identify opportunities for ongoing improvement.'],
];
export default function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-h"><div className="container">
      <header className="sec-head reveal"><p className="eyebrow">HOW WE WORK</p><h2 id="process-h">From business challenge to practical solution.</h2></header>
      <ol className="steps">{steps.map(([t, d], i) => (
        <li key={t} className="reveal"><span className="step-no">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></li>))}</ol>
    </div></section>
  );
}
