import { Component, OnInit } from '@angular/core';
import { ApplicationPreliminaryPopup } from '../../pop-ups/application-preliminary/application-preliminary.pop-up';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  addNewApplication() {
    const dialogRef = this.dialog.open(ApplicationPreliminaryPopup, {
      disableClose: true,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.router.navigate(['app/application/form']);
      }
    });
  }
}
