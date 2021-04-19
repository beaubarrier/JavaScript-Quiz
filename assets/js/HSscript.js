

var gotScoreString= localStorage.getItem('scoreString')
var node = document.createElement('li');

var parsedScoreString = JSON.parse(gotScoreString) ;

node.appendChild(document.createTextNode(parsedScoreString));

document.querySelector('ol').appendChild(node);
