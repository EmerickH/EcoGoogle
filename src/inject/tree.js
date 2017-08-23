//************ tree.js ************
// Injected script for ecosia.org
//*********************************

//var tree = document.getElementsByClassName("js-treecount-text")[0]; //only for large frames, not working in this case
var treemobile = document.getElementsByClassName("tree-counter-text-mobile")[0]; //get tree counter element
var treecount =  treemobile.innerHTML; //get tree count

var wrapper = document.getElementsByClassName("result-wrapper")[0]; //get wrapper
wrapper.style.display = "none"; //and hide it

var cadre = document.createElement("div"); //create a div, put the tree count inside and insert it under body
//iframe.style.display = "none";
cadre.style.height = "100%";
cadre.style.width = "100%";
cadre.style.position = "absolute";
cadre.style.top = "0";
cadre.style.left = "0";
cadre.innerHTML = treecount;
document.body.appendChild(cadre);