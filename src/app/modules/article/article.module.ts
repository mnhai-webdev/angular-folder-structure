import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { LoadingModule } from '../../shared/components/loading/loading.module';


@NgModule({
  declarations: [ArticleComponent, ArticleDetailComponent, ArticleListComponent],
    imports: [
        CommonModule,
        ArticleRoutingModule,
        LoadingModule
    ]
})
export class ArticleModule { }
