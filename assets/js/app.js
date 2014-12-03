$(document).ready(function(){
  
  // Smooth Scrolling
  $('.footnote').smoothScroll();
  $('.scroll').smoothScroll();
  
  $('audio').mediaelementplayer({
    alwaysShowControls: true,
    features: ['playpause','progress', 'current', 'duration'],
    audioVolume: 'horizontal',
    iPadUseNativeControls: false,
    iPhoneUseNativeControls: false,
    AndroidUseNativeControls: false
  });
  
  $('a[rel="lightbox"]').fluidbox();
   
});

// Enables :active link styling in Mobile Safari
document.addEventListener("touchstart", function(){}, true);