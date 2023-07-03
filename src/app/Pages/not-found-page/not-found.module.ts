import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';

import { CustomMaterialModule } from 'src/app/material.module';
import { NotFoundPageComponent } from 'src/app/pages/not-found-page/not-found-page.component';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [NotFoundPageComponent],
  exports: [NotFoundPageComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
    LottieModule.forRoot({ player: playerFactory, useWebWorker: true }),
  ],
})
export class NotFoundModule {}
