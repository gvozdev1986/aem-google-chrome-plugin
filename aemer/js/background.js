var host = localStorage["host"];
var port = localStorage["port"];
var settingsBtn = "options.html";

var decode = {
    "id": "decode",
    "title": "Decode (Base64)",
    "contexts": ["selection"],
    'onclick': function (info, tab) {
        alert(atob(info.selectionText));
    }
};

var encode = {
    "id": "encode",
    "title": "Encode (Base64)",
    "contexts": ["selection"],
    'onclick': function (info, tab) {
        alert(btoa(info.selectionText));
    }
};

var openCRX = {
    "id": "openCRX",
    "title": "Open CRX",
    "contexts": ["selection"],
    'onclick': function (info, tab) {
        window.open(host + ":" + port + "/crx/de/index.jsp#" + info.selectionText, '_blank');
    }
};

var openAdmin = {
    "id": "openAdmin",
    "title": "Open Admin",
    "contexts": ["selection"],
    'onclick': function (info, tab) {
        window.open(host + ":" + port + "/sites.html/" + info.selectionText, '_blank');
    }
};

var openDAM = {
    "id": "openDAM",
    "title": "Open DAM",
    "contexts": ["selection"],
    'onclick': function (info, tab) {
        window.open(host + ":" + port + "/assets.html/" + info.selectionText, '_blank');
    }
};

var openBandles = {
    "id": "openBandles",
    "title": "Bundles",
    "contexts": ["page"],
    'onclick': function (info, tab) {
        window.open(host + ":" + port + "/system/console/bundles", '_blank');
    }
};

var openManager = {
    "id": "openManager",
    "title": "Manager",
    "contexts": ["page"],
    'onclick': function (info, tab) {
        window.open(host + ":" + port + "/system/console/configMgr", '_blank');
    }
};

var openService = {
    "id": "openService",
    "title": "Services",
    "contexts": ["page"],
    'onclick': function (info, tab) {
        window.open(host + ":" + port + "/system/console/services", '_blank');
    }
};

var openComponents = {
    "id": "openComponents",
    "title": "Components",
    "contexts": ["page"],
    'onclick': function (info, tab) {
        window.open(host + ":" + port + "/system/console/components", '_blank');
    }
};

var openSettings = {
    "id": "openSettings",
    "title": "Settings",
    "contexts": ["page"],
    "enabled" : true,
    'onclick': function (info, tab) {
        window.open(settingsBtn, '_blank');
    }
};

var splitter = {
    "id": "splitter",
    "type": 'separator',
    "contexts": ["page"]
};

chrome.contextMenus.create(decode);
chrome.contextMenus.create(encode);
chrome.contextMenus.create(openCRX);
chrome.contextMenus.create(openAdmin);
chrome.contextMenus.create(openDAM);
chrome.contextMenus.create(openBandles);
chrome.contextMenus.create(openManager);
chrome.contextMenus.create(openService);
chrome.contextMenus.create(openComponents);

chrome.contextMenus.create(splitter);

chrome.contextMenus.create(openSettings);


