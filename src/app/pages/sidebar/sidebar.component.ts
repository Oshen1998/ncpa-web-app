import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ReferenceDataService } from 'src/app/dataStores/reference.datastore.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isReferenceClicked = false;

  constructor(
    private observer: BreakpointObserver,
    private referenceDataService: ReferenceDataService
  ) {}

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

  references = [
    {
      id: '1',
      referenceName: 'O/L Subjects',
    },
    {
      id: '2',
      referenceName: 'A/L Subjects',
    },
    {
      id: '3',
      referenceName: 'Districts',
    },
  ];

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
