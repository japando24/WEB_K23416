// Vị trí nhập vào là 1-based (1 = phần tử đầu tiên)

// ---- Thêm Node ----
function themNode() {
  var noidung = document.getElementById('them-noidung').value.trim();
  var vitri   = parseInt(document.getElementById('them-vitri').value);
  var ul      = document.getElementById('myList');
  var items   = ul.getElementsByTagName('li');

  if (noidung === '') {
    alert('Vui lòng nhập nội dung!');
    return;
  }

  var newLi = document.createElement('li');
  newLi.textContent = noidung;

  // Nếu vị trí hợp lệ thì insertBefore, ngược lại appendChild
  if (!isNaN(vitri) && vitri >= 1 && vitri <= items.length) {
    ul.insertBefore(newLi, items[vitri - 1]);
  } else {
    ul.appendChild(newLi);
  }

  document.getElementById('them-noidung').value = '';
  document.getElementById('them-vitri').value   = '';
}

// ---- Xóa Node ----
function xoaNode() {
  var vitri = parseInt(document.getElementById('xoa-vitri').value);
  var ul    = document.getElementById('myList');
  var items = ul.getElementsByTagName('li');

  if (isNaN(vitri) || vitri < 1 || vitri > items.length) {
    alert('Vị trí không hợp lệ! (1 – ' + items.length + ')');
    return;
  }

  ul.removeChild(items[vitri - 1]);
  document.getElementById('xoa-vitri').value = '';
}

// ---- Sửa Node ----
function suaNode() {
  var noidung = document.getElementById('sua-noidung').value.trim();
  var vitri   = parseInt(document.getElementById('sua-vitri').value);
  var ul      = document.getElementById('myList');
  var items   = ul.getElementsByTagName('li');

  if (noidung === '') {
    alert('Vui lòng nhập nội dung sửa!');
    return;
  }

  if (isNaN(vitri) || vitri < 1 || vitri > items.length) {
    alert('Vị trí không hợp lệ! (1 – ' + items.length + ')');
    return;
  }

  var newLi = document.createElement('li');
  newLi.textContent = noidung;
  ul.replaceChild(newLi, items[vitri - 1]);

  document.getElementById('sua-noidung').value = '';
  document.getElementById('sua-vitri').value   = '';
}
