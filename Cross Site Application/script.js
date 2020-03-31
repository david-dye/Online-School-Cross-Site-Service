var anchor = document.createElement("A");
var anchorText = document.createTextNode("Test Google");
anchor.setAttribute("href", "https://www.google.com/");
anchor.appendChild(anchorText);
document.body.appendChild(anchor);