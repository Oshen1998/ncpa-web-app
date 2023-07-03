import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CustomMaterialModule } from 'src/app/material.module';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IReferenceCategory } from 'src/app/interfaces/reference.interface';
import { NgFor } from '@angular/common';

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
    NgFor,
  ],
})
export class AddCategoryPopup implements OnInit {
  fieldFormGroup: FormGroup;
  fields: FormArray;

  constructor(
    private dialogRef: MatDialogRef<AddCategoryPopup>,
    private fb: FormBuilder
  ) {
    this.fieldFormGroup = new FormGroup({
      fields: new FormArray([]),
    });
    this.fields = this.fieldFormGroup.get('fields') as FormArray;
  }

  types = [
    {
      key: 1,
      value: 'Text',
    },
    {
      key: 2,
      value: 'Number',
    },
  ];

  category = new FormControl('', [Validators.required]);

  ngOnInit(): void {}

  createFields(): FormGroup {
    return this.fb.group({
      key: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }

  addFields() {
    this.fields.push(this.createFields());
  }

  sendData() {
    const data: IReferenceCategory = {
      id: new Date().toDateString(),
      name: this.category.value || '',
    };
    this.dialogRef.close(data);
  }
}
