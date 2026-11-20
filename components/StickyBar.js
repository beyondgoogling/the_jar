"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/data/content";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    const order = document.getElementById("order");
    if (!hero || !order || !("IntersectionObserver" in window)) return;

    const heroVisible = { current: true };
    const orderVisible = { current: false };

    const update = () => {
      setVisible(!heroVisible.current && !orderVisible.current);
    };

    const io1 = new IntersectionObserver(
      ([e]) => { heroVisible.current = e.isIntersecting; update(); },
      { rootMargin: "0px 0px -20% 0px" }
    );
    const io2 = new IntersectionObserver(
      ([e]) => { orderVisible.current = e.isIntersecting; update(); },
      { rootMargin: "0px 0px -10% 0px" }
    );

    io1.observe(hero);
    io2.observe(order);

    const onScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 8;
      setNearBottom(bottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io1.disconnect();
      io2.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const on = visible && !nearBottom;

  return (
    <div className={`stick dark-bg ${on ? "on" : ""}`} id="stick">
      <span>
        Launches 11 December
        <b>From <span className="ph">{hero.price}</span></b>
      </span>
      <a className="btn" href="#order">Pre-order</a>
    </div>
  );
}