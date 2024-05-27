function homeview1() {
    window.location.href = "produ1.html";
}
function homeview2() {
    window.location.href = "produ2.html";
}

function homeview3() {
    window.location.href = "produ3.html";
}
function homeview4() {
    window.location.href = "produ4.html";
}

function homeview5() {
    window.location.href = "produ5.html";
}



let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// config param
let countItem = items.length;
let itemActive = 0;

// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
// thumbnails.forEach((thumbnail, index) => {
//     thumbnail.addEventListener('click', () => {
//         itemActive = index;
//         showSlider();
//     })
// })

function navigateToOfficers() {
    window.location.href = "officers.html";
}

/* Responsive CSS slider */

let sliderUL = document.querySelector('.s-type-3 > .s-content');
let sliderLength = sliderUL.childElementCount;
let leftControl = document.querySelector('.s-type-3 .left-control');
let rightControl = document.querySelector('.s-type-3 .right-control');
let getCurrentIndex = () => Number(sliderUL.getAttribute('data-index'));
let setCurrentIndex = index => {
  console.log(index);
  sliderUL.setAttribute('data-index', index);
  sliderUL.style = `transform: translateX(-${(index - 1) * (100 / sliderLength)}%)`
}
let onControlClick = (direction) => {
  let index = getCurrentIndex();
  index = direction === 'left'
    ? (index === 1 ? sliderLength : index - 1)
    : (index === sliderLength ? 1 : index + 1)
  setCurrentIndex(index);
}

leftControl.addEventListener('click', () => onControlClick('left'));
rightControl.addEventListener('click', () => onControlClick('right'));










var carousel = document.querySelector('.carousel-inner');
                        var isPaused = false;

                        function pauseAnimation() {
                            isPaused = true;
                            carousel.style.animationPlayState = 'paused';
                        }

                        function resumeAnimation() {
                            isPaused = false;
                            carousel.style.animationPlayState = 'running';
                        }
// ---------------------------------------banner carousel-------------------------------------------








// var Slider = function(){
//   var slider,
//     activeSlide,
//     slides,
//     slideNavPrev,
//     slideNavNext,
//     slideNavThumbs;

//   var _init = function() {
//     slider = document.getElementById('slider');
//     slideContainer = document.querySelector('.slider__container');
//     activeSlide = document.querySelector('.is-active');
//     slides = document.querySelectorAll('.slider__item');
//     slides = Array.prototype.slice.call(slides, 0);
//     slideNavPrev = document.querySelector('.slider__prev');
//     slideNavNext = document.querySelector('.slider__next');
//     slideNavThumbs = document.querySelectorAll('.navThumbs__item');
//     slideNavThumbs = Array.prototype.slice.call(slideNavThumbs, 0);
//     slideWidth = parseInt(getComputedStyle(slideContainer).width);

//     _prepare();
//     _addEventHandlers();
//     _animateFirst();
//   }

//   var _addEventHandlers = function() {
//     slideNavNext.addEventListener('click', _goToNext);
//     slideNavPrev.addEventListener('click', _goToPrev);
//     slideNavThumbs.forEach(function(element) {
//       element.addEventListener('click', _goToClicked);
//     });
//   }

//   var _prepare = function() {
//     slides.forEach(function(element, index) {
//       if (index !== 0) {
//         TweenLite.set(element, { autoAlpha: 0 });
//       }
//     });
//     TweenLite.set(slideNavPrev, { autoAlpha: 0.2 });
//   }

//   var _animateFirst = function() {
//     var slideInTitle = activeSlide.querySelector('.slider__itemText').querySelector('.slider__itemTitle');
//     slideInTitle = new SplitText(slideInTitle);
//     var _resetTitle = function() {
//       slideInTitle.revert();
//     }

//     var tl = new TimelineLite({ onComplete: _resetTitle });
//     tl.staggerFromTo(slideInTitle.chars, 0.6, { opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: Back.easeOut }, { opacity: 1, scale: 1, y: 0, rotationX: 0 }, 0.03, '-=0.3');
//   }

//   var _animateNext = function(slideOut, slideIn) {
//     var slideOutTitle = slideOut.querySelector('.slider__itemText').querySelector('.slider__itemTitle');
//     var size = slides.length;

//     if (slideIn) {
//       var slideInTitle = slideIn.querySelector('.slider__itemText').querySelector('.slider__itemTitle');
//       var splitSlideInTitle = new SplitText(slideInTitle);
//       var _resetTitle = function() {
//         splitSlideInTitle.revert();
//       }

