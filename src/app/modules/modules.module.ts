import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { MaterialModule } from '../shared/material.module';

import { VideoLibraryComponent } from './video-library/video-library.component';

@NgModule({
  declarations: [
    VideoLibraryComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MaterialModule
  ]
})
export class ModulesModule { }
