/*======================

	Lozad + Masonry + imagesloaded

========================*/	

const observer = lozad('.lozad', {
  load: function (el) {
    el.src = el.getAttribute('data-src');

    console.log("Lozad!")

    if (el.classList.contains("masonry") && !el.classList.contains("loaded")) {
      $('.masonry-item-container').imagesLoaded().always(function () {
        $masonryItemContainer.masonry();
      });
    }

    el.classList.add("loaded");

    
    // Custom implementation to load an element
    // e.g. el.src = el.getAttribute('data-src');
  }
});
observer.observe();

$('.masonry-item-container').imagesLoaded().always(function () {
  $masonryItemContainer.masonry();
});