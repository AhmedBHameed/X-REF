'use strict';
var screenHiehgt,
screenWidth,
win = window,
doc = document;
function startAnimate(){
	// Portfolio Section
		$('.timeLine, .experience').timeLine({
			mainColor: '#D70000',
			opacity: '0.85',
			offset: '300',
			lineColor: '#FFF'
		});
	// Portfolio Section
}
$(win).load(function(e) {
	// Loading complete
	$('.loadingbg').show(0).delay(1500).fadeOut(2000, function(){
		$('html, body').css("overflow-y", "auto");
		$('.newBody').delay(500).fadeIn(2500, function(){
			startAnimate();
		});
	});
	// Loading complete

	// Header Section
		var headerImagesDivs = $("div.header-fade-in-img div");
		headerImagesDivs.first().next().delay(5500).animate({
			opacity: '1'
		}, 2000, function() {
			headerImagesDivs.last().animate({
				opacity: '1'
			}, 2000);
		});
    // Header Section
});
$(win).ready(function()
{
	// Header variables
	var	header 				= $('section.header'),
		screenHiehgt 		= $(window).height(),
		screenWidth  		= $(window).width(),
	// Navbar variables
		navBar 				= $(".navigation"),
		distanceNavbar		= screenHiehgt,
		windowScroll,
		logoNameGlence 		= $(".logo-name-glence"),
	// Triangle in the middle
		shiftLeft,
	// Carousel variables
		carousel 			= $('#mycarousel');
	

	$('<style id="dynamic" />').appendTo('head');
	
	// Loading complete
	$('.loadingbg').height(screenHiehgt);
	$('html, body').css("overflow", "hidden");
	// Loading complete


	// header section
		header.width(screenWidth)
		header.height(screenHiehgt);
	// header section

	// NavBar Section - Controlling scroll position and changing navbar position to FIXED
		function setNavPos(windowScroll)
		{
			if(windowScroll > distanceNavbar)
			{
				navBar.css({position: 'fixed', top: '0px',zIndex: '999', width: '100%'});
				logoNameGlence.css({paddingTop: navBar.height()});
			}else
			{
				navBar.css({position: 'relative',zIndex: '999'});
				logoNameGlence.css({paddingTop: '0px'});
			}
		}
	// NavBar Section - Controlling scroll position and changing navbar position to FIXED

	// Carousel Section
		carousel.hover(function(){
			carousel.carousel('pause');
		},function(){
			carousel.carousel('cycle');
		});
	// Carousel Section

	// Make background triangle in the middle
		// winWidth = document.getElementsByTagName("html")[0].offsetWidth;
		shiftLeft = (screenWidth- 140) / 2;
		$("#dynamic").text(".background:before, .background-2:before{left:"+shiftLeft+"px;"+"}");
	// Make background triangle in the middle




	// All events
		// On resize change header height and width
			$(win).on('resize', function(){
				screenHiehgt 	= $(this).height();
				screenWidth  	= $(this).width();
				header.width(screenWidth).height(screenHiehgt);
				distanceNavbar	= screenHiehgt;
				// Make background triangle in the middle
					// winWidth = document.getElementsByTagName("html")[0].offsetWidth;
					shiftLeft = (screenWidth- 140) / 2;
					$("#dynamic").text(".background:before, .background-2:before{left:"+shiftLeft+"px;"+"}");
				// Make background triangle in the middle
			});
		// On resize change header height and width

		// Scroll event to check navbar position
			$(win).scroll(function()
			{
				windowScroll = $(win).scrollTop();
				setNavPos(windowScroll);	
			});
		// Scroll event to check navbar position

		// Scroll Down when click on fa-angle-double-down
			$(".fa-angle-double-down").click(function()
			{
				$("html").animate({scrollTop : distanceNavbar}, 1500, 'swing');
			});
		// Scroll Down when click on fa-angle-double-down

	// All events






// Load all photos from folder
	function bringPortfolioImages(folder)
	{
		'use strict';
		$('body').append("<div class='gellary' style='display:none'><div class='close-btn'><i class='fa fa-times-circle-o fa-3x'></i></div><div class='myPortfolio'></div>");
		var gellary = $('.gellary'), closeBtn = $('.gellary i');
		var counter = 1;
		gellary.fadeIn(500,
			function()
			{
				$.ajax({
					    url : folder,
					    success: function (data) {
							console.log(data);
					        $(data).find("a").attr("href", function (i, val) {
					            if( val.match(/\.(jpe?g|png|gif|m4v|mp4)$/) ) { 
					                $('.gellary .myPortfolio').append(
					                 "<div class='col-md-2 margin-bottom'><a class='fancybox-thumb' rel='group-thumb' title='Image-"+counter+"'  alt='Image-"+counter+"' href='"+ folder + val +"'><img class='img-thumbnail' src='"+ folder + val +"'></div></a></div>" );
					                counter++;
					            }
					        });
					    }
					});
			});
		closeBtn.click(function()
		{
			gellary.fadeOut(500, function(){gellary.remove()});
			
		});
	}

	var electronics = $('.electronics'),
		laptopMaintenance = $('.laptopMaintenance');
	electronics.click(function()
	{
		'use strict';
		bringPortfolioImages("./img/portfolio/electronics/");
	});
	laptopMaintenance.click(function()
	{
		'use strict';
		bringPortfolioImages("./img/portfolio/LaptopMaintenance/");
	});
	// Gellary Section
		if($('section').hasClass('portfolio'))
		{
			$(".fancybox-thumb").fancybox({
					prevEffect	: 'fade',
					nextEffect	: 'fade',
					helpers	: {
						title	: {
							type: 'outside'
						},
						thumbs	: {
							width	: 100,
							height	: 80
						}
					}
				});
		}
	// Gellary Section
// Load all photos from folder

});