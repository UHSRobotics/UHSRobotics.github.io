const scroll_observer = lozad('.scrollspy', {
  load: function (el) {

    if (!el.classList.contains("seen")) {
      delay = el.getAttribute('delay');
      if(delay === null){
        el.classList.add(el.getAttribute('data-scrollspy-class'));
      }else{
        el.style.opacity = "0"
        setTimeout(function () {
          el.classList.add(el.getAttribute('data-scrollspy-class'));
        }, el.getAttribute('delay'));
      }

      el.classList.add("seen");

      console.log("Lozad Scrollspy!")
    }
  }
});
scroll_observer.observe();