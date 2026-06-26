// ---- Nạp dữ liệu cho droplist ngày / tháng / năm ----

function loadNgay() {
  var sel = document.getElementById('ngay');
  for (var i = 1; i <= 31; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.text = (i < 10 ? '0' + i : i);
    sel.appendChild(opt);
  }
}

function loadThang() {
  var sel = document.getElementById('thang');
  for (var i = 1; i <= 12; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.text = i;
    sel.appendChild(opt);
  }
}

function loadNam() {
  var sel = document.getElementById('nam');
  for (var i = 1970; i <= 2015; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.text = i;
    sel.appendChild(opt);
  }
}

loadNgay();
loadThang();
loadNam();

// ---- Lấy giá trị giới tính ----
function getGioiTinh() {
  var radios = document.getElementsByName('gioitinh');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) return radios[i].value;
  }
  return '';
}

// ---- Lấy danh sách sở thích đã chọn ----
function getSoThich() {
  var checks = document.getElementsByName('sothich');
  var list = [];
  for (var i = 0; i < checks.length; i++) {
    if (checks[i].checked) list.push(checks[i].value);
  }
  return list.join(', ');
}

// ---- Lấy màu yêu thích ----
function getMau() {
  var radios = document.getElementsByName('mau');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) return radios[i].value;
  }
  return '';
}

// ---- Kiểm tra email hợp lệ ----
function isEmailValid(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// ---- Thêm sự kiện mouse cho dòng mới ----
function addRowEvents(row) {
  row.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'yellow';
  });
  row.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
  });
}

// ---- Đăng ký ----
function dangKy() {
  var ten   = document.getElementById('ten').value.trim();
  var email = document.getElementById('email').value.trim();

  if (ten === '') {
    alert('Tên không được bỏ trống!');
    document.getElementById('ten').focus();
    return;
  }

  if (!isEmailValid(email)) {
    alert('Email không hợp lệ!');
    document.getElementById('email').focus();
    return;
  }

  var ngay  = document.getElementById('ngay').value;
  var thang = document.getElementById('thang').value;
  var nam   = document.getElementById('nam').value;
  var ngaySinh = (ngay < 10 ? '0' + ngay : ngay) + '/' +
                 (thang < 10 ? '0' + thang : thang) + '/' + nam;

  var gioiTinh = getGioiTinh();
  var soThich  = getSoThich();
  var mau      = getMau();

  var tbody = document.getElementById('result-body');
  var row = tbody.insertRow();
  row.insertCell(0).innerHTML = ten;
  row.insertCell(1).innerHTML = email;
  row.insertCell(2).innerHTML = gioiTinh;
  row.insertCell(3).innerHTML = ngaySinh;
  row.insertCell(4).innerHTML = soThich;
  row.insertCell(5).innerHTML = mau;

  addRowEvents(row);
}

// ---- Tiếp: xóa form, focus vào Tên ----
function tiep() {
  document.getElementById('ten').value   = '';
  document.getElementById('email').value = '';

  document.getElementById('ngay').selectedIndex  = 0;
  document.getElementById('thang').selectedIndex = 0;
  document.getElementById('nam').selectedIndex   = 0;

  var gtRadios = document.getElementsByName('gioitinh');
  gtRadios[0].checked = true;

  var checks = document.getElementsByName('sothich');
  for (var i = 0; i < checks.length; i++) {
    checks[i].checked = false;
  }

  var mauRadios = document.getElementsByName('mau');
  for (var i = 0; i < mauRadios.length; i++) {
    mauRadios[i].checked = false;
  }

  document.getElementById('ten').focus();
}
