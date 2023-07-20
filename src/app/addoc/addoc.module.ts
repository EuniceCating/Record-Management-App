import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddocPageRoutingModule } from './addoc-routing.module';

import { AddocPage } from './addoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddocPageRoutingModule
  ],
  declarations: [AddocPage]
})
export class AddocPageModule {}
