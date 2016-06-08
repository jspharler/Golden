// Masonry settings to organize footer widgets
jQuery(document).ready(function($){
    var $container = $('.grid').masonry();
    enquire.register("screen and (min-width:880px)", {

        // Triggered when a media query matches.
        match : function() {
            $container.masonry({
                columnWidth: '.grid-sizer',
                gutterWidth: 5,
                itemSelector: '.grid-item',
                isFitWidth: true,
                percentPosition: true,
                isAnimated: true,
                transitionDuration: '0.8s'
            });
        },      

        // Triggered when the media query transitions 
        // *from a matched state to an unmatched state*.
        unmatch : function() {
            $container.masonry('destroy');
        }   
        
    }); 
});