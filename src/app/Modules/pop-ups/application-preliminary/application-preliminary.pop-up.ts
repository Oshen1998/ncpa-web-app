import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CustomMaterialModule } from 'src/app/material.module';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

/**
 * @title Dialog elements
 */
export interface IPreliminaryInfo {
  title: string;
  subTitle?: string;
  extraInfo?: string;
}

@Component({
  selector: 'app-application-preliminary.pop-up',
  templateUrl: 'application-preliminary.pop-up.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    CustomMaterialModule,
    ReactiveFormsModule,
  ],
})
export class ApplicationPreliminaryPopup {
  constructor(
    private dialogRef: MatDialogRef<ApplicationPreliminaryPopup>,
    @Inject(MAT_DIALOG_DATA) data: IPreliminaryInfo
  ) {}

  title = new FormControl('', [Validators.required]);
  subTitle = new FormControl('', []);
  extraInfo = new FormControl('', []);

  sendData() {
    const _data = {
      title: this.title.value,
      subTitle: this.subTitle.value,
      extraInfo: this.extraInfo.value,
    };
    this.dialogRef.close(_data);
  }
}
