import Jar from "./Jar";
import WeekPreview from "./WeekPreview";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section className="hero dark-bg">
      <div className="wrap">
        <div>
          <h1>{hero.heading}</h1>
          <p className="sub">
            <b>{hero.subLead}</b> {hero.sub}
          </p>
          <div className="cta-row">
            <a className="btn" href="#order">{hero.ctaLabel}</a>
            <span className="price-from">From <span className="ph">{hero.price}</span></span>
          </div>
          <p className="fine">
            <strong>Launching 11 December 2026.</strong> Pre-order by{" "}
            <span className="ph">{hero.orderBy}</span> to get{" "}
            <span className="ph">{hero.foundingOffer}</span> and have it before Christmas.
          </p>
        </div>
        <Jar />
        <WeekPreview />
      </div>
    </section>
  );
}