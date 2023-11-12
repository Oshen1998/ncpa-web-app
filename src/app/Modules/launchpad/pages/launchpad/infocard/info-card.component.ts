import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';




@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class Infocard {
  @Input() designation: string;
  @Input() salaryCategory: string;
  @Input() isAssigned: boolean;

  constructor(public dialog: MatDialog) {
    this.designation = '';
    this.salaryCategory = '';
    this.isAssigned = false;
  }

  color: string = 'primary';
  onToggleSwitchClick() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        designation: this.designation,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User confirmed deactivation, set the boolean value to false
        this.isAssigned = false;
      }
    });
  }
  

}
