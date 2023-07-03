import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CustomMaterialModule } from 'src/app/material.module';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

export interface IAddPage {
  title: string;
}

@Component({
  selector: 'add-category.popup',
  templateUrl: 'add-category.popup.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    CustomMaterialModule,
    ReactiveFormsModule,
  ],
})
export class AddCategoryPopup {
  constructor(private dialogRef: MatDialogRef<AddCategoryPopup>) {}

  title = new FormControl('', [Validators.required]);

  sendData() {
    this.dialogRef.close('data');
  }
}
