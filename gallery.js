
$(document).ready(function() {
    const $gallery = $('.gallery');
    const $prevButton = $('#prevButton');
    const $nextButton = $('#nextButton');
    const $images = $('.gallery img');
    const totalImages = $images.length;
    let currentImageIndex = 0;

    function showImage() {
        $images.hide(); // Скрываем все изображения
        $images.eq(currentImageIndex).show(); // Показываем только текущее
    }

    showImage(); // Показываем первое изображение при загрузке страницы

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages; // Переходим к следующему изображению
        showImage(); // Обновляем отображение
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages; // Переходим к предыдущему изображению
        showImage(); // Обновляем отображение
    }

    $nextButton.on('click', nextImage); // Обработчик для кнопки "Следующее"
    $prevButton.on('click', prevImage); // Обработчик для кнопки "Предыдущее"
});


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

