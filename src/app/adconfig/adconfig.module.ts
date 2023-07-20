import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdconfigPageRoutingModule } from './adconfig-routing.module';

import { AdconfigPage } from './adconfig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdconfigPageRoutingModule
  ],
  declarations: [AdconfigPage]
})
export class AdconfigPageModule {}
