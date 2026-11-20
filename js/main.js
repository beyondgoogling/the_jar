/* =========================================================
   The Growth Jar — main script
   Edit the LINKS object to point at your real checkout.
   ========================================================= */

/* 1. Checkout links ---------------------------------------- */
var LINKS = {
  journal:  "#order",   // e.g. "https://paystack.com/pay/xxxx"
  complete: "#order"    // e.g. "https://paystack.com/pay/yyyy"
};
document.querySelectorAll("[data-package]").forEach(function (a) {
  a.href = LINKS[a.dataset.package] || "#order";
});

/* 2. Mobile sticky pre-order bar --------------------------- */
/* Shows after the hero, hides while the packages are on screen */
var st = document.getElementById("stick");
if (st) {
  var vis = { h: true, o: false };
  function up() { st.classList.toggle("on", !vis.h && !vis.o); }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (e) {
      vis.h = e[0].isIntersecting; up();
    }, { rootMargin: "0px 0px -20% 0px" }).observe(document.querySelector(".hero"));

    new IntersectionObserver(function (e) {
      vis.o = e[0].isIntersecting; up();
    }, { rootMargin: "0px 0px -10% 0px" }).observe(document.getElementById("order"));
  }

  /* Hide near page bottom so it never covers the footer links */
  window.addEventListener("scroll", function () {
    var nearBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 8);
    if (nearBottom) st.classList.remove("on");
  }, { passive: true });
}