import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../authentication/guard/auth.guard';

import { VideoLibraryComponent } from './video-library/video-library.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        component: VideoLibraryComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
