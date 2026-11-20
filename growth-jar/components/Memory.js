import { memory } from "@/data/content";

export default function Memory() {
  return (
    <section className="memory">
      <div className="wrap narrow">
        <h2>{memory.heading}</h2>
        <div className="q">
          {memory.questions.map((q) => <p key={q}>{q}</p>)}
        </div>
        <div className="rest">
          {memory.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}