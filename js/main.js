function countBodyChildren(){
	var body_elements = document.getElementsByTagName("body")[0];
	alert(body_elements.childNodes.length);
}
window.onload = countBodyChildren;
