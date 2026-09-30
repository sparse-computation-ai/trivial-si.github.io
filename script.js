(() => {
  "use strict";

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const scene = document.querySelector(".paper-scene");
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const mouse = matchMedia("(hover: hover) and (pointer: fine)");
  if (!scene) return;

  let frame = 0;
  let x = 0;
  let y = 0;

  const reset = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    scene.style.setProperty("--paper-x", "0px");
    scene.style.setProperty("--paper-y", "0px");
  };

  window.addEventListener("pointermove", (event) => {
    if (motion.matches || !mouse.matches || event.pointerType !== "mouse") return;
    x = (event.clientX / innerWidth - .5) * 12;
    y = (event.clientY / innerHeight - .5) * 12;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      scene.style.setProperty("--paper-x", `${x.toFixed(2)}px`);
      scene.style.setProperty("--paper-y", `${y.toFixed(2)}px`);
      frame = 0;
    });
  }, { passive: true });

  document.documentElement.addEventListener("pointerleave", reset);
  motion.addEventListener("change", reset);
  mouse.addEventListener("change", reset);
})();
