// WHAT WE DO HOVER EFFECT
$(document).ready(function (){
   $(".design").click(function(){
     $(this).css("display", "none");
     $(".design-p").css("display", "flex");  
   });
   $(".design-p").click(function () {
     $(this).css("display", "none");
     $(".design").css("display", "initial");
   });

   $(".dev").click(function(){
     $(this).css("display", "none");
     $(".dev-p").css("display", "flex");
   });
   $(".dev-p").click(function () {
    $(this).css("display", "none");
    $(".dev").css("display", "initial");
  });

  $(".product").click(function(){
    $(this).css("display", "none");
    $(".product-p").css("display", "flex");  
  });
  $(".product-p").click(function () {
    $(this).css("display", "none");
    $(".product").css("display", "initial");
  });


  //HOVER EFFECT FOR PORTFOLIO
  $("#work1").mouseenter(function () {
    $("#work1-layout").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work1").mouseleave(function () {
    $("#work1-layout").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 40% 40%)"
    );
  });

  $("#work2").mouseenter(function () {
    $("#work2-layout").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work2").mouseleave(function () {
    $("#work2-layout").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 40% 40%)"
    );
  });
  
  $("#work3").mouseenter(function () {
    $("#work3-layout").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work3").mouseleave(function () {
    $("#work3-layout").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 40% 40%)"
    );
  });
  
  $("#work4").mouseenter(function () {
    $("#work4-layout").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work4").mouseleave(function () {
    $("#work4-layout").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 40% 40%)"
    );
  }); 
  
  $("#work5").mouseenter(function () {
    $("#work5-layout").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work5").mouseleave(function () {
    $("#work5-layout").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 40% 40%)"
    );
  });
  
  $("#work6").mouseenter(function () {
    $("#work6-layout").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work6").mouseleave(function () {
    $("#work6-layout").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 40% 40%)"
    );
  });
  
  $("#work7").mouseenter(function () {
    $("#work7-layout").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work7").mouseleave(function () {
    $("#work7-layout").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 40% 40%)"
    );
  }); 
  
  $("#work8").mouseenter(function () {
    $("#work8-layout").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work8").mouseleave(function () {
    $("#work8-layout").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 40% 40%)"
    );
  });  

});

