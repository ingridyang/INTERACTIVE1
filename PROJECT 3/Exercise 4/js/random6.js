$( document ).ready(function() {

  // var headsize = Math.random() * 8;

  var number = 1 + Math.floor(Math.random() * 5);

  // $('h1').css(
  //   "font-size",headsize
  // );

  $(".parallax").css("background-image", "url('images/computerdesk"+number+".jpg')");

});
