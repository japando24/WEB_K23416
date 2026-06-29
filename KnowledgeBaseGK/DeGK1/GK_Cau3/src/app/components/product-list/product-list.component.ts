// product-list.component.ts – Component danh sách sản phẩm
// Gọi API qua ProductService, lưu vào mảng, render grid card

import { Component, OnInit } from '@angular/core';
import { ProductService }    from '../../services/product.service';
import { Product }           from '../../models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]  = [];    // Danh sách đầy đủ từ API
  filtered:  Product[]  = [];    // Danh sách sau khi lọc/tìm kiếm
  loading  = true;               // Trạng thái đang tải
  errorMsg = '';                 // Thông báo lỗi nếu API thất bại

  // Modal state
  selectedProduct: Product | null = null;  // Sản phẩm đang xem trong modal
  modalQty = 1;                            // Số lượng trong modal

  // Inject ProductService qua constructor (Angular DI)
  constructor(private productService: ProductService) {}

  // ngOnInit chạy một lần sau khi component được tạo
  ngOnInit(): void {
    this.loadProducts();
  }

  // Gọi service để lấy dữ liệu từ API
  loadProducts(): void {
    this.loading = true;
    this.productService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.filtered  = data;  // Hiển thị hết ban đầu
        this.loading   = false;
      },
      error: (err) => {
        this.errorMsg = 'Không thể tải sản phẩm. Vui lòng kiểm tra kết nối.';
        this.loading  = false;
        console.error('API Error:', err);
      }
    });
  }

  // Lọc sản phẩm theo từ khóa tìm kiếm
  filterProducts(keyword: string): void {
    const kw = keyword.toLowerCase().trim();
    this.filtered = kw
      ? this.products.filter(p => p.title.toLowerCase().includes(kw))
      : this.products;
  }

  // Tính % giảm giá ngẫu nhiên (fakestoreapi không có discountPercentage)
  // Dùng id để đảm bảo giá trị ổn định (không random lại mỗi lần render)
  getDiscount(id: number): number {
    return 10 + (id % 20); // Dao động 10%–29%
  }

  // Tạo mảng sao đánh giá: ['★','★','★','☆','☆']
  getStars(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.round(rating) ? '★' : '☆');
    }
    return stars;
  }

  // ---- Modal ----
  openModal(product: Product): void {
    this.selectedProduct = product;
    this.modalQty = 1;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }

  addToCart(): void {
    if (this.selectedProduct) {
      alert(`Đã thêm ${this.modalQty} "${this.selectedProduct.title}" vào giỏ hàng!`);
      this.closeModal();
    }
  }
}
