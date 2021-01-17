
     $(document).ready(function(){
         $('.slider').slick({
             
             arrows:false,
             autoplay: false,
             slidesToShow: 3,
             adaptiveHeight: true,
             responsive: [{
                 breakpoint: 768,
                 settings: {
                 slidesToShow: 1,
                 infinite: false,
                 
             }
                 }, {
                 breakpoint: 451,
                 settings: {
                 slidesToShow: 1,
                 infinite: false,
                 }
             }]
         });
     });



var cards = $('.card-body');
var maxHeight = 0;

for (var i = 0; i < cards.length; i++) {
if (maxHeight < $(cards[i]).outerHeight()) {
maxHeight = $(cards[i]).outerHeight();
}
}

for (var i = 0; i < cards.length; i++) {
$(cards[i]).height(maxHeight);
}