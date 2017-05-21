function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slider_images = document.querySelectorAll('.slide-in');

function check_slide(e) {
  slider_images.forEach(image => {
    const slide_in_at = (window.scrollY + window.innerHeight) - (image.height / 2);
    const image_bottom = image.offsetTop + image.height;
    const is_half_shown = slide_in_at > image.offsetTop;
    const is_not_scrolled_past = window.scrollY < image_bottom;
    if (is_half_shown && is_not_scrolled_past) {
      image.classList.add('active');
    } else {
      image.classList.add('active');
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide));
