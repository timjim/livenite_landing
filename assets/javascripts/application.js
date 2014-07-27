$(function() {

  var section1Height = $('#section_1').height()

  $('#section_1').attr('data-0', 'background-color: rgb(1,25,63);');
  $('#section_1').attr('data-'+section1Height, 'background-color: rgb(0,0,0);');

  var s = skrollr.init({forceHeight: false});

  $('#section_2').waypoint(function() {
    console.log('hello');
  }, {
    offset: '20%'
  });

  $('#section_1').click(function() {
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top
    }, 1000);
  })

  $('#logo').addClass('fadeInDown animated');

  fadeInLoad('#about', 400);
  fadeInLoad('#usp_1', 600);
  fadeInLoad('#usp_2', 800);

  function fadeInLoad(el, delayTime) {
    $(el).addClass('hidden').delay(delayTime).queue(function(next){
      $(this).removeClass('hidden').addClass('fadeInDown animated').dequeue();
    });
  }
  
});