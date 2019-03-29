var host = localStorage["host"];
var port = localStorage["port"];
var settingsBtn = "options.html";
var status = false;

document.getElementById("damBtn").addEventListener("click", function () {
        if (!status) {
            window.open(host + ":" + port + "/assets.html/content/dam", '_blank');
        }
    },
    false);


document.getElementById("siteBtn").addEventListener("click", function () {
        if (!status) {
            window.open(host + ":" + port + "/sites.html/content", '_blank');
        }
    },
    false);


document.getElementById("crxBtn").addEventListener("click", function () {
        if (!status) {
            window.open(host + ":" + port + "/crx/de/index.jsp#/content/training/MySite", '_blank');
        }
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
            status = true;
            document.getElementById('imageStatus').src = 'image/online.png';
            chrome.browserAction.setBadgeText({text: "ON"});
            chrome.browserAction.setBadgeBackgroundColor({color: "green"});
        } else {
            status = false;
            document.getElementById('imageStatus').src = 'image/offline.png';
            chrome.browserAction.setBadgeText({text: "OFF"});
            chrome.browserAction.setBadgeBackgroundColor({color: "red"});
        }
    };
    xhr.send();
}, 100);


document.getElementById("form1").addEventListener("change", function () {
        var form1 = document.getElementById('form1').value;
        document.getElementById('form2').value = atob(form1);
    },
    false);


document.getElementById("form2").addEventListener("change", function () {
        var form2 = document.getElementById('form2').value;
        document.getElementById('form1').value = btoa(form2);
    },
    false);


document.getElementById("openUrlCrx").addEventListener("click", function () {
        if (!status) {
            var form2 = document.getElementById('form2').value;
            if (form2 !== "") {
                window.open(host + ":" + port + "/crx/de/index.jsp#" + form2, '_blank');
            }
        }
    },
    false);

document.getElementById("openUrlSite").addEventListener("click", function () {
        if (!status) {
            var form2 = document.getElementById('form2').value;
            //window.open(host + ":" + port + "/assets.html" + form2, '_blank');
            window.open(host + ":" + port + "/sites.html" + form2, '_blank');
        }
    },
    false);


function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

