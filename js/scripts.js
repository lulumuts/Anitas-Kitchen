// $(document).ready(function() {
//        $("button#drinks").click(function() {
//       }
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    var menu = $("#navbar1").click(function() {
      $(".navbar1").slidetoggle();
    });
});

$('.text').hide().removeClass('text').addClass('text-js');

$('.thumb').hover(function(){
    $(this).find('.text-js').fadeToggle();
});
