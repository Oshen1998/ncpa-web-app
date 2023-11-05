import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchpadRoutingModule } from './launchpad-routing.module';
import { LaunchpadComponent } from './pages/launchpad/launchpad.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomMaterialModule } from 'src/app/material.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';
import { InfocardModule } from './pages/launchpad/infocard/info-card.module';
import { SummaryCardModule } from './pages/launchpad/summarycard/summary-card.module';

@NgModule({
  declarations: [LaunchpadComponent],
  imports: [
    CommonModule,
    LaunchpadRoutingModule,
    NgxChartsModule,
    CustomMaterialModule,
    DataTableModule,
    InfocardModule,
    SummaryCardModule
  ],
})
export class LaunchpadModule {}
