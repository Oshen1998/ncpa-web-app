import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchpadRoutingModule } from './launchpad-routing.module';
import { LaunchpadComponent } from './pages/launchpad/launchpad.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomMaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [LaunchpadComponent],
  imports: [
    CommonModule,
    LaunchpadRoutingModule,
    NgxChartsModule,
    CustomMaterialModule,
  ],
})
export class LaunchpadModule {}
