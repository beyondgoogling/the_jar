import { packages } from "@/data/content";

export default function Packages() {
  return (
    <section id="order">
      <div className="wrap">
        <h2>{packages.heading}</h2>
        <p>{packages.intro}</p>
        <div className="pk">
          {packages.plans.map((plan) => (
            <div key={plan.id} className={`card ${plan.badge ? "best" : ""}`}>
              {plan.badge && <div className="badge">{plan.badge}</div>}
              <h3>{plan.name}</h3>
              <div className="price"><span className="ph">{plan.price}</span></div>
              <ul>
                {plan.features.map((f) => (
                  <li key={f.text} className={f.excluded ? "no" : ""}>{f.text}</li>
                ))}
              </ul>
              <a
                className={`btn ${plan.ctaStyle === "dark" ? "dark" : ""}`}
                href={packages.checkout[plan.id]}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="guarantee">{packages.guarantee}</p>
        <p className="note">{packages.shippingNote}</p>
      </div>
    </section>
  );
}