import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminArticleListComponent } from './admin-article-list/admin-article-list.component';
import { LoadingModule } from '../../shared/components/loading/loading.module';


@NgModule({
  declarations: [AdminComponent, AdminArticleListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoadingModule
  ]
})
export class AdminModule { }
