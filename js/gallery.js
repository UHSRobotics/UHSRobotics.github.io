/*======================

	Lozad + Masonry + imagesloaded

========================*/	

var $masonryItemContainer = $('.masonry-item-container').masonry({
  itemSelector: '.masonry-item',
  percentPosition: true,
  columnWidth: '.masonry-sizer',
  gutter: 5
});

const observer = lozad('.lozad', {
  load: function (el) {
    el.src = el.getAttribute('data-src');

    if (el.classList.contains("masonry") && !el.classList.contains("loaded")) {
      $('.masonry-item-container').imagesLoaded().always(function () {
				console.log("Working")
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
  console.log("Working")
  $masonryItemContainer.masonry();
});