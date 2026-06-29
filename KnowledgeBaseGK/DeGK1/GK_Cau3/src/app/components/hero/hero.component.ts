// hero.component.ts – Banner slider/carousel đầu trang
// Tự động chuyển ảnh mỗi 3 giây, có nút prev/next

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {

  // Danh sách ảnh slider – dùng ảnh mua sắm từ Unsplash (public)
  slides = [
    {
      url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=500&fit=crop',
      alt: 'Shopping lifestyle 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=500&fit=crop',
      alt: 'Shopping lifestyle 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&h=500&fit=crop',
      alt: 'Shopping lifestyle 3'
    }
  ];

  currentIndex = 0;           // Ảnh đang hiển thị (index)
  private timer: any = null;  // Tham chiếu đến setInterval để dừng khi component bị hủy

  // Gọi startAutoPlay() khi component được khởi tạo
  ngOnInit(): void {
    this.startAutoPlay();
  }

  // Dừng timer khi component bị destroy (tránh memory leak)
  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  // Chạy tự động chuyển slide mỗi 3 giây
  startAutoPlay(): void {
    this.timer = setInterval(() => this.nextSlide(), 3000);
  }

  stopAutoPlay(): void {
    if (this.timer) clearInterval(this.timer);
  }

  // Chuyển sang ảnh tiếp theo (vòng lặp)
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  // Quay lại ảnh trước (vòng lặp)
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  // Chuyển đến ảnh cụ thể khi click thumbnail
  goToSlide(index: number): void {
    this.currentIndex = index;
    // Reset timer để không bị chuyển ngay sau khi click
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
