import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchivPageRoutingModule } from './archiv-routing.module';

import { ArchivPage } from './archiv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchivPageRoutingModule
  ],
  declarations: [ArchivPage]
})
export class ArchivPageModule {}
