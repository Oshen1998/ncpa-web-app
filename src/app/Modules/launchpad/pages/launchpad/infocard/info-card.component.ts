import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class Infocard {
  @Input() designation: string;
  @Input() salaryCategory: string;
  @Input() isAssigned: boolean;

  constructor() {
    this.designation = '';
    this.salaryCategory = '';
    this.isAssigned = false;
  }

  color: string = 'primary';

}
