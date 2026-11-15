// Dynamic footer year

document.getElementById('footerYear').innerText= new Date().getFullYear('Y')

function switchCase(index) {
  // 1. Remove 'active' class from all tabs and panels
  const tabs = document.querySelectorAll(".case-tab");
  const panels = document.querySelectorAll(".case-panel");

  tabs.forEach((tab) => tab.classList.remove("active"));
  panels.forEach((panel) => panel.classList.remove("active"));

  // 2. Add 'active' class to the clicked tab and its corresponding panel
  if (tabs[index]) tabs[index].classList.add("active");
  const targetPanel = document.getElementById(`case-${index}`);
  if (targetPanel) targetPanel.classList.add("active");
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
