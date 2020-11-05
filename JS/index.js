if ($(window).width() <= 768) {
  $('.social-media').removeClass('fa-3x');
  $('.social-media').addClass('fa-2x');
}

$( window ).resize(function(){
  if ($(window).width() <= 768) {
    $( "i" ).each(function( index ) {
      $( this ).removeClass('fa-3x');
      $( this ).addClass('fa-2x');
    });
  }
  else{
    $( "i" ).each(function( index ) {
      $( this ).removeClass('fa-2x');
      $( this ).addClass('fa-3x');
    });
  }
})
