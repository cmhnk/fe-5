import groceries from './list';
import $ from 'jquery';

$('body').addClass('container');
$('<h3>grocery list</h3>').appendTo('body');
$('<p></p>').text('the staples:').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
// ul.addClass('container');
for (const grocery of groceries) {
  $('<li></li>').text(grocery).appendTo(ul);
}
$('<p></p>').text('this week:').appendTo('body');
const ul2 = $('<ul id=ul2></ul>').appendTo('body');
const textInput = $('<input type="text"></input>').appendTo('body');
const lineBreak = $('<br>').appendTo('body');
const submitButton = $('<input type="submit" id="submit"></input>').appendTo('body');
const clearButton = $('<button id="clear">Clear</button>').appendTo('body');

$(document).ready(function() {

  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      $('<li></li>').text(localStorage[key]).appendTo(ul2);
    }
  };

  $( "#submit" ).click(function() {
    var unique_key = new Date().getTime() / 1000
    var item = textInput.val()
    localStorage.setItem(unique_key, item);
    $('<li></li>').text(item).appendTo(ul2);
    // for (var key in localStorage) {
    //   if (localStorage.hasOwnProperty(key)) {
    //     $('<li></li>').text(localStorage[key]).appendTo(ul2);
    //   }
    // };
  });

  $( "#clear" ).click(function() {
    // localStorage.removeItem(last_item);
    localStorage.clear();
    $("#ul2").empty();
  });
});

// idea: what if the list just displays stuff in localStorage?
