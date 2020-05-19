/*======================

	Lozad + Masonry + imagesloaded

========================*/

const observer = lozad('.lozad', {
  load: function (el) {
    el.src = el.getAttribute('data-src');

    console.log("Loaded an image")
    if (!el.classList.contains("loaded")) {
      if (el.classList.contains("masonry")) {
        $('.masonry-item-container').imagesLoaded().always(function () {
          $masonryItemContainer.masonry();
          el.parentNode.classList.add("fully-loaded");
        });
      }
      el.classList.add("loaded");
    }
  }
});
observer.observe();

$('.masonry-item-container').imagesLoaded().always(function () {
  $masonryItemContainer.masonry();
});