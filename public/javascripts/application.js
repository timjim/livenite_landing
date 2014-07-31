$(function() {

  $('#iphone_wrap').removeClass('relative');
  $('#iphone_wrap').addClass('fixed');

  hidden($('.screenshot'));

  var pageWidth = $('body').width()
  var section1Height = $('#section_1').height();
  var section4Height = $('#section_4').height();
  var section4Width = $('#section_4').width();
  
  if (pageWidth > 1024) {
    var yolo = '40px';
  } else if (pageWidth<=1024) {
    var yolo = '80px';
  }

  $('#iphone_wrap').css('top', yolo )

  $('#section_2').waypoint(function(direction) {
    if(direction==='down') {
      $('#section_1').animate({ backgroundColor: 'rgb(0,0,0)'}, { queue: false, duration: 'normal' });
    }else{
      $('#section_1').animate({ backgroundColor: 'rgb(1,25,63)'}, { queue: false, duration: 'normal' });
    }
  },{
    offset: '40%'
  });  

  if (pageWidth > 360) {
    $('#section_2').waypoint(function(direction) {
      if(direction==='down') {
        $('#fixed_header').css('opacity', 0).slideDown('normal').animate(
          { opacity: 1 },
          { queue: false, duration: 'normal' }
        );
        $('#iphone_wrap').animate({ top: '140px' },
          { duration: 'normal' });
        $('#cycle').fadeOut('slow', function(){
          $(this).addClass('hidden');
        });
        $('#cycle_2').fadeIn('slow', function(){
          $(this).removeClass('hidden');
        });
      }else{
        $('#fixed_header').css('opacity', 1).slideUp('normal').animate(
          { opacity: 0 },
          { queue: false, duration: 'normal' }
        );
        $('#iphone_wrap').animate({ top: yolo },
          { duration: 'normal' });
        $('#cycle_2').fadeOut('slow', function(){
          $(this).addClass('hidden');
        });
        $('#cycle').fadeIn('slow', function(){
          $(this).removeClass('hidden');
        });
      }
    }, {
      offset: '20%'
    });
  }

  $('#section_2').waypoint(function() {
    $('#cycle_2').cycle({ 
      fx:'scrollLeft',
      timeout:  4000 
    });
    },{
    offset: '15%',
    triggerOnce: true
  });

  $('#section_3').waypoint(function(direction) {
    if(direction==='down') {
      $('#cycle_2').fadeOut('slow', function(){
        $(this).addClass('hidden');
      });
      $('#cycle_3').fadeIn('slow', function(){
        $(this).removeClass('hidden');
      });
    }else{
      $('#cycle_3').fadeOut('slow', function(){
        $(this).addClass('hidden');
      });
      $('#cycle_2').fadeIn('slow', function(){
        $(this).removeClass('hidden');
      });
    }
  }, {
    offset: '20%'
  });

  $('#section_3').waypoint(function() {
    $('#cycle_3').cycle({ 
      fx:'scrollLeft',
      timeout:  4000 
    });
    },{
    offset: '15%',
    triggerOnce: true
  });

  $('#section_4').waypoint(function(direction) {
    if(direction==='down') {
      $('#iphone_wrap').animate({'top': '-=-800px'},'slow');
    }else{
      $('#iphone_wrap').animate({'top': '-=800px'},'slow');
    }
  }, {
    offset: '40%'
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
    $('#section_4 video').get(0).play();
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

  
  $('#test_video').attr('width', section4Width);
 
});