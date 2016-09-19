// Creates button for dropdown navigation menu if screen size is smaller than 768 pixels.

var $button = $(".nav-svg");

 $button.click(function() {
    $(".header-links").slideToggle(500);
  });

// Scroll animation when links are clicked.

function scrollToPage($linkToScrollTo, $whereToScrollTo){
    $linkToScrollTo.click(function(){
		$("html, body").animate({scrollTop : $whereToScrollTo.offset().top
    }, 1000);
		return false;
	});
}

// Determines which link is being clicked, then passes those parameters to scrolling function above.

if($(".header-nav a").hasClass("portfolio") || $(".footer-nav li").hasClass("portfolio"))
  scrollToPage($(".portfolio"), $(".main-content"));
if($(".header-nav a").hasClass("contact"))
  scrollToPage($(".contact"), $(".contact-info"));
if($(".footer-nav li").hasClass("home"))
  scrollToPage($(".home"), $(".header-nav"));
if($(".to-top").click(scrollToPage($(".to-top"), $(".header-nav"))));