// navbar.component.ts – Thanh điều hướng đầu trang
// Quản lý: search keyword và trạng thái menu mobile

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchKeyword = '';   // Từ khóa người dùng nhập
  menuOpen = false;     // Trạng thái menu mobile (đóng/mở)

  // Mở/đóng menu hamburger trên màn nhỏ
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Thực hiện tìm kiếm (demo: chỉ log ra console)
  onSearch(): void {
    console.log('Tìm kiếm:', this.searchKeyword);
    // TODO: Kết nối với ProductListComponent qua EventEmitter hoặc shared service
  }
}
