import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NoticesRoutingModule } from './notices-routing.module';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { CustomMaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNoticeComponent } from './view-notice/view-notice.component';

@NgModule({
  declarations: [
    CreateNoticeComponent,
    ViewNoticeComponent
  ],
  imports: [
    CommonModule,
    NoticesRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class NoticesModule { }
