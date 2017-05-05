
console.log('app.js is loaded');

$(document).ready(function(){

  $(window).stellar({
    horizontalScrolling: false
  });

  $(window).scroll(function() {
    var windowScrollPosition = $(window).scrollTop();
    var opacityValue = (windowScrollPosition / 2.5)/100
    // var marginTopString = marginTopValue + 'px'
    console.log(opacityValue);


    if (windowScrollPosition < 10){
      $('header').css('background', 'rgba(255, 83, 21, .02)');
      // $('.march_image').css('height', marginTopString);
    } else {
      $('header').css('background', 'rgba(255, 83, 21,' +  opacityValue + ')');
      // $('.march_image').css('height', '167px');
    }
  });

  console.log('document ready function successful!');

});
