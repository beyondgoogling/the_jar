import { weekPreview } from "@/data/content";

export default function WeekPreview() {
  return (
    <div className="week-preview" aria-label="Preview of a weekly prompt slip">
      <div className="week-preview__card week-preview__card--back" aria-hidden="true" />
      <div className="week-preview__card week-preview__card--mid" aria-hidden="true" />
      <div className="week-preview__card week-preview__card--front">
        <div className="week-preview__label">{weekPreview.label}</div>
        <p className="week-preview__prompt">{weekPreview.prompt}</p>
        <div className="week-preview__meta">{weekPreview.meta}</div>
      </div>
    </div>
  );
}