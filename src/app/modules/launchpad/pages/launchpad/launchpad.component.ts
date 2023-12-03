import { Component } from '@angular/core';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.scss'],
})
export class LaunchpadComponent {

  //API calling here
  cardData = [
    { designation: 'Director General', salaryCategory: 'HM 2-1' },
    { designation: 'Deputy Director General', salaryCategory: 'HM 1-3' },
    { designation: 'Director (Admin & HR)', salaryCategory: 'HM 1-1' },
    { designation: 'Director (Finance)', salaryCategory: 'HM 1-1' },
    { designation: 'Manager (Programme)', salaryCategory: 'HM 1-1' },
    { designation: 'Clinical Psychologist', salaryCategory: 'HM 1-1' },
    { designation: 'Director (Law and Enforcement)', salaryCategory: 'HM 1-1' },
  ];

  summaryCardData = [
    { title: 'Total Applications', total: 100 },
    { title: 'Total Opened Designations', total: 10 },
    { title: 'Total Staff', total: 225 },
  ]

}
