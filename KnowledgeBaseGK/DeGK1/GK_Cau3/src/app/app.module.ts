// app.module.ts – Module gốc của ứng dụng
// Khai báo tất cả Components và import các Module cần thiết

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Dùng để gọi API REST
import { FormsModule } from '@angular/forms';             // Dùng cho [(ngModel)] trong search

import { AppComponent }          from './app.component';
import { NavbarComponent }       from './components/navbar/navbar.component';
import { HeroComponent }         from './components/hero/hero.component';
import { ProductListComponent }  from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,         // Component gốc
    NavbarComponent,      // Thanh điều hướng
    HeroComponent,        // Banner slider đầu trang
    ProductListComponent, // Danh sách sản phẩm + card
  ],
  imports: [
    BrowserModule,        // Các directive cơ bản: *ngIf, *ngFor, ...
    HttpClientModule,     // Cho phép inject HttpClient để gọi API
    FormsModule,          // Two-way binding: [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent] // Component được render đầu tiên
})
export class AppModule { }
