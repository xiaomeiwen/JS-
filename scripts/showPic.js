//showPic.js
function showPic(whichpic) {
  var titletext = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = titletext;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
}

function countBodyChildren() {
	var body_element = document.body[0];
	alert(body_element.childNodes.length);
	
}
