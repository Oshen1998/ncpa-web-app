import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';

import { CustomMaterialModule } from 'src/app/material.module';
import { NotFoundDataComponent } from './not-found-data.component';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [NotFoundDataComponent],
  exports: [NotFoundDataComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
    LottieModule.forRoot({ player: playerFactory, useWebWorker: true }),
  ],
})
export class NotFoundDataModule {}
