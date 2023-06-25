import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddPagePopUp } from '../../pop-ups/add-page/add-page.popup';
import {
  ApplicationDataStore,
  IPageDetail,
} from 'src/app/dataStores/application.datastore.service';
import { FormsPopUp } from '../../pop-ups/forms/forms.pop-up';

export interface IFormArray {
  pageName: string;
  actualPageName: string;
  pageNo: number;
  fields?: any[];
}

@Component({
  selector: 'app-recruitment-application',
  templateUrl: './recruitment-application.component.html',
  styleUrls: ['./recruitment-application.component.scss'],
})
export class RecruitmentApplicationComponent implements OnInit {
  formArray: IFormArray[] = [];
  count = 0;
  pageTitle = '';
  pageSubTitle = '';
  pageExtraInfo = '';
  pageDetails: IPageDetail[] = [];

  fields = [];
  formGroupFields = {};

  FormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private applicationDataStore: ApplicationDataStore
  ) {}

  ngOnInit(): void {}

  addPage() {
    const dialogRef = this.dialog.open(AddPagePopUp, {
      disableClose: true,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.applicationDataStore
          .getInitialPageHeaderDetails()
          .subscribe((res) => {
            this.pageTitle = res.title;
            this.pageSubTitle = res?.subTitle ? res?.subTitle : '';
            this.pageExtraInfo = res?.extraInfo ? res?.extraInfo : '';
          });

        this.count++;
        const formDetails = {
          pageName: result.pageName,
          actualPageName: result.actualPageName,
          pageNo: this.count,
        };

        // push details to formArray
        this.formArray.push(formDetails);
        this.pageDetails.push({
          value: formDetails.pageName,
          viewValue: formDetails.actualPageName,
        });
      }
    });
  }

  removePage(index: number, data: any) {
    console.log(this.formArray);

    // if (index > -1) {
    //   this.formArray.splice(index, 1);
    // }
  }

  AddFields() {
    this.applicationDataStore.setPageData(this.pageDetails);
    const dialogRef = this.dialog.open(FormsPopUp, {
      disableClose: true,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Manage here
      }
    });
  }
}
