(function () {
  const STORAGE_KEY = 'canon-sort-order';
  let mode = null;
  try {
    mode = localStorage.getItem(STORAGE_KEY);
  } catch (e) {}
  // Rendered links already default to "group" order (the canon
  // page's own default), so only swap when the reader has chosen chrono.
  if (mode !== 'chrono') return;
  ['cross-work-prev', 'cross-work-next'].forEach(function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    let href = el.getAttribute('data-chrono-href');
    let label = el.getAttribute('data-chrono-label');
    if (href) el.setAttribute('href', href);
    if (label) el.textContent = label;
  });
})();
