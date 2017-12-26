//************ inject.js ************
// Injected script for google.com/fr
//***********************************

var url = new URL(window.location.href); //get url
var search = url.searchParams.get("q"); //get the searched text

var iframe = document.createElement("iframe"); //create the iframe for Ecosia
iframe.style.height = "35px";
iframe.style.width = "50px";
iframe.style.border = "0";
iframe.src = "https://www.ecosia.org/search?frame=1&q=" + search;

var head = document.getElementsByClassName("gb_Ac")[0]; //get the header right element
var logo = document.createElement("img"); //create logo
logo.height = 35;
logo.src = browser.extension.getURL('ecosia.png');

head.insertBefore(logo, head.firstChild); //insert logo
head.insertBefore(iframe, head.firstChild); //insert iframe