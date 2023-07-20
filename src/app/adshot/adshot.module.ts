import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdshotPageRoutingModule } from './adshot-routing.module';

import { AdshotPage } from './adshot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdshotPageRoutingModule
  ],
  declarations: [AdshotPage]
})
export class AdshotPageModule {}
