$(document).ready(function(){
    // Дополнительные скрипты jQuery (например, анимация)
    $("li").hover(
      function() {
        $(this).find(".dropdown-content").slideDown(200); // Выпадающее меню с анимацией
      }, function() {
        $(this).find(".dropdown-content").slideUp(200);
      }
    );
});