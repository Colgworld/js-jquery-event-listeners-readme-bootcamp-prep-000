//define functions here

function getIt() {
  $('p').on('click')
  return alert('I was clicked!')
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function submitIt() {
$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
    alert("you entered the wrong value");
    return;
  });
}
