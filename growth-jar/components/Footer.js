import { footer } from "@/data/content";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        {footer.copyright} <span className="ph">{footer.contact}</span>
        <div className="foot-links">
          {footer.links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}