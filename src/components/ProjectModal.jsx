import { useEffect, useRef } from 'react';
export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (project && !d.open) d.showModal();
    if (!project && d.open) d.close();
  }, [project]);
  const rows = project ? [['The problem', project.problem], ['The solution', project.solution], ['Intended benefit', project.benefit]] : [];
  return (
    <dialog ref={ref} className="modal" aria-labelledby="modal-title" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
      {project && (<div className="modal-body">
        <button className="modal-close" onClick={onClose} aria-label="Close project details">×</button>
        <span className="badge">Concept Project</span>
        <p className="muted">{project.category}</p>
        <h3 id="modal-title">{project.title}</h3>
        <p>{project.description}</p>
        <dl>{rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
          <div><dt>Technology</dt><dd className="tags">{project.technology.map((t) => <span key={t}>{t}</span>)}</dd></div></dl>
        <p className="note">This is a speculative concept, not work delivered for a client. Figures shown are illustrative sample data.</p>
      </div>)}
    </dialog>
  );
}
