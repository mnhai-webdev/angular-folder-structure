import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyTabComponent } from './lazy-tab.component';

const routes: Routes = [
  {
    path: '', component: LazyTabComponent,
    children: [
      { path: 'section-one', loadChildren: () => import('../../modules/lazy-tab/section-one/section-one.module').then(m => m.SectionOneModule) },
      { path: 'section-two', loadChildren: () => import('../../modules/lazy-tab/section-two/section-two.module').then(m => m.SectionTwoModule) },
      { path: 'section-three', loadChildren: () => import('../../modules/lazy-tab/section-three/section-three.module').then(m => m.SectionThreeModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyTabRoutingModule { }
