
// Test right clicking on.
$('.overlay-controls.right-control').click(function(event){
  event.preventDefault();
  var activeSlideImageID = $('.sqs-active-slide img').attr('data-image-id');
  if (activeSlideImageID == '560038d8e4b052586769796c') {
    var domain = location.protocol + "//" + location.host
    window.location.href = domain + "/travel";
  }
});

