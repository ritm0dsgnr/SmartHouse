$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 600);
});

$(".burger").on("click", function(event) {
		$(".burger").toggleClass("active");
    $(".nav").toggleClass("active");
    $(".header").toggleClass("active");
    $(".nav__link").toggleClass("active");
    $("body").toggleClass("lock");
});

$(".nav__link").on("click", function(event) {
		$(".burger").removeClass("active");
    $(".nav").removeClass("active");
    $(".header").removeClass("active");
    $(".nav__link").removeClass("active");
    $("body").removeClass("lock");
});


new Swiper('.image-slider',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	slidesPerView: 3,
	loop:true,
	autoplay: {
		delay: 2500
	},

	breakpoints: {

		0: {
			slidesPerView: 1,
		},
		
		800: {
			slidesPerView: 2,
		},

		1400: {
			slidesPerView: 3,
		},
	}
});


var indicator = document.querySelector('.indicator');
var main__title = document.querySelector('.main__title');
var radio_btn = document.querySelector('.radio_btn');
var radio_fake = document.querySelector('.radio_fake');

var icon_1 = document.querySelector('#icon-1');
var icon_2 = document.querySelector('#icon-2');
var icon_3 = document.querySelector('#icon-3');
var icon_1_bg = document.querySelector('#icon-1-bg');
var icon_2_bg = document.querySelector('#icon-2-bg');
var icon_3_bg = document.querySelector('#icon-3-bg');


indicator.onclick = function(e) {
  main__title.classList.toggle('main__title_white');
};

radio_btn.onclick = function(e) {
  radio_fake.style.opacity = '1';
};

icon_1.onmouseover = function(e) {
  icon_1_bg.style.transform = 'rotateY(180deg)';
};

icon_1.onmouseout = function(e) {
  icon_1_bg.style.transform = 'rotateY(0deg)';
};

icon_2.onmouseover = function(e) {
  icon_2_bg.style.transform = 'rotateY(180deg)';
};

icon_2.onmouseout = function(e) {
  icon_2_bg.style.transform = 'rotateY(0deg)';
};

icon_3.onmouseover = function(e) {
  icon_3_bg.style.transform = 'rotateY(180deg)';
};

icon_3.onmouseout = function(e) {
  icon_3_bg.style.transform = 'rotateY(0deg)';
};

$('a').click(function () {});
$("a").removeAttr("href");

function onEntry(entry) {
  entry.forEach(change => {
  if (change.isIntersecting) {
      change.target.classList.add('anim-show');
  }
  else {
      change.target.classList.remove('anim-show');
  }
  });
  }
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.anim');

  for (let elm of elements) {
    observer.observe(elm);
  };
