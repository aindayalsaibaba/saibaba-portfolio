export default function About({ profile, stats, certifications }) {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <p className="eyebrow">About</p>
        <h2 className="section-title about-bio">
          I'm {profile.name}, a product designer in Hyderabad. For 18+ years
          I've shaped SaaS platforms, mobile apps and web products for
          enterprise teams. These days I'm just as likely to be inside n8n
          wiring an automation as I am inside Figma — building the AI layer
          that makes an interface feel like it's actually paying attention.
        </h2>
      </div>

      <div className="about-stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="about-lower">
        <p className="about-lede">
          I think of AI less like a feature bolted onto a product, and more
          like a new material to design with — one that has to be shaped
          carefully so it stays honest, useful, and easy to trust.
        </p>

        <div className="about-certs">
          <p className="eyebrow">Certifications</p>
          <ul>
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
