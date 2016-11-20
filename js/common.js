$(document).ready(function() {

	function highDetect(){
		$(".main-head").css("height",$(window).height());
	}
	highDetect();
	$(window).resize(function(){
		highDetect();
	});

	$(".sandwich").click(function() {
		  $(".sandwich").toggleClass("active");
		});

	$(".sandwich").click(function(){
		if($(".main-nav").is(":visible")){
			$(".top-text").removeClass("descrease-opacity");
			$(".main-nav").fadeOut(600);
			$(".main-nav li a").removeClass("fadeInUp animated");
		} else {
			$(".top-text").addClass("descrease-opacity")
			$(".main-nav").fadeIn(600)
			$(".main-nav li a").addClass("fadeInUp animated")
		};
	});

	$(".main-nav li a").click(function(){
		$(".sandwich").toggleClass("active");
		$(".main-nav").fadeOut(400);
		$(".main li a").removeClass("fadeInUp animated")
		$(".top-text").removeClass("descrease-opacity");
	});

	function toggleMenuPosition(){

		var neededWidth = (($(window).width() - $(".container").width()))/2;

		$("div.sandwich").css("right",neededWidth+"px")
		}

		toggleMenuPosition();
		$(window).resize(function() {
				toggleMenuPosition();
		});

		$('.author-photo-popup').magnificPopup({type: 'image'});
		$('.portfolio-item-description a').magnificPopup({type:'inline', midClick: true});

		$('.portfolio-nav li').click(function(){
			$('.portfolio-nav li').removeClass("a-active");
			$(this).addClass("a-active");
		});

		$('.portfolio-item').each(function(i){
			$(this).find("a").attr("href","#work-"+i);
			$(this).find(".portfolio-item-popup").attr("id","work-"+i);
		});

		$("#portfolio").mixItUp();

		$('.main-form').validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
					minlength: 2
				}
			},
			messages: {
				name: "Пожалуйста, введите Ваше имя",
				email: {
					required: "Пожалуйста, введите Ваш E-mail",
					email: "Пожалуйста, введите Ваш действительный электронный адрес"
				},
				message: {
					required: "Пожалуйста, оставьте Ваше сообщение",
					minlength: "Длина сообщения должна составлять более 2 символов"
				}
			}
		});
});

$(window).load(function() {
	$("#loaderInner").fadeOut();
	$("#loader").delay(400).fadeOut("slow");

	$(".top-text h1").animated("fadeInDown");
	$(".top-text p").animated("fadeInUp");
});
