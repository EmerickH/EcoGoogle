//***************************************** background.js *****************************************
// Block x-frame-options for ecosia.org
// From "Ignore X-Frame headers" Google Chrome extension
// https://gist.github.com/dergachev/e216b25d9a144914eae2
// https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe
//*************************************************************************************************

var browser = browser || chrome

browser.webRequest.onHeadersReceived.addListener(
  function (details) {
    for (var i = 0; i < details.responseHeaders.length; ++i) {
      if (details.responseHeaders[i].name.toLowerCase() == 'x-frame-options') {
        details.responseHeaders.splice(i, 1);
        return {
          responseHeaders: details.responseHeaders
        };
      }
    }
  }, {
    urls: ["https://*.ecosia.org/search*"]
  }, ["blocking", "responseHeaders"]);