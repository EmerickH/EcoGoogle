var browser = browser || chrome;
var enable;

function start() {
    function setCurrentChoice(result) {
        enable = result.enable;
        if (!enable) {
            document.querySelector("#Button").textContent = "Enabled";
        } else {
            document.querySelector("#Button").textContent = "Disabled";
        }
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    document.getElementById("tree").src = browser.extension.getURL('ecosia.png');

    var getting = browser.storage.local.get("enable");
    getting.then(setCurrentChoice, onError);
}

function saveOption(e) {
    e.preventDefault();
    browser.storage.local.set({
        enable: !enable
    });
    location.reload();
}

document.addEventListener("DOMContentLoaded", start);
document.querySelector("form").addEventListener("submit", saveOption);
