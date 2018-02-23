$(document).ready(function() {
  // $("body").fadeOut(300);
  $("body").delay(200).fadeIn(200);
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  var myStorage = window.localStorage;
  var chapter = myStorage.getItem('chapter');
  var lesson = myStorage.getItem('lesson');
  $('#replay').click(goToPage(`/quiz/?chapter=&id=${lesson}`));

  $('#goNote').click(goToPage(`/?chapter=${chapter}`));
  // $("#question1 .answer span label").click(enableButton);
}


function goToPage(url) {
  return function(e) {
    e.preventDefault();
    $(this).closest('body').fadeOut(200);
    setTimeout(function(){
      window.location = url;
    }, 400);
  }

}
