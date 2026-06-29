// product.service.ts – Service xử lý việc gọi API lấy sản phẩm
// Inject HttpClient để gửi HTTP GET đến fakestoreapi.com

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

// @Injectable: cho phép inject service này vào các component khác
@Injectable({
  providedIn: 'root' // Đăng ký singleton ở cấp độ root (dùng được toàn app)
})
export class ProductService {

  // URL API công khai – trả về mảng sản phẩm dạng JSON
  private apiUrl = 'https://fakestoreapi.com/products';

  // Inject HttpClient qua constructor (Dependency Injection của Angular)
  constructor(private http: HttpClient) {}

  // Lấy toàn bộ sản phẩm – trả về Observable<Product[]>
  // Component subscribe để nhận dữ liệu khi API phản hồi
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Lấy danh sách theo danh mục
  getByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`);
  }
}
