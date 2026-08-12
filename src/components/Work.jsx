export default function Work({ items }) {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <p className="eyebrow">Portfolio</p>
        <h2 className="section-title">Selected work.</h2>
        <p className="section-sub">
          A few projects I designed and built end to end — from the interface down to the automation running behind it.
        </p>
      </div>

      <div className="work-list">
        {items.map((item, i) => (
          <article className="work-item" key={item.title}>
            <div className="work-meta">
              <span className="work-index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="work-company">{item.company}</p>
                <p className="work-tag">
                  {item.tag} · {item.period}
                </p>
              </div>
            </div>

            <div className="work-body">
              <h3 className="work-title">{item.title}</h3>
              <p className="work-description">{item.description}</p>
              <p className="work-detail">{item.detail}</p>

              <ul className="work-stack">
                {item.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="work-link"
                >
                  {item.linkLabel} →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
