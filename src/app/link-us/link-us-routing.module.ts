import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkUsPage } from './link-us.page';

const routes: Routes = [
  {
    path: '',
    component: LinkUsPage,
    children: [
      {
        path: 'messages',
        loadChildren: () =>
          import('../message/message.module').then((m) => m.MessagePageModule),
      },
      {
        path: 'communaute',
        loadChildren: () =>
          import('../community/community.module').then((m) => m.CommunityPageModule),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('../map/map.module').then((m) => m.MapPageModule),
      },
      {
        path: 'evenements',
        loadChildren: () =>
          import('../event/event.module').then((m) => m.EventPageModule),
      },
      {
        path: 'help',
        loadChildren: () =>
          import('../help/help.module').then((m) => m.HelpPageModule),
      },
      {
        path: '',
        redirectTo: '/messages',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/messages',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LinkUsPageRoutingModule {}
