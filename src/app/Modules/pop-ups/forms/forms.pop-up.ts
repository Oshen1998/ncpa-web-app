import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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

export interface IFieldDetails {
  question: string;
  placeholder?: string;
  controlName: string;
  selectedPage: string;
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
})
export class FormsPopUp implements OnInit {
  controlName: string = '';
  selectedPage: string = '';
  pageDetails: IPageDetail[] = [];

  constructor(
    private dialogRef: MatDialogRef<FormsPopUp>,
    private applicationDataStore: ApplicationDataStore
  ) {}

  ngOnInit(): void {
    this.applicationDataStore.getPageDetails().subscribe((res) => {
      res.forEach((item) => {
        this.pageDetails.push(item);
      });
    });
  }

  answerType: IAnswer[] = [
    { value: CONTROLLER_TYPES.TEXT, viewValue: 'Text' },
    { value: CONTROLLER_TYPES.RADIO, viewValue: 'Select Options' },
    { value: CONTROLLER_TYPES.DROPDOWNS, viewValue: 'Dropdown' },
    { value: CONTROLLER_TYPES.CHECKBOX, viewValue: 'Check Box' },
    { value: CONTROLLER_TYPES.FILE, viewValue: 'File' },
  ];

  question = new FormControl('', [Validators.required]);
  placeholder = new FormControl('', []);

  sendData() {
    const _data: IFieldDetails = {
      question: this.question.value || '',
      placeholder: this.question.value ? this.question.value : '',
      selectedPage: this.selectedPage,
      controlName: this.controlName,
    };
    this.dialogRef.close(_data);
  }
}
