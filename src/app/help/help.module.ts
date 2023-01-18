import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelpPage } from './help.page';

import { HelpPageRoutingModule } from './help-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, HelpPageRoutingModule],
  declarations: [HelpPage],
})
export class HelpPageModule {}
