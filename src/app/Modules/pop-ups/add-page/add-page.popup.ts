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
  selector: 'add-page.popup',
  templateUrl: 'add-page.popup.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    CustomMaterialModule,
    ReactiveFormsModule,
  ],
})
export class AddPagePopUp {
  constructor(
    private dialogRef: MatDialogRef<AddPagePopUp>,
    @Inject(MAT_DIALOG_DATA) data: IAddPage
  ) {}

  title = new FormControl('', [Validators.required]);

  sendData() {
    const _data = {
      actualPageName: this.title.value,
      pageName: this.title.value?.replaceAll(' ', '_').toLowerCase(),
    };
    this.dialogRef.close(_data);
  }
}
