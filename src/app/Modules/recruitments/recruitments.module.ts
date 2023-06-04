import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentsRoutingModule } from './recruitments-routing.module';
import { CustomMaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RecruitmentsRoutingModule,
    CustomMaterialModule
  ]
})
export class RecruitmentsModule { }
