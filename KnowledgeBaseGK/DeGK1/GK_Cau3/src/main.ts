// main.ts – Điểm khởi động của ứng dụng Angular
// platformBrowserDynamic().bootstrapModule() tải AppModule và khởi chạy app

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
