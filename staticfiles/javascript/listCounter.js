

// var everyStop = ('.my-stops').querySelectorAll('.stop-counter')
// for (i=0; i<everyStop.length; i++) {
//   console.log(everyStop[i].innerHTML);
// }

var x;
var lastChar;
var everyLeg = document.querySelectorAll('.my-stops')
console.log(everyLeg.length)

for (i=0; i<everyLeg.length; i++) {
  // var `myList_${i}` = [];
  // `myList_${i}`.push(everyLeg[i].innerText)
  x = everyLeg[i].innerText
  x = x.replace(/\s+/g, " ").trim();
  lastChar = x.substr(x.length - 1);
  document.getElementsByClassName('num-of-stops')[i].innerHTML = lastChar;

}
// document.getElementsByClassName('num-of-stops').innerText += lastChar;

//<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title"
//data-content="{% for stop in leg.path.stopPoints %}{{ stop.name }}<br>{% endfor %}" onclick="foo(event);">Stops</button>
