
// Another option http://stackoverflow.com/questions/4753695/disabling-right-click-on-images-using-jquery
$('.overlay-controls, img').bind('contextmenu', function(e) {
  alert('Image protected');
  return false;
});