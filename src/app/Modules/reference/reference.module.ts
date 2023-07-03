import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenceRoutingModule } from './reference-routing.module';
import { ReferencesComponent } from './references/references.component';
import { CustomMaterialModule } from 'src/app/material.module';
import { NotFoundModule } from 'src/app/pages/not-found-page/not-found.module';

@NgModule({
  declarations: [ReferencesComponent],
  imports: [
    CommonModule,
    ReferenceRoutingModule,
    CustomMaterialModule,
    NotFoundModule,
  ],
})
export class ReferenceModule {}
