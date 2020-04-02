
var urlInput = document.getElementById("urlInput");
var urlName  = document.getElementById("urlName");

function createClass() {
    var anchor = document.createElement("A");
    anchor.setAttribute("href", urlInput.value);

    var anchorText;
    if(urlName.value != "") {
        anchorText = document.createTextNode(urlName.value);
    }
    else {
        anchorText = document.createTextNode(urlInput.value);
    }
    anchor.appendChild(anchorText);
    document.body.appendChild(anchor);
}