var firstSlideID = $('#slideshow').children().first().attr('data-slide-id');
var lastSlideID = $('#slideshow').children().last().attr('data-slide-id');
var currentGallery =  Static.SQUARESPACE_CONTEXT.collection.title;
var galleries = [
  "Life",
  "Travel",
  "Land",
  "Enthusiasts",
  "Editorial",
  "Faces",
  "Work",
  "Tarot",
  "Body",
  "Icescapes"
];

var arrayLength = galleries.length;
var previousGallery = '';
var nextGallery = '';

for (var i = 0; i < arrayLength; i++) {
  if (currentGallery == galleries[i]){
    if (i == 0) {
      // We have no previous
      previousGallery = null;
    }
    else if (i == arrayLength - 1) {
      nextGallery = null;
    }

    if (nextGallery != null) {
      nextGallery = galleries[i + 1];
    }

    if (previousGallery != null) {
      previousGallery = galleries[i - 1];
    }
  }
}

// Not collection-56a7b1b176d99c82e7d277a1 on tarot card set page
$('.overlay-controls.right-control').not('#collection-56a7b1b176d99c82e7d277a1 .overlay-controls.right-control').on('click', function(event){
  // This prevents the image from the next image from loading
  var activeSlideID = $('.sqs-active-slide').attr('data-slide-id');
  if (activeSlideID == lastSlideID) {
    event.stopImmediatePropagation();
    var domain = location.protocol + "//" + location.host;
    window.location.href = domain + "/" + nextGallery.toLowerCase();
  }
  return false;
});

$(".overlay-controls.left-control:not('#collection-56a7b1b176d99c82e7d277a1')").on('click', function(event){

    // This prevents the image from the next image from loading
    var activeSlideID = $('.sqs-active-slide').attr('data-slide-id');
    if (activeSlideID == firstSlideID && previousGallery != null) {
      event.stopImmediatePropagation();
      var domain = location.protocol + "//" + location.host;
      window.location.replace(domain + "/" + previousGallery.toLowerCase());
    }
});


