import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdshotPage } from './adshot.page';

const routes: Routes = [
  {
    path: '',
    component: AdshotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdshotPageRoutingModule {}
