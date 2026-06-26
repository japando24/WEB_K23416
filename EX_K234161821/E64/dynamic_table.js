// ---- Đồng hồ điện tử ----
function pad2(n) {
  return n < 10 ? '0' + n : '' + n;
}

function updateClock() {
  var now = new Date();
  document.getElementById('clock').textContent =
    pad2(now.getHours()) + ':' + pad2(now.getMinutes()) + ':' + pad2(now.getSeconds());
}

updateClock();
setInterval(updateClock, 1000);

// ---- Dòng click chuột ----
function handleLineClick(e) {
  if (e.button === 0) alert('Bạn đã nhấn chuột TRÁI');
}

function handleLineRightClick(e) {
  e.preventDefault();
  alert('Bạn đã nhấn chuột PHẢI');
}

var clickLine = document.getElementById('click-line');
clickLine.addEventListener('click', handleLineClick);
clickLine.addEventListener('contextmenu', handleLineRightClick);

// ---- Toggle nền đỏ khi click dòng ----
function toggleRed(row) {
  if (row.style.backgroundColor === 'red') {
    row.style.backgroundColor = '';
  } else {
    row.style.backgroundColor = 'red';
  }
}

function addRowEvent(row) {
  row.addEventListener('click', function () {
    toggleRed(this);
  });
}

// Gán sự kiện cho các dòng mặc định
var initRows = document.querySelectorAll('#myTable tbody tr');
for (var i = 0; i < initRows.length; i++) {
  addRowEvent(initRows[i]);
}

// ---- Thêm dòng mới vào đầu bảng ----
function themVao() {
  var tbody = document.querySelector('#myTable tbody');
  var row = tbody.insertRow(0);
  row.insertCell(0).textContent = 'Thêm dòng mới ở đây';
  row.insertCell(1).textContent = 'Thêm dòng mới ở đây';
  addRowEvent(row);
}

// ---- Xóa các dòng có nền đỏ ----
function xoa() {
  var tbody = document.querySelector('#myTable tbody');
  var rows = tbody.getElementsByTagName('tr');
  for (var i = rows.length - 1; i >= 0; i--) {
    if (rows[i].style.backgroundColor === 'red') {
      tbody.removeChild(rows[i]);
    }
  }
}

// ---- Chỉ hiện dòng: ẩn cột 2, nếu đang ẩn thì hiện lại ----
var col2Hidden = false;

function chiHienDong() {
  var rows = document.querySelectorAll('#myTable tr');
  col2Hidden = !col2Hidden;
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].cells;
    if (cells.length > 1) {
      cells[1].style.display = col2Hidden ? 'none' : '';
    }
  }
}

// ---- Chỉ hiện cột: ẩn tất cả dòng trừ dòng đầu, nếu đang ẩn thì hiện lại ----
var rowsHidden = false;

function chiHienCot() {
  var tbody = document.querySelector('#myTable tbody');
  var rows = tbody.getElementsByTagName('tr');
  rowsHidden = !rowsHidden;
  for (var i = 1; i < rows.length; i++) {
    rows[i].style.display = rowsHidden ? 'none' : '';
  }
}

// ---- Mở trang mới ----
function moTrangMoi() {
  window.open('https://tranduythanh.com');
}
