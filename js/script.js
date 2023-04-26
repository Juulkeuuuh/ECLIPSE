

$(document).ready(function(){
  var viewportWidth = $(window).width();
  // $(document).mousemove(function(event) {
  //   $('.blob').css({
  //     'left': event.pageX,
  //     'top': event.pageY
  //   });
  // });

  $(document).mousemove(function(event) {
    $('.blob').stop().animate({
      'left': event.pageX,
      'top': event.pageY
    }, 30, 'linear');
  });
  if (viewportWidth < 500) {
    $('.planet').css({
      'transition': 'all ease 1000ms',
      'width': '100vw',
    })
  } else {
    $('.planet').css({
      'transition': 'all ease 1000ms',
      'width': '50vw',
    })
  }


  setTimeout(function() {
    $('#mainLogo').css({
    'left': '5%'
  })
  }, 2000);
  setTimeout(function() {
    $('#mainScrib').css({
    'translate': '0 0'
  })
  }, 2500);
  setTimeout(function() {
    $('#mainDate').css({
    'left': '5%'
  })
  }, 2500);

  setTimeout(function() {
    $('.continue').css({
    'width': '300px'
   })
   $('.onTop').remove();
  }, 2500);



$('.beneath').click(function () {
    $('.planet').css({
    'width': '1000vw',
    'opacity': '0%'
  })

  setTimeout(function() {
    $('.loadLayer').css({
    'opacity': '0%'
  })
  }, 300);

  setTimeout(function() {
    $('.loadLayer').remove();
  }, 300);

})




})
