$(document).ready(function(){
  $(function() {
    $('form').submit(function(e) {
      $('textarea.mentry-input').val($('#htmlsource').html());
    });
  });
});