$(document).ready(function(){
    $("li").hover(
      function() {
        $(this).find(".dropdown-content").slideDown(200);
      }, function() {
        $(this).find(".dropdown-content").slideUp(200);
      }
    );
});

 document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // отменяем отправку формы
    alert('Спасибо за запись');
  });
  