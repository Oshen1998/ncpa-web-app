import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { Infocard } from './info-card.component';

@NgModule({
  declarations: [Infocard],
  imports: [CommonModule, MatSlideToggleModule, MatButtonModule, MatCardModule],
  exports: [Infocard]
})
export class InfocardModule { }