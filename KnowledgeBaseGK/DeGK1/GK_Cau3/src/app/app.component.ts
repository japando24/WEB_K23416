// app.component.ts – Component gốc, khung chứa toàn bộ trang
// Template chứa: <app-navbar> + <app-hero> + <app-product-list>

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',          // Tên thẻ dùng trong index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyShop'; // Tiêu đề ứng dụng (có thể truyền xuống component con)
}
