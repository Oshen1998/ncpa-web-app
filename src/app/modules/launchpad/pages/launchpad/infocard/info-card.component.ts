import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class Infocard {
  ctrl = new FormControl(true);
  @Input() designation: string;
  @Input() salaryCategory: string;

  constructor(public dialog: MatDialog) {
    this.designation = '';
    this.salaryCategory = '';
  }

  color: string = 'primary';
  isToggleDisabled: boolean = false;

  onToggleSwitchClick() {
    if (this.isToggleDisabled) {
      return;
    }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        designation: this.designation,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.isToggleDisabled = true;
        this.ctrl.setValue(false);
        //API call here, patch value to false 

        // alert(` Toggle is ${this.ctrl.value}`);

      } else if (result === false || result === undefined) {
        this.isToggleDisabled = false;
        this.ctrl.setValue(true);
        // alert(` Toggle is ${this.ctrl.value}`);
      }
    });
  }


}
