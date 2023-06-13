import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchpadRoutingModule } from './launchpad-routing.module';
import { LaunchpadComponent } from './pages/launchpad/launchpad.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    LaunchpadComponent
  ],
  imports: [
    CommonModule,
    LaunchpadRoutingModule,
    NgxChartsModule
  ]
})
export class LaunchpadModule { }
