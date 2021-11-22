// 사이트맵
$(function(){
	$('header .gbt_menu').click(function(){
		$('.site_map').addClass('on')
	});
	$('.site_map .close').click(function(){
		$('.site_map').removeClass('on')
	});
});

//header 배경



// header 언어변경
$(function () {
	$('header .lang > ul').click(function () {
		$('header .lang > ul > li > ul').fadeToggle()
	})
});





// 상단이동 버튼
topEle1 = $('#topBtn');
delay1 = 500;
topEle1.on('click', function () {
	$('html').stop().animate({ scrollTop: 0 }, delay1);
});







$(window).on("load resize", function () {
	$('body').attr('data-mobile',
		(function(){
			var r = ($(window).width() <= 1440) ? true : false;
			return r;
		}())
	);
}).resize();



$(window).on("load resize", function () {
	$('body').attr('data-phone',
		(function(){
			var r = ($(window).width() <= 768) ? true : false;
			return r;
		}())
	);
}).resize();


/* ----------------------------------------
	GNB
---------------------------------------- */

$(function() {
	var Wrap = $('.wrap');
	var headerWrap = $('.header-wrap');
	var gnb = $('#gnb');
	var gnbLink = $('#gnb > ul > li > span > a');
	var gnb1dep = $('#gnb > ul > li ');

	$(window).resize(function(){
		if ($('body').attr('data-mobile') == 'false'){
			$(gnb).removeClass('js-open-m').find("li").removeClass('js-open-m');
			$('.gnb-dimmed').removeClass('js-open-m');
		} else {
			$(gnb).removeClass('js-open-d').find("li").removeClass('js-open-d');
			$('.header-wrap').removeClass('js-open-d js-hover');
			$('.gnb-dimmed').removeClass('js-open-d');
		}
	});

	$(gnbLink).on("click mouseenter focus touchstart",function(e) {
		if ($('body').attr('data-mobile') == 'false') {
			$('.header-wrap').addClass('js-open-d js-hover');
			$('.gnb-dimmed').addClass('js-open-d');

			if (!$(this).parents("li").hasClass("js-open-d")) {
					$(gnb).addClass('js-open-d');
					$(this).parents("li").addClass("js-open-d").siblings("li").removeClass("js-open-d");

				if ($(this).next('ul').hasClass('gnb-2dep')) {
					$(this).addClass('is-2depth').parents("li").siblings("li").children("a").removeClass("is-2depth");
				}

//				if (gnbState === 0) {
//					$(this).parents("li").addClass("js-first");
//					gnbState = 1;
//				}
//			} else {
//				$(gnb).removeClass('js-open-d');
//				$(this).parents("li").removeClass("js-open-d");
//			}
//			if(e.type == "touchstart") {
//				return false;
			}
		} else {
			if(e.type == "click"){
				e.preventDefault();
				if ($(this).parents('li').hasClass('js-open-m')) {
					$(this).parents('li').removeClass('js-open-m');
					$(this).next().slideUp(300);
				} else {
					$(this).parents('li').addClass('js-open-m');
					$(this).parents('li').siblings().removeClass('js-open-m');
					$(this).parents('li').siblings().children('ul').slideUp(300);
					$(this).next().slideDown(300);

				}





			}
		}
	});

	$(gnb1dep).on("mouseenter focus touchstart",function(e) {
		if ($('body').attr('data-mobile') == 'false') {
			$('.wrap').addClass('on');

			if (!$(this).hasClass("js-open-d")) {
				$(gnb).addClass('js-open-d');
				$(this).addClass("js-open-d").siblings("li").removeClass("js-open-d");

			}
		}
	});


	$(gnb).on("mouseleave",function() {
		$(Wrap).removeClass('on');
		$(headerWrap).removeClass('js-hover');
		$(headerWrap).removeClass('js-open-d');
		$('.gnb-dimmed').removeClass('js-open-d');
		$(this).removeClass('js-open-d');
		//$(gnb).find("[class$=tit]").stop().animate({height:'0'},300);
		$(this).find('li').removeClass('js-open-d js-first');
		gnbState = 0;
	});


	$(gnb).find("a").last().on("blur",function() {
		$(gnb).trigger("mouseleave");
	});
	$('.newAllmenu-open, .gnb-dimmed, .gnb-mbtn-close').on("click" ,function(){
		if ($('body').attr('data-mobile') == "false") return false;
		if (!$(gnb).hasClass("js-open-m")) {
			$('.gnb-dimmed').addClass('js-open-m');
			$(gnb).addClass('js-open-m').fadeIn(300);
			$('.header__top').addClass('js-open-m');
		} else {
			$(gnb).removeClass('js-open-m');
			$('.gnb-dimmed').removeClass('js-open-m');
			$('.header__top').removeClass('js-open-m');
		}
	});

	// Focus
	$('.header__search-open, .header-logo a').on("focus",function() {
		$(gnb).removeClass('js-open-d');
		$(gnb).find('li').removeClass('js-open-d');
	});

});


