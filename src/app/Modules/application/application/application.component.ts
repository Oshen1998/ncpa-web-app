import { Component, OnInit } from '@angular/core';
import { ApplicationPreliminaryPopup } from '../../pop-ups/application-preliminary/application-preliminary.pop-up';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicationDataStore } from 'src/app/dataStores/application.datastore.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private applicationDetails: ApplicationDataStore
  ) {}

  ngOnInit(): void {}

  addNewApplication() {
    const dialogRef = this.dialog.open(ApplicationPreliminaryPopup, {
      disableClose: true,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.applicationDetails.setInitialPageHeaderDetails(data);
        this.router.navigate(['app/application/form']);
      }
    });
  }
}
