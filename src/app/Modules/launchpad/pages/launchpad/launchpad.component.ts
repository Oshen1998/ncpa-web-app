import { Component } from '@angular/core';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.scss'],
})
export class LaunchpadComponent {

  //API calling here
  cardData = [
    { designation: 'Director General', salaryCategory: 'HM 2-1', isAssigned: true },
    { designation: 'Deputy Director General', salaryCategory: 'HM 1-3', isAssigned: true },
    { designation: 'Director (Admin & HR)', salaryCategory: 'HM 1-1', isAssigned: true },
    { designation: 'Director (Finance)', salaryCategory: 'HM 1-1', isAssigned: true },
    { designation: 'Manager (Programme)', salaryCategory: 'HM 1-1', isAssigned: true },
    { designation: 'Clinical Psychologist', salaryCategory: 'HM 1-1', isAssigned: true },
    { designation: 'Director (Law and Enforcement)', salaryCategory: 'HM 1-1', isAssigned: true },
  ];

  summaryCardData = [
    { title: 'Total Applications', total: 100 },
    { title: 'Total Opened Designations', total: 10 },
    { title: 'Total Staff', total: 225 },
  ]

}
