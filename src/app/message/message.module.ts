import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagePage } from './message.page';
import { MessagesRoutingModule } from './messages-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MessagesRoutingModule,
    SharedModule
  ],
  declarations: [MessagePage],
})
export class MessagePageModule {}
