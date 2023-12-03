import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { SummaryCard } from './summary-card.component';

@NgModule({
  declarations: [SummaryCard],
  imports: [CommonModule, MatSlideToggleModule, MatButtonModule, MatCardModule],
  exports: [SummaryCard]
})
export class SummaryCardModule { }