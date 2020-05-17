var $masonryItemContainer = $('.masonry-item-container').masonry({
  itemSelector: '.masonry-item',
  percentPosition: true,
  columnWidth: '.masonry-sizer',
  gutter: 5
});

$masonryItemContainer.masonry();