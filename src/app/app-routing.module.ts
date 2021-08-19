import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { MaterialLayoutComponent } from './layouts/material-layout/material-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MaterialLayoutComponent,
    children: [
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
      { path: 'article', loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule) },
      { path: 'lazy-component', loadChildren: () => import('./modules/lazy-component/lazy-component.module').then(m => m.LazyComponentModule) },
      { path: 'lazy-tab', loadChildren: () => import('./modules/lazy-tab/lazy-tab.module').then(m => m.LazyTabModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
