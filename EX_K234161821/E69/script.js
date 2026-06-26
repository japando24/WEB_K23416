var xmlDoc = null;

window.onload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;
            loadTitles();
            filterByTitle();
        }
    };
    xhttp.open("GET", "employees.xml", true);
    xhttp.send();
};

function loadTitles() {
    var employees = xmlDoc.getElementsByTagName("employee");
    var titles = [];

    for (var i = 0; i < employees.length; i++) {
        var title = employees[i].getAttribute("title");
        if (titles.indexOf(title) === -1) {
            titles.push(title);
        }
    }

    var select = document.getElementById("titleSelect");
    select.innerHTML = "";
    for (var j = 0; j < titles.length; j++) {
        var option = document.createElement("option");
        option.value = titles[j];
        option.textContent = titles[j];
        select.appendChild(option);
    }
}

function filterByTitle() {
    if (!xmlDoc) return;

    var selectedTitle = document.getElementById("titleSelect").value;
    var employees = xmlDoc.getElementsByTagName("employee");

    var table = "<tr>" +
        "<th>Mã Employee</th>" +
        "<th>Tên Employee</th>" +
        "<th>Phone Employee</th>" +
        "</tr>";

    for (var i = 0; i < employees.length; i++) {
        if (employees[i].getAttribute("title") === selectedTitle) {
            var id    = employees[i].getAttribute("id");
            var name  = employees[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            var phone = employees[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue;
            table += "<tr><td>" + id + "</td><td>" + name + "</td><td>" + phone + "</td></tr>";
        }
    }

    document.getElementById("result").innerHTML = table;
}
