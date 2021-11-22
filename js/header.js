$(document).ready(function(){
		$('#full-page').fullpage({
			menu: '#fullmenu',
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6'],
			licenseKey: '',
			sectionColor: '',
			navigation: false,
			navigationPosition: 'left',
			responsiveWidth: 1441,

			//Section 이동 시 Header 에 class 추가
			onLeave: function (origin, destination, direction) {
				if (destination > 1 && destination < 7) {
					$('.header').addClass("on");
					
					$('.section [data-aos]').removeClass("aos-animate");
				} else if(destination==7){
					$('.section6 [data-aos]').addClass("aos-animate");
				}else if(destination==1){

					$('header.on').removeClass("on");
				}else {
					$('.header').removeClass("on");
					$('.section [data-aos]').removeClass("aos-animate");
				}
				
			},
			afterLoad: function () {
				$('.section.active [data-aos]').addClass("aos-animate");
			}
		})
		
	});

