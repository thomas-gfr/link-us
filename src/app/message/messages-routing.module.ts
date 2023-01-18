import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageContentComponent } from '../shared/components/message-content/message-content.component';
import { MessagePage } from './message.page';

const routes: Routes = [
    {
        path: '',
        component: MessagePage,
        children: [
            {
                path: 'conversation/:id',
                component: MessageContentComponent,
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
