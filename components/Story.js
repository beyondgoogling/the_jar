import { story } from "@/data/content";

export default function Story() {
  return (
    <section className="story">
      <div className="wrap two">
        <div>
          <h2>{story.leftHeading}</h2>
          {story.leftParagraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div>
          <h2>{story.rightHeading}</h2>
          <div className="box">{story.whyPlaceholder}</div>
          <h3 style={{ marginTop: 28 }}>{story.testimonialsHeading}</h3>
          <div className="box">{story.testimonialsPlaceholder}</div>
        </div>
      </div>
    </section>
  );
}