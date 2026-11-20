import { how } from "@/data/content";

export default function How() {
  return (
    <section className="how">
      <div className="wrap narrow">
        <h2>{how.heading}</h2>
        <p>{how.intro}</p>
        <ol>
          {how.steps.map((step, i) => (
            <li key={step.title}>
              <span className="n">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="tag">{how.tagline}</p>
      </div>
    </section>
  );
}