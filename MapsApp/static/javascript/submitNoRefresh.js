// $(document).ready(function(){
//   $('.main-form').submit( function() {
//     $.ajax({
//       url: $(this).attr('action'),
//       type: $(this).attr('method'),
//       dataType: 'json',
//       data: $(this).serialize(),
//       success: function(data) {
//         // $('results').append(data);
//         $('results').html("<h2>Contact Form Submitted!</h2>")
//       }
//     });
//     return false;
//   });
// });

$(document).ready(function(){
  $('.main-form').submit( function() {
    $.ajax({
      url: $(this).attr('action'),
      type: $(this).attr('method'),
      dataType: 'json',
      data: $(this).serialize(),
      success: function () {
        alert('form was submitted');
      }
    });
  });
});
