$(document).ready(function (){

   // var scroll_start = 0;
   // var startchange = $('#skills');
   // var offset = startchange.offset();

  $(".nav li").click(function(){
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });

  // if (startchange.length){
  //  $(document).scroll(function() { 
  //     scroll_start = $(this).scrollTop();
  //     if(scroll_start > offset.top) {
  //         $(".navbar-default").css('background-color', '#020731');
  //       }
  //      // } else {
  //      //    $('.navbar-default').css('background-color', 'transparent');
  //      // }
  //  });
  // }

});

