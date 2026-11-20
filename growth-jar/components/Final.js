import { final } from "@/data/content";

export default function Final() {
  return (
    <section className="final dark-bg">
      <div className="wrap">
        <h2>{final.heading}</h2>
        <p>{final.body}</p>
        <p style={{ marginTop: 28 }}>
          <a className="btn" href="#order">{final.cta}</a>
        </p>
        <p className="tag">{final.tagline}</p>
      </div>
    </section>
  );
}