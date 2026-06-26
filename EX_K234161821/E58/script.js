// ── Khởi tạo khi trang load ──────────────────────────────────
function init() {
  setTodayDate();
  calcTotal();
  document.getElementById('txtFirst').focus();
}

// ── Hiển thị ngày hiện hành theo định dạng d/m/yyyy ──────────
function setTodayDate() {
  var today = new Date();
  var d = today.getDate();
  var m = today.getMonth() + 1;
  var y = today.getFullYear();
  document.getElementById('txtDate').value = d + '/' + m + '/' + y;
}

// ── Xử lý thay đổi dropdown Physician ───────────────────────
function physicianChanged() {
  var sel = document.getElementById('selPhysician');
  var otherInput = document.getElementById('txtOtherPhysician');

  if (sel.value === 'other') {
    otherInput.disabled = false;
    otherInput.focus();
  } else {
    otherInput.disabled = true;
    otherInput.value = '';
  }
}

// ── Kiểm tra ô "If other" khi rời khỏi (blur) ───────────────
function checkOtherPhysician() {
  var sel = document.getElementById('selPhysician');
  var otherInput = document.getElementById('txtOtherPhysician');

  if (sel.value === 'other' && otherInput.value.trim() === '') {
    alert('Please enter the physician name.');
    setTimeout(function () { otherInput.focus(); }, 0);
  }
}

// ── Kiểm tra giá trị APGAR khi rời ô (phải là 0, 1 hoặc 2) ─
function validateScore(input) {
  var val = input.value.trim();

  if (val === '') {
    input.value = '0';
    calcTotal();
    return;
  }

  var num = parseInt(val, 10);

  if (isNaN(num) || num < 0 || num > 2 || String(num) !== val) {
    alert('Invalid score!\nEach score must be 0, 1, or 2. Please re-enter.');
    input.value = '0';
    input.focus();
    calcTotal();
    return;
  }

  calcTotal();
}

// ── Tính tổng APGAR từ các ô đã nhập ────────────────────────
function calcTotal() {
  var ids = ['txtActivity', 'txtPulse', 'txtGrimace', 'txtAppearance', 'txtRespiration'];
  var total = 0;

  for (var i = 0; i < ids.length; i++) {
    var val = document.getElementById(ids[i]).value.trim();
    var num = parseInt(val, 10);
    if (!isNaN(num) && num >= 0 && num <= 2 && String(num) === val) {
      total += num;
    }
  }

  document.getElementById('txtTotal').value = total;
}

// ── Kiểm tra cân nặng khi sinh (>= 1200) ────────────────────
function validateBirthWeight(input) {
  var val = input.value.trim();
  if (val === '') return;

  var num = parseFloat(val);
  if (isNaN(num) || num < 1200) {
    alert('Birth weight must be >= 1200 gms. Please re-enter.');
    input.value = '';
    input.focus();
  }
}

// ── Register: validate toàn bộ form và thông báo ────────────
function register() {
  var first = document.getElementById('txtFirst').value.trim();
  var last  = document.getElementById('txtLast').value.trim();
  if (first === '' || last === '') {
    alert('Please enter the patient name (first and last).');
    document.getElementById('txtFirst').focus();
    return;
  }

  var sel = document.getElementById('selPhysician');
  if (sel.value === 'other') {
    var otherName = document.getElementById('txtOtherPhysician').value.trim();
    if (otherName === '') {
      alert('Please enter the physician name.');
      document.getElementById('txtOtherPhysician').focus();
      return;
    }
  }

  var bw = document.getElementById('txtBirthWeight').value.trim();
  if (bw !== '') {
    var bwNum = parseFloat(bw);
    if (isNaN(bwNum) || bwNum < 1200) {
      alert('Birth weight must be >= 1200 gms. Please re-enter.');
      document.getElementById('txtBirthWeight').focus();
      return;
    }
  }

  if (!document.getElementById('chkConsent').checked) {
    alert('Parental Consent is required.');
    return;
  }

  var physician = sel.value === 'other'
    ? document.getElementById('txtOtherPhysician').value.trim()
    : sel.value;

  alert(
    'Registration successful!\n' +
    'Patient: ' + first + ' ' + last + '\n' +
    'Physician: ' + physician + '\n' +
    'APGAR Total Score: ' + document.getElementById('txtTotal').value
  );
}

// ── Reload Page: reset toàn bộ form ─────────────────────────
function reloadPage() {
  document.getElementById('txtFirst').value = '';
  document.getElementById('txtLast').value  = '';
  document.getElementById('txtMedRecord').value = '';
  document.getElementById('txtDOB').value = '';

  document.getElementById('selPhysician').selectedIndex = 0;
  var otherInput = document.getElementById('txtOtherPhysician');
  otherInput.value = '';
  otherInput.disabled = true;

  ['txtActivity', 'txtPulse', 'txtGrimace', 'txtAppearance', 'txtRespiration'].forEach(function (id) {
    document.getElementById(id).value = '0';
  });
  document.getElementById('txtTotal').value = '0';

  document.getElementById('txtBirthWeight').value = '';
  document.getElementById('chkConsent').checked = false;

  document.getElementById('txtFirst').focus();
}
