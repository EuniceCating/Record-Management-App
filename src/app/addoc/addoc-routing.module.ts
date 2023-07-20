import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddocPage } from './addoc.page';

const routes: Routes = [
  {
    path: '',
    component: AddocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddocPageRoutingModule {}
