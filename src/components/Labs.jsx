export default function Labs({ items }) {
  return (
    <section id="labs" className="section">
      <div className="section-head">
        <p className="eyebrow">Labs</p>
        <h2 className="section-title">Things I'm building on the side.</h2>
        <p className="section-sub">
          Smaller ventures where I do it all — strategy, design, and build.
        </p>
      </div>

      <div className="labs-grid">
        {items.map((item) => {
          const Wrapper = item.href ? "a" : "div";
          const wrapperProps = item.href
            ? { href: item.href, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Wrapper className="labs-card" key={item.name} {...wrapperProps}>
              <h3 className="labs-name">{item.name}</h3>
              <p className="labs-description">{item.description}</p>
              <p className="labs-tag">{item.tag}</p>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
