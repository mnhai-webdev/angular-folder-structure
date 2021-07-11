import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'article', loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule) },
  { path: 'lazy-component', loadChildren: () => import('./modules/lazy-component/lazy-component.module').then(m => m.LazyComponentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
