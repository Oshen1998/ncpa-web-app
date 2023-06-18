import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CustomMaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticesRoutingModule } from './notices-routing.module';
import { NoticeComponent } from './notice/notice.component';

@NgModule({
  declarations: [
    NoticeComponent
  ],
  imports: [
    CommonModule,
    NoticesRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class NoticesModule {}
