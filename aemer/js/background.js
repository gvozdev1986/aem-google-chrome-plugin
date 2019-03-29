chrome.runtime.onInstalled.addListener(function () {
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
});