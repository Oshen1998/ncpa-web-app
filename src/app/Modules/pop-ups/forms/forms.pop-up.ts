import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CustomMaterialModule } from 'src/app/material.module';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import {
  ApplicationDataStore,
  CONTROLLER_TYPES,
  IPageDetail,
} from 'src/app/dataStores/application.datastore.service';

interface IAnswer {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forms.pop-up',
  templateUrl: 'forms.pop-up.html',
  standalone: true,
  imports: [
    // common material Module
    CustomMaterialModule,
    // pop required modules
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgFor,
  ],
  providers: [ApplicationDataStore],
})
export class FormsPopUp implements OnInit {
  selectedAnswerType: string = '';
  selectedPage: string = '';
  pageDetails: IPageDetail[] = [];

  constructor(
    private dialogRef: MatDialogRef<FormsPopUp>,
    @Inject(MAT_DIALOG_DATA) data: IAnswer,
    private applicationDataStore: ApplicationDataStore
  ) {
    this.applicationDataStore.getPageDetails().subscribe((res) => {
      res.forEach((value) => {
        console.log(value);

        this.pageDetails.push(value);
      });
    });
  }

  ngOnInit(): void {
    console.log('here');
  }

  answerType: IAnswer[] = [
    { value: CONTROLLER_TYPES.TEXT, viewValue: 'Text' },
    { value: CONTROLLER_TYPES.RADIO, viewValue: 'Select' },
    { value: CONTROLLER_TYPES.DROPDOWNS, viewValue: 'Dropdown' },
    { value: CONTROLLER_TYPES.FILE, viewValue: 'File' },
  ];

  question = new FormControl('', [Validators.required]);
  subTitle = new FormControl('', []);
  extraInfo = new FormControl('', []);

  sendData() {
    const _data = {
      title: this.question.value,
      subTitle: this.subTitle.value,
      extraInfo: this.extraInfo.value,
    };
    this.dialogRef.close(_data);
  }
}
