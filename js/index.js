<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>

$(document).ready(function (){
  $(".nav li").click(function(){
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });

});

</script>

/* ADD THIS BACK IN LATER



$(document).ready(function (){
  $("#home-link").click(function(){
    $('html, body').animate({
      scrollTop: $("#home").offset().top}, 2000);
    });
  
    $("#portfolio-link").click(function(){
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top}, 2000);
    });
  
    $("#social-link").click(function(){
    $('html, body').animate({
      scrollTop: $("#social").offset().top}, 2000);
    });
  });
  */

