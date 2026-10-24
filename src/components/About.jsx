export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-h"><div className="container about-grid">
      <div className="reveal"><p className="eyebrow">ABOUT THE STUDIO</p><h2 id="about-h">A technology partner for ideas worth building.</h2>
        <p className="lead">We are an AI and software solutions studio focused on helping businesses use technology more effectively. From digital experiences to intelligent automation, we turn ideas and operational challenges into practical, thoughtfully engineered solutions.</p></div>
      <ul className="focus reveal">{['Understand before building', 'Choose technology with purpose', 'Prioritize long-term usefulness'].map((t) => <li key={t}>{t}</li>)}</ul>
    </div></section>
  );
}
