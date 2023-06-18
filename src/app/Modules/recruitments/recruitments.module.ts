import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentsRoutingModule } from './recruitments-routing.module';
import { CustomMaterialModule } from 'src/app/material.module';
import { RecruitmentComponent } from './recruitment/recruitment.component';


@NgModule({
  declarations: [
    RecruitmentComponent
  ],
  imports: [
    CommonModule,
    RecruitmentsRoutingModule,
    CustomMaterialModule
  ]
})
export class RecruitmentsModule { }
