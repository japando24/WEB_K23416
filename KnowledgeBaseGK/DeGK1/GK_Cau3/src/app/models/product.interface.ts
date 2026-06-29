// product.interface.ts – Định nghĩa kiểu dữ liệu sản phẩm
// Phản ánh cấu trúc JSON trả về từ https://fakestoreapi.com/products

export interface Rating {
  rate:  number;   // Điểm đánh giá (0 → 5)
  count: number;   // Số lượt đánh giá
}

export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;   // URL ảnh sản phẩm
  rating:      Rating;
}
