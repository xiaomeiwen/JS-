//showPic.js
addLoadEvent(prepareGallery);
function prepareGallery() {
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this);
			return false;
		}
	}
}

function showPic(whichpic) {
  if (!document.getElementById("description")) return false;
  var titletext = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = titletext;
  if (!document.getElementById("placeholder")) return true;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
}

