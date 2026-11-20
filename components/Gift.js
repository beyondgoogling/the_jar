import { gift } from "@/data/content";

export default function Gift() {
  return (
    <section className="gift">
      <div className="wrap">
        <div>
          <h2>{gift.heading}</h2>
          <p>{gift.paragraph}</p>
        </div>
        <div>
          <ul className="for">
            {gift.list.map((li) => <li key={li}>{li}</li>)}
          </ul>
          <p>Order by <span className="ph">{gift.orderBy}</span> and it can be under the tree before Christmas, ready to start on January 1.</p>
          <p><a className="btn dark" href="#order" style={{ marginTop: 20 }}>{gift.cta}</a></p>
        </div>
      </div>
    </section>
  );
}