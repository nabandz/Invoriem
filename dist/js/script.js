$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
    });
  });

  /* Visdeo */
  const videoButton = document.querySelector('#video-btn');
  const videoImg = document.querySelector('.about__img');
  const videoWrapper = document.querySelector('.about__video');
  const video = document.querySelector('#video-file');

  videoWrapper.addEventListener('click', function() {
    if (video.paused) {
        videoImg.classList.add('none');
        videoButton.classList.add('none');
        videoWrapper.classList.remove('about__video-overlay');
        video.play();
    } else {
        videoButton.classList.remove('none');
        videoWrapper.classList.add('about__video-overlay');
        video.pause();
    }
  })