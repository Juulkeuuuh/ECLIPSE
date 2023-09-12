

$(document).ready(function(){
  var viewportWidth = $(window).width();


// moving blob
  var lastMouseX = null;
  var lastMouseY = null;
  var requestId = null;
  
  $(document).mousemove(function(event) {
    lastMouseX = event.pageX;
    lastMouseY = event.pageY;
    
    if (!requestId) {
      requestId = window.requestAnimationFrame(updateBlobPosition);
    }
  });
  
  function updateBlobPosition() {
    $('.blob').css({
      'left': lastMouseX,
      'top': lastMouseY
    });
    
    requestId = null;
  }



// intro
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
    'width': '10vw',
    'opacity': '0%'
  })

  setTimeout(function() {
    $('.planet').css({
      'width': '1000vw',
      // 'opacity': '0%'
    })
  }, 150);
  
  setTimeout(function() {
    $('.loadLayer').css({
    'opacity': '0%'
  })
  }, 300);

  setTimeout(function() {
    $('.loadLayer').remove();
  }, 500);

})


// var eventWindowLeft = viewportWidth - 310;
// console.log(viewportWidth, eventWindowLeft);
// $('.eventWindowLeft').css({
//   'width': eventWindowLeft
// })



$('.eventOverlay').css({
  'display': 'none'
})
$('.eventWindowLeft').css({
  'translate': '-100% -50%'

})
$('.eventWindowRight').css({
  'translate': '100% -50%'
})



$('.event h1').click(function () {

  $('.eventOverlay').css({
    'display': 'block',
  })

  setTimeout(function() {
    $('.eventWindowLeft').css({
      'translate': '0 -50%'
  
    })
    $('.eventWindowRight').css({
      'translate': '0 -50%'
    })
  }, 500);
})

$('.close').click(function () {

  $('.eventWindowLeft').css({
    'translate': '-100% -50%'

  })
  $('.eventWindowRight').css({
    'translate': '100% -50%'
  })

  setTimeout(function() {
    $('.eventOverlay').css({
      'display': 'none',
    })
    console.log('works');
  }, 2000);
})

})
