$(document).ready(function(){
    $(".mobile-menuicon").click(function(){
        $(".mobile-menu").css("left", "0");  // Menu को दिखाने के लिए
    });

    $(".close-menu").click(function(){
        $(".mobile-menu").css("left", "-100%");  // Menu को छुपाने के लिए
    });

    // Menu के बाहर क्लिक करने पर भी बंद करने का ऑप्शन
    $(document).click(function(event) {
        if (!$(event.target).closest('.mobile-menu, .mobile-menuicon').length) {
            $(".mobile-menu").css("left", "-100%");
        }
    });
});
// Hero Section Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 2000,
        arrows: true,
        pagination: false,
    }).mount();
});
 // काउंटर फ़ंक्शन
 function startCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const speed = 200; // जितना छोटा उतना तेज़
    const increment = Math.ceil(target / speed);

    let count = 0;
    
    const updateCounter = () => {
      if (count < target) {
        count += increment;
        if (count > target) count = target; // लिमिट सेट करना
        counter.textContent = count;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  }

  // स्क्रॉल पर काउंटर स्टार्ट
  function checkScroll() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const rect = counter.getBoundingClientRect();
      if (rect.top < window.innerHeight && !counter.classList.contains('started')) {
        counter.classList.add('started');
        startCounter(counter);
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll);  // लोड पर भी चेक करें
// testimonials slide

document.addEventListener("DOMContentLoaded", function () {
    new Splide("#testimonials_splide", {
      type: "loop",
      perPage: 3, // Default for desktop
      autoplay: true,
      arrows: false,
        pagination: false,
      breakpoints: {
        768: {
          perPage: 1, // For screens 768px or smaller
        },
      },
    }).mount();
  });