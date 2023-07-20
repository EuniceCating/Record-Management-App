import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdtrackPageRoutingModule } from './adtrack-routing.module';

import { AdtrackPage } from './adtrack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdtrackPageRoutingModule
  ],
  declarations: [AdtrackPage]
})
export class AdtrackPageModule {}
