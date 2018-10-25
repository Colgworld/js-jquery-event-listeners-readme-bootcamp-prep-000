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
    $( "input:first" ).val() === "correct")
});
return alert('your form is going to be submitted now');

}
