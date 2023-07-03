import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CustomMaterialModule } from 'src/app/material.module';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { ApplicationDataStore } from 'src/app/dataStores/application.datastore.service';
import { CONTROLLER_TYPES } from 'src/app/constants';
import { IPageDetail } from 'src/app/interfaces/application.interfaces';

interface ICommonKeyValuePair {
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
    NgIf,
  ],
})
export class FormsPopUp implements OnInit {
  controlName: string = '';
  selectedPage: string = '';
  selectTextType: string = '';
  parallelAnswer = false;
  required = false;

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

  answerType: ICommonKeyValuePair[] = [
    { value: CONTROLLER_TYPES.TEXT, viewValue: 'Text' },
    { value: CONTROLLER_TYPES.RADIO, viewValue: 'Radio Button' },
    { value: CONTROLLER_TYPES.DROPDOWNS, viewValue: 'Select Option' },
    { value: CONTROLLER_TYPES.CHECKBOX, viewValue: 'Select Options (Multi)' },
    { value: CONTROLLER_TYPES.FILE, viewValue: 'File' },
  ];

  tempReferenceCategory: ICommonKeyValuePair[] = [
    { value: '1', viewValue: 'Subjects' },
    { value: '3', viewValue: 'Qualifications' },
    { value: '4', viewValue: 'Grades' },
  ];

  tempReferenceCategoryInfo: ICommonKeyValuePair[] = [
    { value: '1', viewValue: 'O/L Subjects' },
    { value: '3', viewValue: 'A/L Subject' },
    { value: '4', viewValue: 'Grade Values' },
  ];

  textTypes: ICommonKeyValuePair[] = [
    { value: '1', viewValue: 'Plain Text' },
    { value: '2', viewValue: 'Email' },
    { value: '3', viewValue: 'Phone' },
    { value: '4', viewValue: 'NIC' },
  ];

  question = new FormControl('', [Validators.required]);
  placeholder = new FormControl('', []);
  radioOptionOne = new FormControl('', [Validators.required]);
  radioOptionTwo = new FormControl('', [Validators.required]);
  referenceCategory = new FormControl('', [Validators.required]);
  referenceCategoryInfo = new FormControl('', [Validators.required]);

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
