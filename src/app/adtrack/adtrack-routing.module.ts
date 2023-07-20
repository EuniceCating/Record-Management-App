import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdtrackPage } from './adtrack.page';

const routes: Routes = [
  {
    path: '',
    component: AdtrackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdtrackPageRoutingModule {}
