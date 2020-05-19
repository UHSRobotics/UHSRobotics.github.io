
const observer = lozad('.lozad', {
  load: function (el) {
    el.src = el.getAttribute('data-src');
    if (!el.classList.contains("loaded")) {
      el.classList.add("loaded");
    }
    // Custom implementation to load an element
    // e.g. el.src = el.getAttribute('data-src');
  }
});
observer.observe();