var host = localStorage["host"];
var port = localStorage["port"];

var settingsBtn = "options.html";

document.getElementById("damBtn").addEventListener("click", function () {
        window.open(host + ":" + port + "/assets.html/content/dam", '_blank');
    },
    false);


document.getElementById("siteBtn").addEventListener("click", function () {
        window.open(host + ":" + port + "/sites.html/content", '_blank');
    },
    false);


document.getElementById("crxBtn").addEventListener("click", function () {
        window.open(host + ":" + port + "/crx/de/index.jsp#/content/training/MySite", '_blank');
    },
    false);

document.getElementById("settingsBtn").addEventListener("click", function () {
        window.open(settingsBtn, '_blank');
    },
    false);

setInterval(function () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', host + ":" + port + "/");

    xhr.onprogress = function () {

        if (xhr.status === 200) {
            document.getElementById('imageStatus').src = 'image/online.png';
            chrome.browserAction.setBadgeText({text:"ON"});
            chrome.browserAction.setBadgeBackgroundColor({color: "green"});
        } else {
            document.getElementById('imageStatus').src = 'image/offline.png';
            chrome.browserAction.setBadgeText({text:"OFF"});
            chrome.browserAction.setBadgeBackgroundColor({color: "red"});
        }

    };

    xhr.send();

}, 100);