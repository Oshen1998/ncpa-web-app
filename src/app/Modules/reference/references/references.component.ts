import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReferencePopup } from '../../../popups/reference/reference.popup';
import { ActivatedRoute } from '@angular/router';
import { ReferenceDataService } from 'src/app/dataStores/reference.datastore.service';
import { AddCategoryPopup } from '../../../popups/add-reference-category/add-category.popup';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private referenceDataService: ReferenceDataService
  ) {
    this.referenceDataService.getChangeRefValue().subscribe((res) => {
      console.log(res);
      this.changeReferenceCategory();
    });

    this.referenceDataService
      .getReferenceCategoryAddAction()
      .subscribe((res) => {
        if (res.isNewCategory) {
          // call to pop up here
          const dialogRef = this.dialog.open(AddCategoryPopup, {
            width: '600px',
            disableClose: true,
          });
          dialogRef.afterClosed().subscribe((res) => {
            if (res) {
              this.referenceDataService.addReferenceCategoryData([res]);
            }
          });
        }
      });
  }

  ngOnInit(): void {}

  changeReferenceCategory() {
    console.log('fire');
  }

  addReferences() {
    const dialogRef = this.dialog.open(ReferencePopup, { width: '600px', });
  }
}
