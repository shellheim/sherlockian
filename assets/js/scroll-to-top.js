(() => {
  const button = document.querySelector(".scroll-top");

  const toggleVisibility = () => {
    button.classList.toggle("is-visible", window.scrollY > 400);
  };

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  });

  window.addEventListener("scroll", toggleVisibility, { passive: true });

  toggleVisibility();
})();
