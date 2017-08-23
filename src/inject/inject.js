//************ inject.js ************
// Injected script for google.com/fr
//***********************************

var url = window.location.href; //get url
var urlurl = new URL(url);
var search = urlurl.searchParams.get("q"); //get the searched text

var iframe = document.createElement("iframe"); //create the iframe for Ecosia
iframe.style.height = "20px";
iframe.style.width = "40px";
iframe.style.border = "0";
iframe.src = "https://www.ecosia.org/search?q=" + search;

var head = document.getElementsByClassName("gb_hb")[0]; //get the header right element
var logo = document.createElement("img"); //create logo
logo.height = 35;
logo.src = chrome.extension.getURL('ecosia.png');

head.insertBefore(logo, head.firstChild); //insert logo
head.insertBefore(iframe, head.firstChild); //insert iframe