import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LinkUsPageRoutingModule } from './link-us-routing.module';

import { LinkUsPage } from './link-us.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, LinkUsPageRoutingModule],
  declarations: [LinkUsPage],
})
export class LinkUsPageModule {}
