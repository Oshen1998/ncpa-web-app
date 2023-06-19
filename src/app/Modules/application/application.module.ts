import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'src/app/material.module';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application/application.component';
import { RecruitmentApplicationComponent } from './recruitment-application/recruitment-application.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApplicationComponent, RecruitmentApplicationComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    CustomMaterialModule,
    FormsModule,
  ],
})
export class ApplicationModule {}
