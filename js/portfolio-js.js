document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Dynamic footer year (Fixed)
  const footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // 2. Case Study Tab Switcher
  window.switchCase = function(index) {
    const tabs = document.querySelectorAll(".case-tab");
    const panels = document.querySelectorAll(".case-panel");

    // Remove active class and reset ARIA attributes
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    });
    panels.forEach((panel) => panel.classList.remove("active"));

    // Add active class to the clicked tab and its corresponding panel
    if (tabs[index]) {
      tabs[index].classList.add("active");
      tabs[index].setAttribute("aria-selected", "true");
    }
    
    const targetPanel = document.getElementById(`case-${index}`);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  };

  // 3. Optional: Horizontal scroll for the 6-tab navigation bar using mouse wheel
  const tabContainer = document.querySelector(".case-tabs");
  if (tabContainer) {
    tabContainer.addEventListener("wheel", (evt) => {
      // Only scroll horizontally if the container is actually overflowing
      if (tabContainer.scrollWidth > tabContainer.clientWidth) {
        evt.preventDefault();
        tabContainer.scrollLeft += evt.deltaY;
      }
    }, { passive: false });
  }

  // 4. Subtle scroll fade-in
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  const animatedElements = document.querySelectorAll(".project-card, .stack-card, .trait-card, .metric-row");
  
  animatedElements.forEach((el) => {
    if (!el) return; // Safety check
    
    // Initial state
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s";
    
    // Observe element
    obs.observe(el);
  });

});
