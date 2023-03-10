import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommunityPage } from './community.page';

import { CommunityPageRoutingModule } from './community-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommunityPageRoutingModule,
  ],
  declarations: [CommunityPage],
})
export class CommunityPageModule {}
