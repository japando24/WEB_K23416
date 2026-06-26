var params = new URLSearchParams(window.location.search);
var mssvParam = params.get("mssv");

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");

var svNodes = xmlDoc.getElementsByTagName("sinhvien");
var svNode = null;
for (var i = 0; i < svNodes.length; i++) {
    if (svNodes[i].getElementsByTagName("mssv")[0].childNodes[0].nodeValue === mssvParam) {
        svNode = svNodes[i];
        break;
    }
}

if (svNode) {
    var fields = [
        ["Mã Sinh Viên", "mssv"],
        ["Họ tên",       "hoTen"],
        ["Ngày Sinh",    "ngaySinh"],
        ["Giới Tính",    "gioiTinh"]
    ];

    var tbody = document.getElementById("tableBody");

    for (var j = 0; j < fields.length; j++) {
        var label = fields[j][0];
        var tag   = fields[j][1];
        var value = svNode.getElementsByTagName(tag)[0].childNodes[0].nodeValue;

        var tr = document.createElement("tr");
        var tdLabel = document.createElement("td");
        tdLabel.innerHTML = label;

        var tdValue = document.createElement("td");
        tdValue.innerHTML = value;

        tr.appendChild(tdLabel);
        tr.appendChild(tdValue);

        tr.onmouseover = function() {
            this.style.backgroundColor = "blue";
            this.style.color = "white";
        };

        tr.onmouseout = function() {
            this.style.backgroundColor = "white";
            this.style.color = "black";
        };

        tbody.appendChild(tr);
    }
} else {
    document.getElementById("tableBody").innerHTML =
        "<tr><td colspan='2'>Không tìm thấy sinh viên.</td></tr>";
}
