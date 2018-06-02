//************ tree.js ************
// Injected script for ecosia.org
//*********************************

//var tree = document.getElementsByClassName("js-treecount-text")[0]; //only for large frames, not working in this case

var url = new URL(window.location.href); //get url
var search = url.searchParams.get("frame"); //get if in iframe

if (search == 1) {
    var treemobile = document.getElementsByClassName("tree-counter-text-mobile")[0]; //get tree counter element
    var treecount =  treemobile.innerHTML; //get tree count

    document.getElementsByClassName("results-page")[0].style.display = "none"; //get wrapper and hide it
    
    document.getElementsByClassName("body-serp")[0].style.background = "#fafafa";

    var cadre = document.createElement("div"); //create a div, put the tree count inside and insert it under body
    cadre.style.height = "100%";
    cadre.style.width = "90%";
    cadre.style.position = "absolute";
    cadre.style.top = "0";
    cadre.style.left = "0";
    cadre.style.fontSize = "25px";
	cadre.style.textAlign = "Right";
    cadre.innerHTML = treecount;
    document.body.appendChild(cadre);
}