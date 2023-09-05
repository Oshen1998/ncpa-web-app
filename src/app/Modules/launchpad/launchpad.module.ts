import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchpadRoutingModule } from './launchpad-routing.module';
import { LaunchpadComponent } from './pages/launchpad/launchpad.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomMaterialModule } from 'src/app/material.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';

@NgModule({
  declarations: [LaunchpadComponent],
  imports: [
    CommonModule,
    LaunchpadRoutingModule,
    NgxChartsModule,
    CustomMaterialModule,
    DataTableModule
  ],
})
export class LaunchpadModule {}
