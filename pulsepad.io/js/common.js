$(function() {

	$(".animation_1").animated("fadeIn", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	//скролл на айди
   $('.mnu  a').on('click', function(event){
		event.preventDefault();
		var hr = $(this).attr('href');
		$('body, html').animate({scrollTop : $(hr).offset().top - 80} ,1000);
		
		//закрыть меню на моб при клике
		var ww = $(window).width();
		if(ww < 991){
			$(".sandwich").removeClass("active");
			$('.mnu').hide();
		}	
	})

   $(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		$(this).toggleClass("active");
		$('.mnu').toggle();
	});

   $(window).on('scroll', function(){
		var sc = $(this).scrollTop();
		if(sc > 0){
			$('.header').addClass('fixed')
		}else{
			$('.header').removeClass('fixed')
		}
	})

	//параллакс по движению мыши
	let bg1 = document.querySelector('.top-box .uz1');
	let bg2 = document.querySelector('.top-box .uz2');
	let bg3 = document.querySelector('.about-box .bx1 .ico img');
	let bg4 = document.querySelector('.about-box .bx2 .ico img');
	let bg5 = document.querySelector('.about-box .bx3 .ico img');
	//let bg6 = document.querySelector('.about-text-box .wr .img');
	let bg7 = document.querySelector('.apply-box .uz1');
	let bg8 = document.querySelector('.apply-box .uz2');
		window.addEventListener('mousemove', function(e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;  
		bg1.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg2.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg3.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg4.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg5.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		//bg6.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg7.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg8.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
	});


});