import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './content/content.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ViewComponent } from './view/view.component';
import { LikedComponent } from './liked/liked.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HeroSectionComponent
      },
      {
        path: 'explore',
        component: ContentComponent
      },
      {
        path: 'view/:id',
        component: ViewComponent
      },
      {
        path: 'liked',
        component: LikedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
