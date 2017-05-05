
console.log('app.js is loaded');

$(document).ready(function(){

  $(window).stellar({
    horizontalScrolling: false
  });

  $(window).scroll(function() {
    var windowScrollPosition = $(window).scrollTop();
    var opacityValue = (windowScrollPosition / 2.5)/100

    if (windowScrollPosition < 10){
      $('header').css('background', 'rgba(255, 83, 21, .02)');
    } else {
      $('header').css('background', 'rgba(255, 83, 21,' +  opacityValue + ')');
    }
  });

});
