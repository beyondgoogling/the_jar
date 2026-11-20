import { inside } from "@/data/content";

const colorVar = {
  gold: "var(--gold)",
  sky: "var(--sky)",
  lilac: "var(--lilac)",
  coral: "var(--coral)"
};

export default function Inside() {
  return (
    <section className="inside dark-bg">
      <div className="wrap">
        <h2>{inside.heading}</h2>
        <p style={{ color: "#D6E7E2", maxWidth: "36em" }}>{inside.intro}</p>
        <div className="grid">
          <div>
            <h3>The details</h3>
            <ul className="specs">
              {inside.specs.map((s) => (
                <li key={s.label}><b>{s.label}:</b> {s.value}</li>
              ))}
            </ul>
            <div className="box" style={{ marginTop: 24, borderColor: "rgba(255,255,255,.3)", color: "#B5CEC7" }}>
              Add product photos here: the cover, an open page with a tear-out slip, and the jar with folded slips.
            </div>
          </div>
          <div>
            <h3>Six themes, all year</h3>
            <ul className="themes">
              {inside.themes.map((t) => (
                <li key={t.title} style={{ "--c": colorVar[t.color] }}>
                  <b>{t.title}</b> {t.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="slips">
          {inside.samplePrompts.map((p) => (
            <div key={p.text} className="slip" style={{ "--c": colorVar[p.color] }}>{p.text}</div>
          ))}
        </div>
        <p className="slips-note">Sample prompts. <span className="ph">[Replace with your real prompts.]</span></p>
      </div>
    </section>
  );
}