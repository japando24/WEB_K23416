const xmlString = `
<sinhvien>
    <mssv>K123456789</mssv>
    <hoTen>Quách Thị Bán Bún Bò</hoTen>
    <ngaySinh>7/7/1997</ngaySinh>
    <gioiTinh>Nữ</gioiTinh>
</sinhvien>`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const mssv = xmlDoc.getElementsByTagName("mssv")[0].textContent;
const hoTen = xmlDoc.getElementsByTagName("hoTen")[0].textContent;
const ngaySinh = xmlDoc.getElementsByTagName("ngaySinh")[0].textContent;
const gioiTinh = xmlDoc.getElementsByTagName("gioiTinh")[0].textContent;

const rows = [
    ["Mã Sinh Viên", mssv],
    ["Họ tên", hoTen],
    ["Ngày Sinh", ngaySinh],
    ["Giới Tính", gioiTinh]
];

const tableBody = document.getElementById("tableBody");

rows.forEach(([label, value]) => {
    const tr = document.createElement("tr");

    const tdLabel = document.createElement("td");
    tdLabel.textContent = label;

    const tdValue = document.createElement("td");
    tdValue.textContent = value;

    tr.appendChild(tdLabel);
    tr.appendChild(tdValue);

    tr.addEventListener("mouseover", () => {
        tr.style.backgroundColor = "blue";
        tr.style.color = "white";
    });

    tr.addEventListener("mouseout", () => {
        tr.style.backgroundColor = "white";
        tr.style.color = "black";
    });

    tableBody.appendChild(tr);
});
