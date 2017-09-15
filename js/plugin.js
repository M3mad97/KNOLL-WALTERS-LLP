/*global $, */
var scrollButton = $("#scroll-top");
$(document).ready(function(){

	$(".home .content").fadeIn(3000);

    /* Every time the window is scrolled ... */
    $(window).on("scroll", function() {
        var windowBottom = $(this).scrollTop();
        $(".practice-areas .aside-container, .practice-areas .main-container, .vision .container, .our-attorneys h5, .our-attorneys .container .thumbnail, .contact-us .aside-container, .contact-us main .main-container").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top;
      
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom = windowBottom) { //object comes into view (scrolling down)
            $(this).fadeIn(5000);
            } else { //object goes out of view (scrolling up)
            $(this).fadeOut(300);
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
    
            
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 650) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    scrollButton.click(function () {
        $("html,body").animate({scrollTop : 0}, 3000);
    });
    
})

