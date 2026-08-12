import Pipeline from "./Pipeline";
import heroPortrait from "../assets/hero-portrait.webp";

export default function Hero({ profile, pipeline }) {
  return (
    <section id="top" className="hero">
      <div className="hero-top">
        <div className="hero-inner">
          <p className="eyebrow">{profile.location} — Portfolio 2026</p>
          <h1 className="hero-title">
            {profile.fullName}.
            <br />
            <span className="hero-title-muted">Designer for products & AI.</span>
          </h1>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a href="#work" className="btn btn--primary">
              View my work
            </a>
            <a
              href="/Saibaba_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              Download résumé
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <img src={heroPortrait} alt={profile.fullName} />
        </div>
      </div>

      <div className="hero-pipeline">
        <p className="pipeline-caption">Design shipped through the stack</p>
        <Pipeline nodes={pipeline} />
      </div>
    </section>
  );
}
