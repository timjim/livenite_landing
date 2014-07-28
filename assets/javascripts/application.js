$(function() {

  var section1Height = $('#section_1').height()

  $('#section_1').attr('data-0', 'background-color: rgb(1,25,63);');
  $('#section_1').attr('data-'+section1Height, 'background-color: rgb(0,0,0);');

  var s = skrollr.init({forceHeight: false});

  $('#section_2').waypoint(function(direction) {
    if(direction==='down') {
      $('#fixed_header').css('opacity', 0).slideDown('slow').animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
      console.log('down');
    }else{
      $('#fixed_header').css('opacity', 1).slideUp('slow').animate(
        { opacity: 0 },
        { queue: false, duration: 'slow' }
      );
      console.log('up');
    }
  }, {
    offset: '20%'
  });

  $('.down:eq(0)').click(function() {
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top -100
    }, 1000);
  })

  $('.up:eq(0)').click(function() {
    $('html, body').animate({
      scrollTop: $("#section_1").offset().top
    }, 1000);
  })

  $('#slide').show();

  $('#cycle').cycle({ 
    fx:'scrollLeft',
    timeout:  4000 
  });

  fadeInLoad('#logo', 0, 'fadeInDown');
  fadeInLoad('#about', 400, 'fadeIn');
  fadeInLoad('.usp', 800, 'fadeIn');
  fadeInLoad('#downloads', 1000, 'fadeIn');
  fadeInLoad('#bottom', 1000, 'fadeIn');

  function fadeInLoad(el, delayTime, anim) {
    $(el).addClass('hidden').delay(delayTime).queue(function(next){
      $(this).removeClass('hidden').addClass(anim +' animated').dequeue();
    });
  };

  function animate($el, type) {
    $el.removeClass(type +' animated').addClass(type +' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass(type +' animated');
    });
  };
  
});