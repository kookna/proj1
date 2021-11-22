


// 상단이동 버튼
topEle1 = $('#topBtn');
delay1 = 500;
topEle1.on('click', function () {
	$('html').stop().animate({ scrollTop: 0 }, delay1);
});


// section1
var swiper = new Swiper(".sec1_slide", {
	loop: true,
	effect : 'fade',
	slidesPerView:'auto',
	speed : 1000,
	autoplay: {
	delay: 3000,
	disableOnInteraction: false,
	},
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	},
});


// section2
var swiper = new Swiper(".sec2_slide", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		979: { 
			slidesPerView: 3,
		},
		750: { 
			slidesPerView: 2,
		},
		490: { 
			slidesPerView: 1,
		},
	}
});

// section4
var swiper = new Swiper(".sec4_slide", {
	slidesPerView: 3,
	spaceBetween: 50,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		600: {
			slidesPerView: 1,
		},
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});

// section5 News
var swiper = new Swiper(".news_view", {
	direction: "vertical",
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 800,
	loop: true,
	mousewheel: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});