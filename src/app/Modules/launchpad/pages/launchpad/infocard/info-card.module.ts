import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';



import { Infocard } from './info-card.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'; 

@NgModule({
  declarations: [Infocard],
  imports: [CommonModule, MatSlideToggleModule, MatButtonModule, MatCardModule,  MatDialogModule, FormsModule, ReactiveFormsModule],
  exports: [Infocard],
  entryComponents: [ConfirmationDialogComponent],
})
export class InfocardModule { }