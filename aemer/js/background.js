var priceItem = {
    "id": "decode",
    "title": "Decode (Base64)",
    "contexts": ["selection"],
    'onclick': function(info, tab) {
        alert(atob(info.selectionText));
    }
};

var nameItem = {
    "id": "encode",
    "title": "Encode (Base64)",
    "contexts": ["selection"],
    'onclick': function(info, tab) {
        alert(btoa(info.selectionText));
    }
};

chrome.contextMenus.create(priceItem);
chrome.contextMenus.create(nameItem);