//       var tl = new TimelineLite({ onComplete: _resetTitle });
//       tl
//         .set(slideIn, { x: '100%', autoAlpha: 1, className: '+=is-active' })
//         .set(slideOut, { className: '-=is-active' })
//         .to(slideOutTitle, 0.3, { autoAlpha: 0, y: -50, ease: Power2.easeOut }, 0)
//         .to(slideOut, 0.9, { x: '-100%', ease: Power2.easeOut }, 0)
//         .to(slideIn, 0.9, { x: '-=100%', ease: Power2.easeOut }, 0)
//         .staggerFromTo(splitSlideInTitle.chars, 0.6, { opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: Back.easeOut }, { opacity: 1, scale: 1, y: 0, rotationX: 0 }, 0.03, '-=0.3');
//       if (Array.from(slides).indexOf(slideIn) === size - 1) {
//         TweenLite.to(slideNavNext, 0.3, { autoAlpha: 0.2, ease: Linear.easeNone, className: '-=is-active' });
//       }
//     }
//     TweenLite.set(slideNavPrev, { autoAlpha: 1, className: '+=is-active' });
//   }

//   var _goToNext = function() {
//     var slideOut = document.querySelector('.is-active');
//     var slideIn = slideOut.nextElementSibling;
//     _animateNext(slideOut, slideIn);
//   }

//   var _animatePrev = function(slideOut, slideIn) {
//     var slideOutTitle = slideOut.querySelector('.slider__itemText').querySelector('.slider__itemTitle');
//     var tl = new TimelineLite();

//     if (slideIn) {
//       var slideInTitle = slideIn.querySelector('.slider__itemText').querySelector('.slider__itemTitle');
//       var _resetTitle = function() {
//         splitSlideInTitle.revert();
//       }
//       var splitSlideInTitle = new SplitText(slideInTitle);
//       var tl = new TimelineLite({ onComplete: _resetTitle });
//       tl
//         .set(slideIn, { x: '-100%', autoAlpha: 1, className: '+=is-active' })
//         .set(slideOut, { className: '-=is-active' })
//         .set(slideInTitle, { y: 0, autoAlpha: 1 })
//         .to(slideOut, 0.9, { x: '100%', ease: Power2.easeOut }, 0)
//         .to(slideIn, 0.9, { x: '+=100%', ease: Power2.easeOut }, 0)
//         .staggerFromTo(splitSlideInTitle.chars, 0.8, { opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: Back.easeOut }, { opacity: 1, scale: 1, y: 0, rotationX: 0 }, 0.03, '-=0.3')
//       if (Array.from(slides).indexOf(slideIn) === 0) {
//         TweenLite.to(slideNavPrev, 0.3, { autoAlpha: 0.2, ease: Linear.easeNone, className: '-=is-active' });
//       }
//     }
//     TweenLite.set(slideNavNext, { autoAlpha: 1, className: '+=is-active' });
//   }

//   var _goToPrev = function() {
//     var slideOut = document.querySelector('.is-active');
//     var slideIn = slideOut.previousElementSibling;
//     _animatePrev(slideOut, slideIn);
//   }

//   var _goToClicked = function() {
//     var clickedSlide = slideNavThumbs.indexOf(this);
//     var slideOut = document.querySelector('.is-active');
//     var slideIn = slides[clickedSlide];
//     var siblings = Array.from(slideNavThumbs);
//     siblings.forEach(function(element) {
//       element.classList.remove('is-active');
//     })
//     if (clickedSlide > Array.from(slides).indexOf(slideOut)) {
//       this.classList.add('is-active');
//       _animateNext(slideOut, slideIn);
//     } else if (Array.from(slides).indexOf(slideOut) > clickedSlide) {
//       this.classList.add('is-active');
//       _animatePrev(slideOut, slideIn);
//     }
//   }

//   var handleKeyboardNav = function(e) {
//     if (!e) e = window.event;
//     var kc = e.keyCode;
//     if (kc == 37) _goToPrev();
//     if (kc == 39) _goToNext();
//   }

//   return {
//     init: _init
//   }
// }();

// Slider.init();




function aboutSection() {
    window.location.href = "about.html";
}
function navigateToStrategyPurpose() {
    window.location.href = "strategy.html";
}

function navigateToOfficers() {
    window.location.href = "officers.html";
}

function navigateToHistory() {
    window.location.href = "history.html";
}

function navigateToBrands() {
    window.location.href = "brands.html";
}

function navigateToConduct() {
    window.location.href = "conduct.html";
}

function navigateToLocations() {
    window.location.href = "locations.html";
}

function productsSection() {
    window.location.href = "products.html";
}
function industriesSection() {
    window.location.href = "industries.html";
}





// ------------------Building Better----------------

// function sustainability() {
//     window.location.href = "industries.html";
// }

// function innovation() {
//     window.location.href = "innovation.html";
// }

// function foundation() {
//     window.location.href = "foundation.html";
// }




