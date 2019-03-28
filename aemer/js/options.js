document.getElementById("host").value = localStorage["host"];
document.getElementById("port").value = localStorage["port"];

document.getElementById("saveBtn").addEventListener("click", function () {
        localStorage["host"] = document.getElementById("host").value;
        localStorage["port"] = document.getElementById("port").value;
    },
    false);