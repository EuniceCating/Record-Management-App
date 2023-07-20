import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdchivPageRoutingModule } from './adchiv-routing.module';

import { AdchivPage } from './adchiv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdchivPageRoutingModule
  ],
  declarations: [AdchivPage]
})
export class AdchivPageModule {}
