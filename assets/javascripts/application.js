$(function() {

  $('#iphone_wrap').removeClass('relative');
  $('#iphone_wrap').addClass('fixed');
  $('#iphone_wrap').css('width', '24%');

  hidden($('.screenshot'));

  var section1Height = $('#section_1').height();
  var section2Height = $('#section_2').height();
  var section3Height = $('#section_3').height();
  var section4Height = $('#section_4').height();

  console.log(section1Height);
  console.log(section2Height);
  console.log(section3Height);
  console.log(section4Height);

  $('#section_1').attr('data-0', 'background-color: rgb(1,25,63);');
  $('#section_1').attr('data-'+section1Height, 'background-color: rgb(0,0,0);');
  $('#iphone_wrap').attr('data-0', 'top:40px;');
  $('#iphone_wrap').attr('data-'+section1Height, 'top:140px;');
  $('#iphone_wrap').attr('data-'+(section1Height+section2Height+section3Height), 'opacity:1;');
  $('#iphone_wrap').attr('data-'+(section1Height+section2Height+section3Height+section4Height), 'opacity:0;');

  var s = skrollr.init({forceHeight: false});

  $('#section_2').waypoint(function(direction) {
    if(direction==='down') {
      $('#fixed_header').css('opacity', 0).slideDown('normal').animate(
        { opacity: 1 },
        { queue: false, duration: 'normal' }
      );
    }else{
      $('#fixed_header').css('opacity', 1).slideUp('normal').animate(
        { opacity: 0 },
        { queue: false, duration: 'normal' }
      );
    }
  }, {
    offset: '20%'
  });

  hidden($('.about_2'));
  hidden($('.usp_2'));
  hidden($('#section_2 .down'));

  $('#section_2').waypoint(function() {
    unhide($('.about_2'));
    unhide($('.usp_2'));
    unhide($('#section_2'));
    fadeInLoad('.about_2', 0, 'fadeIn');
    fadeInLoad('.usp_2', 400, 'fadeIn');
    fadeInLoad('#section_2 .down', 800, 'fadeIn');
    },{
    offset: '40%',
    triggerOnce: true
  });

  hidden($('.about_3'));
  hidden($('.usp_3'));
  hidden($('#section_3 .down'));

  $('#section_3').waypoint(function() {
    unhide($('.about_3'));
    unhide($('.usp_3'));
    unhide($('#section_3'));
    fadeInLoad('.about_3', 0, 'fadeIn');
    fadeInLoad('.usp_3', 400, 'fadeIn');
    fadeInLoad('#section_3 .down', 800, 'fadeIn');
    },{
    offset: '40%',
    triggerOnce: true
  });

  hidden($('.about_4'));
  hidden($('#section_4 .up'));

  $('#section_4').waypoint(function() {
    unhide($('.about_4'));
    unhide($('#section_4'));
    fadeInLoad('.about_4', 0, 'fadeIn');
    fadeInLoad('#section_4 .up', 400, 'fadeIn');
    },{
    offset: '40%',
    triggerOnce: true
  });

  $('.down:eq(0)').click(function() {
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top
    }, 1000);
  })

  $('.down:eq(1)').click(function() {
    $('html, body').animate({
      scrollTop: $("#section_3").offset().top
    }, 1000);
  })

  $('.down:eq(2)').click(function() {
    $('html, body').animate({
      scrollTop: $("#section_4").offset().top
    }, 1000);
  })

  $('.up').click(function() {
    $('html, body').animate({
      scrollTop: $("#section_1").offset().top
    }, 1000);
  })

  unhide($('.slide'));
  unhide($('#section_1 .down'));
  unhide($('#fixed_header .up'));


  function unhide ($el) {
    $el.removeClass('hidden');
  }

  function hidden ($el) {
    $el.addClass('hidden');
  }

  $('#cycle').cycle({ 
    fx:'scrollLeft',
    timeout:  4000 
  });

  fadeInLoad('#logo', 0, 'fadeInDown');
  fadeInLoad('.about', 400, 'fadeIn');
  fadeInLoad('.usp', 800, 'fadeIn');
  fadeInLoad('#downloads', 1000, 'fadeIn');
  fadeInLoad('#bottom', 1000, 'fadeIn');
  fadeInLoad('#section_1 .down', 1000, 'fadeIn');
  fadeInLoad('#fixed_header .up', 1000, 'fadeIn');

  function fadeInLoad(el, delayTime, anim) {
    $(el).addClass('hidden').delay(delayTime).queue(function(next){
      $(this).removeClass('hidden').addClass(anim +' animated').dequeue();
    });
  };
 
});