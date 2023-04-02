

$(document).ready(function(){

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

})
