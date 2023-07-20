import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdconfigPage } from './adconfig.page';

const routes: Routes = [
  {
    path: '',
    component: AdconfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdconfigPageRoutingModule {}
