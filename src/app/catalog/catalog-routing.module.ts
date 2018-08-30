import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from 'ng2-meta';

import { SectionsComponent } from './sections/sections.component';
import { StreetComponent } from './street/street.component';
import { AntiFireComponent } from './anti-fire/anti-fire.component';
import { AvtomaticaComponent } from './avtomatica/avtomatica.component';
import { BarrierComponent } from './barrier/barrier.component';
import { RolletComponent } from './rollet/rollet.component';
import { SpeedRollComponent } from './speed-roll/speed-roll.component';
import { TransshipmentComponent } from './transshipment/transshipment.component';
import { RampAndTableComponent } from './ramp-and-table/ramp-and-table.component';


const routes: Routes = [
  {
    path: 'catalog/section',
    component: SectionsComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Секционные ворота подъемные для гаража, дома, склада — купить в Киеве',
        description: 'Покупайте подъемные ворота гаражные, промышленные, панорамные на vorotaprom.com.ua ☏(098)17-17-538✓Ворота под ключ по цене производителя✓Доставка по Украине',
        keywords: 'секционные ворота, подъемные ворота, купить гаражные ворота, секционные гаражные ворота, купить секционные ворота, ворота в гараж'
      }
    }
  },
  {
    path: 'catalog/street',
    component: StreetComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Калитки, ворота для дачи и дома. Купить ворота сэндвич панель в Киеве',
        description: 'Заказывайте уличные ворота с калиткой в магазине ➦ vorotaprom.com.ua ☏(098)17-17-538✓Откатные, распашные✓Широкий выбор, монтаж✓Разумные цены✓Доставка по Украине',
        keywords: 'уличные ворота, калитка, ворота с калиткой, купить калитку, купить уличные ворота, ворота уличные распашные, ворота на улицу'
      }
    }
  },
  {
    path: 'catalog/anti-fire',
    component: AntiFireComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Ворота противопожарные. Купить в Киеве распашные, секционные, откатные',
        description: 'Заказывайте ворота противопожарные на сайте vorotaprom.com.ua ☏(098)17-17-538✓Ворота в любом размере и дизайне по заводской цене✓Доставка по Украине✓Установка',
        keywords: 'распашные противопожарные ворота, купить противопожарные ворота, откатные противопожарные ворота, противопожарные ворота цена'
      }
    }
  },
  {
    path: 'catalog/avtomatica',
    component: AvtomaticaComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Автоматика для ворот — купить электропривод для ворот в Киеве недорого',
        description: 'Покупайте автоматику для распашных, откатных, секционных ворот на сайте vorotaprom.com.ua ☏(098)17-17-538✓Любой привод для ворот, аксессуары✓Доставка по Украине',
        keywords: 'автоматика для ворот, автоматика для распашных ворот, автоматика для откатных ворот, привод для ворот, купить автоматику для ворот'
      }
    }
  },
  {
    path: 'catalog/barrier',
    component: BarrierComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Шлагбаум — купить в Киеве. Парковочный барьер Дорхан по низкой цене',
        description: 'Покупайте автоматический шлагбаум Дорхан на сайте vorotaprom.com.ua ☏(098)17-17-538✓Цепной барьер шлагбаум для контроля въезда✓Разумная цена✓Доставка по Украине',
        keywords: 'парковочный барьер, цепной барьер, шлагбаум купить, шлагбаум автоматический, шлагбаум дорхан, шлагбаум doorhan, шлагбаум цена'
      }
    }
  },
  {
    path: 'catalog/rollet',
    component: RolletComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Рольставни для окон, подъемные ворота роллетные — купить в Киеве',
        description: 'Покупайте рольворота и рольставни защитные на сайте vorotaprom.com.ua ☏(098)17-17-538✓Роллеты из стали и алюминия по цене производителя✓Доставка по Украине',
        keywords: 'рольворота, рольставни, рулонные ворота, рольставни дорхан, купить рольворота, рольворота уличные, рольворота для гаража, ролеты'
      }
    }
  },
  {
    path: 'catalog/speed-roll',
    component: SpeedRollComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Подъемные автоматические ворота скоростные, завесы — купить в Киеве',
        description: 'Покупайте завесы полосовые, промышленные ворота на сайте vorotaprom.com.ua ☏(098)17-17-538✓Ворота из стали и пвх✓Отменное качество, цена✓Доставка по Украине',
        keywords: 'скоростные ворота, пвх ворота, полосовые завесы, пленочные завесы, автоматические ворота, промышленные ворота, ворота для склада'
      }
    }
  },
  {
    path: 'catalog/transshipment',
    component: TransshipmentComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Подъемная платформа ДорХан. Купить оборудование для склада в Киеве',
        description: 'Покупайте перегрузочное оборудование на сайте vorotaprom.com.ua ☏(098)17-17-538✓Откидной мост перегрузочный – широкий выбор✓Заводская цена✓Доставка по Украине',
        keywords: 'подъемная платформа, перегрузочный мост, перегрузочный тамбур, оборудование для склада, перегрузочное оборудование, откидной мост'
      }
    }
  },
  {
    path: 'catalog/ramp-and-table',
    component: RampAndTableComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Подъемный стол, подъемная платформа, мобильная рампа — купить в Киеве',
        description: 'Покупайте гидравлический подъемник, платформу на сайте vorotaprom.com.ua ☏(098)17-17-538✓Погрузочно разгрузочное оборудование по низкой цене✓Доставка по Украине',
        keywords: 'подъемный стол, мобильная рампа, погрузочная рампа, гидравлический подъемный стол, гидравлический подъемник, гидравлический стол'
      }
    }
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
