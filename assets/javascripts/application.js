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

  $('.down:eq(0)').click(function() {
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top
    }, 1000);
  })

  fadeInLoad('#logo', 0, 'fadeInDown');
  fadeInLoad('#about', 600, 'fadeIn');
  fadeInLoad('#usp_1', 600, 'fadeIn');
  fadeInLoad('#usp_2', 600, 'fadeIn');
  fadeInLoad('#downloads', 800, 'fadeIn');
  fadeInLoad('.down:eq(0)', 800, 'fadeIn');

  function fadeInLoad(el, delayTime, anim) {
    $(el).addClass('hidden').delay(delayTime).queue(function(next){
      $(this).removeClass('hidden').addClass(anim +' animated').dequeue();
    });
  };
  
});