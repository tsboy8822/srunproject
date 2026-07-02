document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('is-open');
        nav.classList.remove('is-open');
      });
    });
  }

  var slider = document.getElementById('productSlider');
  if (slider) {
    var track = slider.querySelector('.slider-track');
    var slides = slider.querySelectorAll('.slide');
    var dots = slider.querySelectorAll('.dot');
    var prevBtn = slider.querySelector('.slider-arrow.prev');
    var nextBtn = slider.querySelector('.slider-arrow.next');
    var current = 0;
    var total = slides.length;
    var autoplayDelay = 5000;
    var timer = null;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = 'translateX(-' + current * 100 + '%)';
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === current);
      });
    }

    function next() {
      goTo(current + 1);
    }

    function prev() {
      goTo(current - 1);
    }

    function startAutoplay() {
      stopAutoplay();
      timer = setInterval(next, autoplayDelay);
    }

    function stopAutoplay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    nextBtn.addEventListener('click', function () {
      next();
      startAutoplay();
    });

    prevBtn.addEventListener('click', function () {
      prev();
      startAutoplay();
    });

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        goTo(parseInt(dot.dataset.index, 10));
        startAutoplay();
      });
    });

    goTo(0);
    startAutoplay();
  }
});
