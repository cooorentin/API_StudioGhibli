$(document).ready(function(){

  var q = {
    url: 'https://ghibliapi.herokuapp.com/films/'
  };

  $('#form').on('submit', function (event) {
    event.preventDefault();
    var input = $('#term').val();
    $.ajax(q.url + input, {
      success: function (result) {
        $('#result').html(
          '<h4> ' + result.title + '</h4>' +
          '<p><u>Description:</u> ' + result.description + '</p>' +
          '<p><u>Director:</u> ' + result.director + '</p>' +
          '<p><u>Producer:</u> ' + result.producer + '</p>' +
          '<p><u>Release date:</u> ' + result.release_date + '</p>' +
          '<p><u>Rate score:</u> ' + result.rt_score + '/100</p>'
        );
      }, // end success
      error: function (request, errorType, errorMessage) {
        alert('Error: ' + errorType + ', ' + errorMessage + ' :(');
      },
      timeout: 3000,
      beforeSend: function () {
        $('#search').attr('value', 'loading...');
      },
      complete: function () {
        $('#search').attr('value', 'Go!');
      }
    });  // end poster getJSON
  }); // end submit event


}); // end document ready
