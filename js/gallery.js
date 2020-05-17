/*======================

	Lozad + Masonry + imagesloaded

========================*/	

var $masonryItemContainer = $('.masonryItemContainer').masonry({
  itemSelector: '.masonryItem',
  percentPosition: true,
  columnWidth: '.masonry-sizer',
  gutter: 5
});

const observer = lozad('.lozad', {
  load: function (el) {
    el.src = el.getAttribute('data-src');

    if (el.classList.contains("masonry") && !el.classList.contains("loaded")) {
      $('.masonryItemContainer').imagesLoaded().always(function () {
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

$('.masonryItemContainer').imagesLoaded().always(function () {
  console.log("Working")
  $masonryItemContainer.masonry();
});