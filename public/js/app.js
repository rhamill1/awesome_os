
console.log('app.js is loaded');

$(document).ready(function(){

  $('#johnny').click(function() {
    $('.leadership-large').html(
      "<img src='/images/13_Square.jpeg'> \
      <div class='leadership-large-content'> \
        <h3>Johnny</h3> \
        <h5>CEO</h5> \
        <p>Chutney garden beet eu brined seed orci lorem tomatillo vegan whole pasture raised. Peppers squash whey fed farm brined. Brined orchard peppers farm raw milk orci unpasteurized gluten free raw natural raw free range figs produce dill. Cabbage sit medley rustic ramps cured peppers. Seed dill raw milk natural farm fair trade. Cage less pasture raised pasture raised dolor lorem lorem dill grain vegan persimmon chutney cabbage. Lorem gluten free whey dolor figs figs ramps fermented canned produce.</p> \
      </div>"
    )
  });

  $('#ryan').click(function() {
    $('.leadership-large').html(
      "<img src='/images/14_Square.jpeg'> \
      <div class='leadership-large-content'> \
        <h3>Ryan</h3> \
        <h5>CFO</h5> \
        <p>Chutney garden beet eu brined seed orci lorem tomatillo vegan whole pasture raised. Peppers squash whey fed farm brined. Brined orchard peppers farm raw milk orci unpasteurized gluten free raw natural raw free range figs produce dill. Cabbage sit medley rustic ramps cured peppers. Seed dill raw milk natural farm fair trade. Cage less pasture raised pasture raised dolor lorem lorem dill grain vegan persimmon chutney cabbage. Lorem gluten free whey dolor figs figs ramps fermented canned produce.</p> \
      </div>"
    )
  });

  $('#matt').click(function() {
    $('.leadership-large').html(
      "<img src='/images/15_Square.jpeg'> \
      <div class='leadership-large-content'> \
        <h3>Matt</h3> \
        <h5>CTO</h5> \
        <p>Chutney garden beet eu brined seed orci lorem tomatillo vegan whole pasture raised. Peppers squash whey fed farm brined. Brined orchard peppers farm raw milk orci unpasteurized gluten free raw natural raw free range figs produce dill. Cabbage sit medley rustic ramps cured peppers. Seed dill raw milk natural farm fair trade. Cage less pasture raised pasture raised dolor lorem lorem dill grain vegan persimmon chutney cabbage. Lorem gluten free whey dolor figs figs ramps fermented canned produce.</p> \
      </div>"
    )
  });

  $('#sam').click(function() {
    $('.leadership-large').html(
      "<img src='/images/16_Square.jpg'> \
      <div class='leadership-large-content'> \
        <h3>Sam</h3> \
        <h5>Lead</h5> \
        <p>Chutney garden beet eu brined seed orci lorem tomatillo vegan whole pasture raised. Peppers squash whey fed farm brined. Brined orchard peppers farm raw milk orci unpasteurized gluten free raw natural raw free range figs produce dill. Cabbage sit medley rustic ramps cured peppers. Seed dill raw milk natural farm fair trade. Cage less pasture raised pasture raised dolor lorem lorem dill grain vegan persimmon chutney cabbage. Lorem gluten free whey dolor figs figs ramps fermented canned produce.</p> \
      </div>"
    )
  });

  $('#nykki').click(function() {
    $('.leadership-large').html(
      "<img src='/images/17_Square.jpg'> \
      <div class='leadership-large-content'> \
        <h3>Nykki</h3> \
        <h5>CMO</h5> \
        <p>Chutney garden beet eu brined seed orci lorem tomatillo vegan whole pasture raised. Peppers squash whey fed farm brined. Brined orchard peppers farm raw milk orci unpasteurized gluten free raw natural raw free range figs produce dill. Cabbage sit medley rustic ramps cured peppers. Seed dill raw milk natural farm fair trade. Cage less pasture raised pasture raised dolor lorem lorem dill grain vegan persimmon chutney cabbage. Lorem gluten free whey dolor figs figs ramps fermented canned produce.</p> \
      </div>"
    )
  });

  $('#sal').click(function() {
    $('.leadership-large').html(
      "<img src='/images/18_Square.jpeg'> \
      <div class='leadership-large-content'> \
        <h3>Sal</h3> \
        <h5>Analyst</h5> \
        <p>Chutney garden beet eu brined seed orci lorem tomatillo vegan whole pasture raised. Peppers squash whey fed farm brined. Brined orchard peppers farm raw milk orci unpasteurized gluten free raw natural raw free range figs produce dill. Cabbage sit medley rustic ramps cured peppers. Seed dill raw milk natural farm fair trade. Cage less pasture raised pasture raised dolor lorem lorem dill grain vegan persimmon chutney cabbage. Lorem gluten free whey dolor figs figs ramps fermented canned produce.</p> \
      </div>"
    )
  });




  var path = $(location).attr('href')

  if (path.includes('about') || path.includes('contact') || path.includes('email')) {
    var colorHeaderPage = true;
  } else {
    var colorHeaderPage = false;
  };

  if (colorHeaderPage == true){
    return;
  } else {

    $('header').css('background', 'rgba(255, 83, 21, .02)');

    $(window).scroll(function() {
      var windowScrollPosition = $(window).scrollTop();
      var opacityValue = (windowScrollPosition / 4.1)/100

      if (windowScrollPosition < 10){
          $('header').css('background', 'rgba(255, 83, 21, .02)');
        } else {
          $('header').css('background', 'rgba(255, 83, 21,' +  opacityValue + ')');
      }
    });
  };



  $(window).scroll(function() {
    var windowScrollPosition = $(window).scrollTop();
    var marginTopValue = windowScrollPosition * 1.01
    var marginTopString = marginTopValue + 'px'

    $('.parallex-index').css('padding-top', marginTopString);
  });




});
