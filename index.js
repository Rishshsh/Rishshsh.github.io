$(document).ready(function(){
    $("li").hover(
      function() {
        $(this).find(".dropdown-content").slideDown(200);
      }, function() {
        $(this).find(".dropdown-content").slideUp(200);
      }
    );
});