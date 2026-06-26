function rowOver(row) {
  row.style.backgroundColor = 'yellow';
  row.style.color = 'black';
}

function rowLeave(row) {
  row.style.backgroundColor = 'blue';
  row.style.color = 'white';
}

var rows = document.querySelectorAll('#myTable tbody tr');
for (var i = 0; i < rows.length; i++) {
  rows[i].addEventListener('mouseover', function () { rowOver(this); });
  rows[i].addEventListener('mouseleave', function () { rowLeave(this); });
}