$(function() {

	var mGnbLink = $('.site_map .list_grup > ul > li h2');
	var mGnb2dep = $('.site_map .list_grup > ul > li > ul');


	$(window).on('load resize',function(){
		if ($('body').attr('data-mobile') == 'false') {
			$(mGnb2dep).css('display','flex');
		} else {
			$(mGnb2dep).css('display','none');
		}
	});



	$(mGnbLink).on("click mouseenter focus touchstart",function(e) {
		if ($('body').attr('data-mobile') == 'false') {

		} else {
			if(e.type == "click"){
				e.preventDefault();
				if ($(this).parent().parent().parent().hasClass('js-open-m')) {
					$(this).parent().parent().parent().removeClass('js-open-m');
					$(this).next("ul").slideUp(300);
				} else {
					$(this).parent().parent().parent().addClass('js-open-m');
					$(this).parent().parent().parent().siblings().removeClass('js-open-m');
					$(this).parent().parents().parent().siblings().children().children().children('ul').slideUp(300);
					$(this).next("ul").slideDown(300);

				}

			}
		}
	});


});


$(window).on('load resize scroll',function(){
	var w_top = $(window).scrollTop();
	if ( w_top > 100 ) {
		$("header").addClass("on");
	}else {
		$("header").removeClass("on");
	}

});







/* checkbox checked */
$(function(){
	$(".checkbox-label").click(function(){
		var thisCheckd = $(this).find(".checkbox-obj").is(":checked");
		if(thisCheckd){
			$(this).addClass("checkbox-on");
		}else{
			$(this).removeClass("checkbox-on");
		}
	});
});




// Breadcrumb
$(function(){
	var crumbBtn = $(".lnb-link");
	$(crumbBtn).each(function(){
		var _this = $(this);
		_this.attr("tabindex","0");
		_this.on("click keypress",function(e){
			e.stopPropagation();
			e.preventDefault();
			if ((e.keyCode == 13)||(e.type == 'click')) {
				if ($(this).next().hasClass("js-active")) {
					$(this).next().removeClass("js-active").slideUp(300);
					$(this).removeClass("js-active");
					$(this).attr("title", "메뉴 열기");
				} else {
					$(crumbBtn).next().removeClass("js-active").slideUp(300);
					$(crumbBtn).removeClass("js-active");
					$(crumbBtn).attr("title", "메뉴 열기");
					$(this).next().addClass("js-active").slideDown(300);
					$(this).addClass("js-active");
					$(this).attr("title", "메뉴 닫기");
				}
			}
		});
	});
	$("body").on("click",function(e){
		//e.stopPropagation();
		if ($(crumbBtn).next().hasClass("js-active")) $(crumbBtn).next().removeClass("js-active").slideUp(300);
		if ($(crumbBtn).hasClass("js-active")) $(crumbBtn).removeClass("js-active").attr("title", "메뉴 열기");

	});
	var Fout = $(".lnb__menu-list li:last-child > a");
	$(Fout).on("blur",function(e){
		if ($(crumbBtn).next().hasClass("js-active")) $(crumbBtn).next().removeClass("js-active").slideUp(300);
		if ($(crumbBtn).hasClass("js-active")) $(crumbBtn).removeClass("js-active").attr("title", "메뉴 열기");
	});
});




// top 버튼
$(window).on('load resize scroll',function(){
	if ($(this).scrollTop() > 100) {
		$('.footer-top').fadeIn();
	} else {
		$('.footer-top').fadeOut();
	}
	var footerPos=$("footer").position().top;

	if(footerPos<$(window).scrollTop()+$(window).height()){
		$(".footer-top").addClass("on");
	}else {
		$(".footer-top").removeClass("on");
	}
});


$(document).ready(function(){
	//말줄임
	$('.js-dot').dotdotdot({
		watch: true,
		wrap : 'letter'
	});

	$(".footer-top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });



});



$(window).on('load resize',function(){
	var svisual_W = $('.sub_visual-bg.nth-1').width();
	$('.sub_visual-bg.nth-1').css({
		'height'	:	svisual_W + 'px',
	});
});

$(document).ready(function() {


});
// 높이 맞춤
$(window).on('load resize',function(){

	setTimeout(function() {


	}, 1000);

	$('.res__box-cols').matchHeight({
		byRow: true,
		property: 'height',
		//target: $('.ci__box.type1')
	});

	$('.excenter-cona').matchHeight({
		byRow: true,
		property: 'height',
		//target: $('.ci__box.type1')
	});

	$('.character__list .item .desc').matchHeight({
		byRow: true,
		property: 'height',
		//target: $('.ci__box.type1')
	});

});



$(window).on('load resize',function(){
	var resStepW = $('.res__step .item').width();
	$('.res__step .item').css({
		'height'	:	resStepW + 'px',
	});


	var introInfoW = $('.introduce__info-cols .item p').width();
	$('.introduce__info-cols .item p').css({
		'height'	:	introInfoW + 'px',
		'line-height'	:	introInfoW + 'px',
	});
});



$(document).ready(function(){
	$('.excenter-photo .list').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: $('.excenter-photo .prev'),
	nextArrow: $('.excenter-photo .next'),
	autoplay: true,
	autoplaySpeed:5000,
	speed: 1000,
	asNavFor: '.excenter-top .list, .excenter-desc .list'
	});

	$('.excenter-desc .list').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	dots: false,
	asNavFor: '.excenter-top .list, .excenter-photo .list'
	});




	$('.excenter-top .list').slick({
	asNavFor: '.excenter-photo .list, .excenter-desc .list',
	dots: false,
	centerMode: true,
	slidesToShow: 2,
	infinite: true,
	prevArrow: $('.excenter-top .prev'),
	nextArrow: $('.excenter-top .next'),
	focusOnSelect: true,
	variableWidth: true,
	centerPadding: '40px'
	//useTransform: false
	});
});