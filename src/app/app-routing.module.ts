import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PaymentComponent } from './payment/payment.component';
import { MetaGuard } from 'ng2-meta';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Ворота откатные, подъемные, распашные – купить в Киеве на VorotaPROM',
        description: 'Покупайте ворота, калитки, шлагбаумы, подъемные столы, пленочные завесы на vorotaprom.com.ua ☏(098)17-17-538✓Оборудование для склада, дачи✓Доставка по Украине',
        keywords: 'ворота, калитка, купить ворота, купить калитку, автоматика для ворот, рольставни купить, шлагбаум, гаражные ворота, подъемный стол'
      }
    }
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Калитка, секционные ворота, шлагбаум, рольставни – купить в Киеве',
        description: 'Покупайте автоматические ворота для дачи, гаража, склада на сайте vorotaprom.com.ua ☏(098)17-17-538✓Ворота под ключ: изготовление, установка✓Доставка по Украине',
        keywords: 'секционные ворота, автоматические ворота, калитка, рольставни, шлагбаум, автоматика для ворот, привод для ворот, подъемные ворота'
      }
    }
  },
  { path: 'payment', component: PaymentComponent },
  {
    path: 'gallery',
    component: GalleryComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Ворота для гаража, дома, дачи, склада, калитки: фото, галерея, образцы',
        description: 'Покупайте ворота, калитки на сайте vorotaprom.com.ua ☏(098)17-17-538✓Фото, примеры работ✓10 лет опыта✓Широкий модельный ряд, цветовая гамма✓Цены производителя',
        keywords: 'ворота фото, калитки фото, откатные ворота фото, ворота для дома фото, ворота для дачи фото, ворота для гаража фото, пример ворот'
      }
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Ворота – цены. Купить ворота, рольставни, шлагбаум, завесы в Киеве',
        description: 'Покупайте гаражные ворота по цене производителя на сайте vorotaprom.com.ua ☏(098)17-17-538✓Низкие цены на калитки, роллеты, ворота✓Доставка по Украине',
        keywords: 'секционные ворота цена, ворота гараж цена, ворота цена, калитка цена, гаражные ворота цена'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
