import { faq } from "@/data/content";

export default function Faq() {
  return (
    <section className="faq" style={{ background: "var(--white)" }}>
      <div className="wrap narrow">
        <h2>Frequently asked questions</h2>
        {faq.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
        <p style={{ marginTop: 32 }}>
          <a className="btn dark" href="#order">Pre-order your Growth Jar</a>
        </p>
      </div>
    </section>
  );
}