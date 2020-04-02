
//Retrieve user inputs and save them in variables
var urlInput = document.getElementById("urlInput");
var urlName  = document.getElementById("urlName");

//When the button is clicked, a link is created
function createClass() {
    //creates an anchor tag in the DOM
    var anchor = document.createElement("A");
    var url = urlInput.value;

    //if the url does not have https:// in it, we need to make it into a secure url by adding that
    if(url.slice(0, 8) != "https://") {
        url = "https://".concat(url);
    }
    anchor.setAttribute("href", url);

    //if the user inputed text to name the url, use that for the text
    var anchorText;
    if(urlName.value != "") {
        anchorText = document.createTextNode(urlName.value);
    }
    else { //user didn't input text, so use the url as the url's text
        anchorText = document.createTextNode(urlInput.value);
    }
    
    //add the text to the url and add the url to the document so the user can see it
    anchor.appendChild(anchorText);
    document.body.appendChild(anchor);
}