import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { MessageCardComponent } from './components/message-card/message-card.component';
import { MessageContentComponent } from './components/message-content/message-content.component';


@NgModule({
    declarations: [
        MessageCardComponent,
        MessageContentComponent,
    ],
    imports: [
        IonicModule, 
        CommonModule, 
        FormsModule,
        BrowserModule, 
    ],
    exports: [
        MessageCardComponent,
        MessageContentComponent,
    ],
})
export class SharedModule {}
