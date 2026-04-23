// Dynamic footer year

document.getElementById('footerYear').innerText= new Date().getFullYear('Y')

function switchCase(idx) {
  document
    .querySelectorAll(".case-tab")
    .forEach((t, i) => t.classList.toggle("active", i === idx));
  document
    .querySelectorAll(".case-panel")
    .forEach((p, i) => p.classList.toggle("active", i === idx));
}

// Subtle scroll fade-in
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".project-card, .stack-card, .trait-card, .metric-row")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition =
      "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s";
    obs.observe(el);
  });
