
$(document).ready(function() {
    const $gallery = $('.gallery');
    const $prevButton = $('#prevButton');
    const $nextButton = $('#nextButton');
    const $images = $('.gallery img');
    const totalImages = $images.length;
    let currentImageIndex = 0;

    function showImage() {
        $images.hide();
        $images.eq(currentImageIndex).show();
    }

    showImage(); 

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(); 
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(); 
    }

    $nextButton.on('click', nextImage); 
    $prevButton.on('click', prevImage); 
});


$(document).ready(function(){
  
    $("li").hover(
      function() {
        $(this).find(".dropdown-content").slideDown(200); 
      }, function() {
        $(this).find(".dropdown-content").slideUp(200);
      }
    );
});

