import { useRef, useState } from 'react';
import { siteConfig } from '../data/siteConfig.js';
const budgets = ['Under ₹50,000', '₹50,000 – ₹2,00,000', '₹2,00,000 – ₹5,00,000', '₹5,00,000+', 'Not sure yet'];
const empty = { name: '', email: '', company: '', service: '', budget: '', message: '' };
const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your full name.';
  if (!v.email.trim()) e.email = 'Enter your business email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email, like name@company.com.';
  if (!v.service) e.service = 'Choose a service.';
  if (v.message.trim().length < 10) e.message = 'Describe your project in at least 10 characters.';
  return e;
};
export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);
  const set = (k) => (e) => setValues({ ...values, [k]: e.target.value });
  const wa = siteConfig.whatsappNumber && `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hi, I would like to discuss a project.')}`;

  const submit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) { formRef.current.querySelector(`#f-${first}`)?.focus(); return; }
    setStatus('sending');
    const body = `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || '-'}\nService: ${values.service}\nBudget: ${values.budget || '-'}\n\n${values.message}`;
    setTimeout(() => {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent('Project inquiry: ' + values.service)}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
    }, 500);
  };
  const field = (id, label, input, optional) => (
    <div className="field"><label htmlFor={`f-${id}`}>{label}{optional && <span className="muted"> (optional)</span>}</label>{input}
      {errors[id] && <p className="error" id={`e-${id}`} role="alert">{errors[id]}</p>}</div>);
  const a11y = (id) => ({ id: `f-${id}`, value: values[id], onChange: set(id), 'aria-invalid': !!errors[id], 'aria-describedby': errors[id] ? `e-${id}` : undefined });
  return (
    <section id="contact" className="section dark contact" aria-labelledby="contact-h"><div className="container contact-grid">
      <div className="reveal"><h2 id="contact-h">Have a problem worth solving?</h2>
        <p className="lead">Tell us what you are trying to build, improve, or automate. Let’s explore the right solution.</p>
        {wa && <a className="btn btn-light" href={wa} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>}
        <p className="muted small">{siteConfig.location}</p></div>
      <form ref={formRef} className="form reveal" onSubmit={submit} noValidate>
        {status === 'sent' ? (
          <div className="success" role="status"><h3>Your email app should now open.</h3>
            <p>This site has no server, so your inquiry is sent from your own email app. If nothing opened, email us directly at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
            <button type="button" className="btn btn-light" onClick={() => { setValues(empty); setStatus('idle'); }}>Send another inquiry</button></div>
        ) : (<>
          {field('name', 'Full name', <input type="text" autoComplete="name" {...a11y('name')} />)}
          {field('email', 'Business email', <input type="email" autoComplete="email" {...a11y('email')} />)}
          {field('company', 'Company name', <input type="text" autoComplete="organization" id="f-company" value={values.company} onChange={set('company')} />, true)}
          {field('service', 'Service of interest', <select {...a11y('service')}><option value="">Select a service</option>{siteConfig.services.map((s) => <option key={s}>{s}</option>)}</select>)}
          {field('budget', 'Estimated budget', <select id="f-budget" value={values.budget} onChange={set('budget')}><option value="">Select a range</option>{budgets.map((b) => <option key={b}>{b}</option>)}</select>, true)}
          {field('message', 'Project description', <textarea rows="5" {...a11y('message')} />)}
          <button className="btn btn-light" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Preparing email…' : 'Send inquiry'}</button>
        </>)}
      </form>
    </div></section>
  );
}
