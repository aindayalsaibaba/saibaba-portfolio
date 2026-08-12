export default function Pipeline({ nodes }) {
  return (
    <div className="pipeline-wrap" role="img" aria-label={`Workflow: ${nodes.join(" to ")}`}>
      <div className="pipeline-track">
        <div className="pipeline-track-line" />
        <div className="pipeline-flow-line" />
        <div className="pipeline-nodes">
          {nodes.map((n, i) => {
            const align =
              i === 0 ? "start" : i === nodes.length - 1 ? "end" : "center";
            return (
              <div className={`pipeline-item pipeline-item--${align}`} key={n}>
                <span
                  className="pipeline-dot"
                  style={{ animationDelay: `${i * 0.35}s` }}
                />
                <span className="pipeline-label">{n}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
