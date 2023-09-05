import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentsRoutingModule } from './recruitments-routing.module';
import { CustomMaterialModule } from 'src/app/material.module';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NotFoundDataModule } from 'src/app/shared/not-found-data/not-found-data.module';

@NgModule({
  declarations: [RecruitmentComponent],
  imports: [
    CommonModule,
    RecruitmentsRoutingModule,
    CustomMaterialModule,
    NgxChartsModule,
    NotFoundDataModule
  ],
})
export class RecruitmentsModule {}
