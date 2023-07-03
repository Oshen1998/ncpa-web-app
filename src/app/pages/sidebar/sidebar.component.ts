import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ReferenceDataService } from 'src/app/dataStores/reference.datastore.service';
import { IReferenceCategory } from 'src/app/interfaces/reference.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isReferenceClicked = false;
  references: IReferenceCategory[] = [];

  constructor(
    private observer: BreakpointObserver,
    private referenceDataService: ReferenceDataService
  ) {
    this.referenceDataService.getReferenceCategoryData().subscribe((res) => {
      res.forEach((item) => this.references.push(item));
    });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 1000px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }


  onReference() {
    this.isReferenceClicked = !this.isReferenceClicked;
  }

  onTriggerAddCategory() {
    this.referenceDataService.addReferenceCategory();
  }

  onChangeRef(ref: string) {
    this.referenceDataService.referenceChange(ref);
  }
}
