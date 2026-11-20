import { meet } from "@/data/content";

export default function Meet() {
  return (
    <section className="meet">
      <div className="wrap narrow">
        <h2>{meet.heading}</h2>
        <p>{meet.intro}</p>
        <div className="opening">
          {meet.opening.map((p) => <p key={p}>{p}</p>)}
        </div>
        <p style={{ marginTop: 28 }}>{meet.closing}</p>
      </div>
    </section>
  );
}