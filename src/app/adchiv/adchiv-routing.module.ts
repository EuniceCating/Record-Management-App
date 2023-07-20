import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdchivPage } from './adchiv.page';

const routes: Routes = [
  {
    path: '',
    component: AdchivPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdchivPageRoutingModule {}
