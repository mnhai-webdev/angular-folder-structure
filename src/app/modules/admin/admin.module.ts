import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminArticleListComponent } from './admin-article-list/admin-article-list.component';
import { LoadingModule } from '../../shared/components/loading/loading.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [AdminComponent, AdminArticleListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoadingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AdminModule { }
