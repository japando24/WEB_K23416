var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");

function getVal(node, tag) {
    return node.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
}

var svNodes = xmlDoc.getElementsByTagName("sinhvien");
var students = [];
for (var i = 0; i < svNodes.length; i++) {
    students.push({
        mssv:     getVal(svNodes[i], "mssv"),
        hoTen:    getVal(svNodes[i], "hoTen"),
        ngaySinh: getVal(svNodes[i], "ngaySinh"),
        gioiTinh: getVal(svNodes[i], "gioiTinh")
    });
}

var sortState = { col: null, asc: true };

function parseDate(str) {
    var parts = str.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

function updateHeaderArrows(activeCol) {
    var headers = document.querySelectorAll(".header-row th");
    for (var i = 0; i < headers.length; i++) {
        var col  = headers[i].getAttribute("data-col");
        var base = headers[i].getAttribute("data-label");
        if (col === activeCol) {
            headers[i].innerHTML = base + (sortState.asc ? " &#9650;" : " &#9660;");
        } else {
            headers[i].innerHTML = base;
        }
    }
}

function sortStudents(col) {
    if (sortState.col === col) {
        sortState.asc = !sortState.asc;
    } else {
        sortState.col = col;
        sortState.asc = true;
    }

    students.sort(function(a, b) {
        var va = a[col], vb = b[col];
        if (col === "ngaySinh") {
            va = parseDate(va);
            vb = parseDate(vb);
            return sortState.asc ? va - vb : vb - va;
        }
        return sortState.asc
            ? va.localeCompare(vb, "vi")
            : vb.localeCompare(va, "vi");
    });

    updateHeaderArrows(col);
    renderRows();
}

function renderRows() {
    var tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    for (var i = 0; i < students.length; i++) {
        var sv = students[i];
        var tr = document.createElement("tr");

        var keys = ["mssv", "hoTen", "ngaySinh", "gioiTinh"];
        for (var k = 0; k < keys.length; k++) {
            var td = document.createElement("td");
            td.innerHTML = sv[keys[k]];
            tr.appendChild(td);
        }

        tr.onmouseover = function() {
            this.style.backgroundColor = "yellow";
        };

        tr.onmouseout = function() {
            this.style.backgroundColor = "white";
        };

        (function(svData) {
            tr.onclick = function() {
                window.location.href = "detail.html?mssv=" + encodeURIComponent(svData.mssv);
            };
        })(sv);

        tbody.appendChild(tr);
    }
}

var headers = document.querySelectorAll(".header-row th");
for (var h = 0; h < headers.length; h++) {
    (function(th) {
        th.onclick = function() {
            sortStudents(th.getAttribute("data-col"));
        };
    })(headers[h]);
}

renderRows();
