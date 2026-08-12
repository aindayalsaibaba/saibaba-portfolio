export default function Contact({ profile }) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="contact">
      <div className="contact-inner">
        <p className="eyebrow">Say hello</p>
        <h2 className="contact-title">
          Open to remote UI/UX & AI product roles.
        </h2>

        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="contact-grid">
          <div>
            <p className="contact-label">Elsewhere</p>
            <div className="contact-links">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.links.behance} target="_blank" rel="noreferrer">
                Behance
              </a>
              <a href={profile.links.dribbble} target="_blank" rel="noreferrer">
                Dribbble
              </a>
              <a href={profile.links.designs99} target="_blank" rel="noreferrer">
                99designs
              </a>
              <a href="/Saibaba_Resume.pdf" target="_blank" rel="noreferrer">
                Résumé (PDF)
              </a>
            </div>
          </div>

          <div>
            <p className="contact-label">Based in</p>
            <p className="contact-value">{profile.location}</p>
          </div>

          <div>
            <p className="contact-label">Phone</p>
            <p className="contact-value">{profile.phone}</p>
          </div>
        </div>

        <div className="contact-bottom">
          <p>
            © {year} {profile.fullName}
          </p>
          <p>Designed and built in Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
